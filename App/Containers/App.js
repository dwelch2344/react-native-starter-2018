import '../Config'
import DebugConfig from '../Config/DebugConfig'
import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { Text } from 'react-native'
import createStore from '../Redux'

import ReduxNavigation from '../Components/nav/ReduxNavigation'
import StackedDrawerNavigator from '../Components/nav/StackedDrawerNavigator'
import DrawerNavigationItem from '../Components/nav/DrawerNavigationItem'
import DashboardScreen from './DashboardScreen'
import LoginScreen from './LoginScreen'

const routes = {
  Login: {
    routeName: 'Login',
    screen: LoginScreen,
    menuProps: {
      // display: false
    }
  },
  Dashboard: {
    routeName: 'Dashboard',
    screen: DashboardScreen,
    navigationOptions: {
      headerTitle: 'Dashboard'
    }
  }
}


const LogoutItem = ({navigation}) => 
  <DrawerNavigationItem 
    key={'logout'} 
    route={{routeName: 'Logout'}}  
    drawerPosition={'left'}
    onPress={ function(route){
      navigation.navigate('DrawerToggle')
      console.warn('logout not wired up yet')
      // store.dispatch(LOGOUT_ACTION)
    }}/>

class UserView extends Component {
  render(){
    return <Text>Your user details will show up here</Text>
  }
}

// we export this so the NavigationRedux can utilize him to get state
export const RootDrawer = StackedDrawerNavigator( { 
  routes, 
  renderer: DrawerNavigationItem,
  beforeListItems: [UserView],
  afterListItems: [LogoutItem]
})
const AppNavigator = ReduxNavigation(RootDrawer)

// store *HAS* to be created after Navigation
const store = createStore()

/**
 * Provides an entry point into our application.  Both index.ios.js and index.android.js
 * call this component first.
 *
 * We create our Redux store here, put it into a provider and then bring in our
 * RootContainer.
 *
 * We separate like this to play nice with React Native's hot reloading.
 */
class App extends Component {

  render () {
    return (
      <Provider store={store}>
        <AppNavigator/>
      </Provider>
    )
  }
}

// allow reactotron overlay for fast design in dev mode
export default DebugConfig.useReactotron
  ? console.tron.overlay(App)
  : App
