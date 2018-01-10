import React, { Component } from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-navigation'
 


const styles = StyleSheet.create({
  container: {
    paddingVertical: 4,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginHorizontal: 16,
    width: 24,
    alignItems: 'center',
  },
  inactiveIcon: {
    /*
     * Icons have 0.54 opacity according to guidelines
     * 100/87 * 54 ~= 62
     */
    opacity: 0.62,
  },
  label: {
    margin: 16,
    fontWeight: 'bold',
  },
})


export default class DrawerNavigationItem extends Component {
  render(){
    const { route, drawerPosition, onPress } = this.props
    const focused = false // activeItemKey === route.key
    const color = 'red'
    const backgroundColor = focused
      ? 'blue'
      : 'green'
    // const scene = { route, index, focused, tintColor: color };
    const icon = false // renderIcon(scene);
    const label = route.routeName // getLabel(scene);
    return (
      <TouchableOpacity
        onPress={e => onPress(route, e)}
        delayPressIn={0}
      >
        <SafeAreaView
          style={{ backgroundColor: backgroundColor }}
          forceInset={{
            [drawerPosition]: 'always',
            [drawerPosition === 'left' ? 'right' : 'left']: 'never',
            vertical: 'never',
          }}
        >
          <View style={[styles.item]}>
            {icon ? (
              <View
                style={[
                  styles.icon,
                  focused ? null : styles.inactiveIcon,
                  iconContainerStyle,
                ]}
              >
                {icon}
              </View>
            ) : null}
            {typeof label === 'string' ? (
              <Text style={[styles.label, { color } ]}>
                {label}
              </Text>
            ) : (
              label
            )}
          </View>
        </SafeAreaView>
      </TouchableOpacity>
    )
  }
}