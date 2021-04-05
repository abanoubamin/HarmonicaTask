import React, {Component, createRef} from 'react';
import {
  SafeAreaView,
  KeyboardAvoidingView,
  ScrollView,
  View,
  TouchableOpacity,
  Text,
  TextInput,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {projColors} from '../constants';

class VerificationCodeScreen extends Component {
  state = {number2: '', number3: '', number4: ''};

  constructor(props) {
    super(props);
    this.number2 = createRef();
    this.number3 = createRef();
    this.number4 = createRef();
  }

  handleTextInput1 = (number1) => {
    if (!isNaN(number1)) {
      this.setState({number1});
      this.number2.focus();
    }
  };

  handleTextInput2 = (number2) => {
    if (!isNaN(number2)) {
      this.setState({number2});
      this.number3.focus();
    }
  };

  handleTextInput3 = (number3) => {
    if (!isNaN(number3)) {
      this.setState({number3});
      this.number4.focus();
    }
  };

  handleTextInput4 = (number4) => {
    if (!isNaN(number4)) {
      this.setState({number4});
      this.number4.blur();
    }
  };

  setTimeoutHandler = () => {
    setTimeout(() => {
      this.props.navigation.replace('Profile');
    }, 2000);
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView
          behavior={Platform.OS == 'android' ? '' : 'padding'}
          style={{flex: 1}}
          enabled={true}
          contentContainerStyle={{flex: 1}}>
          <ScrollView
            keyboardShouldPersistTaps="always"
            contentContainerStyle={{flexGrow: 1}}>
            <View style={styles.container}>
              <View style={styles.progressContainer}>
                <LinearGradient
                  colors={projColors.progressGradiant}
                  start={{x: 0, y: 0}}
                  end={{x: 1, y: 0}}
                  style={styles.progress}
                />
              </View>

              <View>
                <Text style={styles.header}>What's the verification code?</Text>
                <Text style={styles.subHeader}>
                  Code sent to {this.props.route.params.phoneNumber}
                </Text>
                <TouchableOpacity>
                  <Text style={styles.buttonText}>Resend Code</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.vCode}>
                {this.state.number1 != '' &&
                this.state.number2 != '' &&
                this.state.number3 != '' &&
                this.state.number4 != '' ? (
                  <View
                    style={styles.textInputContainer}
                    onLayout={this.setTimeoutHandler}>
                    <ActivityIndicator
                      size="large"
                      color={projColors.divider}
                    />
                  </View>
                ) : (
                  <View style={styles.textInputContainer}>
                    <TextInput
                      autoFocus={true}
                      style={styles.textInput}
                      textAlignVertical="bottom"
                      keyboardType="decimal-pad"
                      maxLength={1}
                      value={this.state.number1}
                      onChangeText={this.handleTextInput1}
                    />
                    <TextInput
                      ref={(input2) => (this.number2 = input2)}
                      style={styles.textInput}
                      textAlignVertical="bottom"
                      keyboardType="decimal-pad"
                      maxLength={1}
                      value={this.state.number2}
                      onChangeText={this.handleTextInput2}
                    />
                    <TextInput
                      ref={(input3) => (this.number3 = input3)}
                      style={styles.textInput}
                      textAlignVertical="bottom"
                      keyboardType="decimal-pad"
                      maxLength={1}
                      value={this.state.number3}
                      onChangeText={this.handleTextInput3}
                    />
                    <TextInput
                      ref={(input4) => (this.number4 = input4)}
                      style={styles.textInput}
                      textAlignVertical="bottom"
                      keyboardType="decimal-pad"
                      maxLength={1}
                      value={this.state.number4}
                      onChangeText={this.handleTextInput4}
                    />
                  </View>
                )}
              </View>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: projColors.white,
  },
  progressContainer: {
    height: 10,
    backgroundColor: 'rgba(38, 38, 38, 0.05)',
  },
  progress: {
    flex: 1,
    width: '66.6%',
  },
  header: {
    marginHorizontal: 50,
    marginTop: 100,
    color: projColors.dark,
    fontFamily: 'SkolarSans-Regular',
    fontSize: 28,
    fontWeight: '400',
  },
  subHeader: {
    marginHorizontal: 50,
    marginVertical: 10,
    color: projColors.dark,
    fontFamily: 'SkolarSans-Regular',
    fontSize: 16,
    fontWeight: '400',
    opacity: 0.4,
  },
  buttonText: {
    marginHorizontal: 50,
    color: projColors.primary,
    fontFamily: 'SkolarSans-Bold',
    fontSize: 14,
    fontWeight: '400',
  },
  vCode: {
    flex: 1,
    backgroundColor: projColors.white,
  },
  textInputContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: projColors.white,
    marginTop: 111,
  },
  textInput: {
    width: 45.53,
    height: 40,
    marginRight: 6,
    color: projColors.dark,
    fontFamily: 'SkolarSans-Regular',
    fontSize: 20,
    fontWeight: '400',
    borderBottomWidth: 1,
    borderBottomColor: projColors.divider,
  },
});

export default VerificationCodeScreen;
