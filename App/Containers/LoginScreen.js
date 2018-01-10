import React, { Component } from 'react'
import { ScrollView, Text, KeyboardAvoidingView, Button } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/LoginScreenStyle'

class LoginScreen extends Component {

  static navigationOptions = {
    headerLeft: null
  }
  
  render () {
    const { navigation } = this.props
    return (
      <ScrollView style={styles.container}>
        <KeyboardAvoidingView behavior='position'>
          <Text>LoginScreen</Text>
          <Button
            onPress={() => navigation.navigate('Dashboard')}
            title="Fake a Login"
          />
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

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)
