import React, { Component } from 'react'
import { ScrollView, Text, KeyboardAvoidingView, Button } from 'react-native'
import { withNavigation } from 'react-navigation'
import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/FontAwesome';

// Styles
import styles from './Styles/DashboardScreenStyle'

class DrawerButton extends Component {

  onPress = () => {
    const { navigation } = this.props
    navigation.navigate('DrawerToggle')
  }

  render(){    
    return <Icon.Button name="bars" iconStyle={{textAlign:'center'}} onPress={ this.onPress }/>
  }
}

class DashboardScreen extends Component {

  static navigationOptions = {
    headerLeft: withNavigation(DrawerButton)
  }

  render () {
    return (
      <ScrollView style={styles.container}>
        <KeyboardAvoidingView behavior='position'>
          <Text>DashboardScreen</Text>
        </KeyboardAvoidingView>
      </ScrollView>
    )
  }
}


const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardScreen)
