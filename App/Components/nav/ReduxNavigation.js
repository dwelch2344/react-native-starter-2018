import React from 'react'
import * as ReactNavigation from 'react-navigation'
import { connect } from 'react-redux'

// here is our redux-aware smart component
function ReduxNavigation (props) {
  const { dispatch, nav } = props
  const NavigatorComponent = props.NavigatorComponent
  const navigation = ReactNavigation.addNavigationHelpers({
    dispatch,
    state: nav
  })

  return <NavigatorComponent navigation={navigation} />
}


export default (navigator) => {
  const mapStateToProps = state => ({ 
    nav: state.nav,
    NavigatorComponent: navigator
  })
  return connect(mapStateToProps)(ReduxNavigation)
}
