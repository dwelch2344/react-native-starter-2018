import React, { Component } from 'react'
import R from 'ramda'
import { ScrollView } from 'react-native'
import { DrawerNavigator, StackNavigator, SafeAreaView } from 'react-navigation'

class CustomDrawerContentComponent extends Component {

  onPress = (route, e) => {          
    const { navigation } = this.props 
    navigation.navigate(route.routeName)
  }

  render(){
    const drawerPosition = 'left'

    const RouteRenderer = this.props.renderer
    const { navigation, routes, beforeListItems, afterListItems } = this.props 

    let items = []

    if( beforeListItems instanceof Array ){
      beforeListItems.forEach( (ListItem, idx) => {
        items.push( <ListItem key={'pre.' + idx} drawerPosition={drawerPosition} navigation={navigation}/> )
      })
    }

    Object.keys(routes).forEach( key => {
      const route = routes[key]
      items.push(
        <RouteRenderer key={key} 
              route={route} 
              onPress={this.onPress}
              drawerPosition={drawerPosition} 
              navigation={navigation} /> 
      )
    })

    if( afterListItems instanceof Array ){
      afterListItems.forEach( (ListItem, idx) => {
        items.push( <ListItem key={'post.' + idx} drawerPosition={drawerPosition} navigation={navigation}/> )
      })
    }

    return (
      <ScrollView>
        <SafeAreaView forceInset={{ top: 'always', horizontal: 'never' }}>
          { items }
        </SafeAreaView>
      </ScrollView>
    )
  }
}

const StackedDrawerNavigator = ({ routes, ...rest}) => {
  // convert the routes to an array 
  // might have to parse additional things here one day

  const routeArr = Object.keys(routes).reduce( (prev, curr) => {
    const r = routes[curr]
    if( R.pathOr(true, ['menuProps', 'display'], r) ){
      prev.push(r)
    }
    return prev
  }, [])      

  const stack = StackNavigator(routes)
  const drawer = DrawerNavigator({
    Root: {
      routeName: 'Root',
      screen: stack, 
    },
  }, {
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle',
    contentComponent: ({props, navigation}) => 
      <CustomDrawerContentComponent 
        {...props} 
        {...rest}
        navigation={navigation} 
        routes={routeArr} />
  })

  drawer.stack = stack
  return drawer
}

export default StackedDrawerNavigator