import { RootDrawer } from '../Containers/App'

export const reducer = (state, action) => {
  // cyclical dependency? Sometimes this starts out as null
  if( RootDrawer ){
    const {router} = RootDrawer
    const newState = router.getStateForAction(action, state)
    return newState || state
  }
  return {}
}
