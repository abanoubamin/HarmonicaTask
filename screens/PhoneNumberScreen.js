import React, {Component} from 'react';
import {
  SafeAreaView,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
// import {Dropdown} from 'react-native-material-dropdown-v2';
import {Dropdown} from 'react-native-material-dropdown-v2-fixed';
// import {Picker} from 'native-base';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import Icon from 'react-native-vector-icons/Ionicons';

import {projColors, countryCodes} from '../constants';

class PhoneNumberScreen extends Component {
  state = {
    countryCodeIndex: 0,
    phoneNumber: '',
  };

  cCodeHandler = (value, index) => {
    this.setState({countryCodeIndex: index});
  };
  handlePhoneNumber = (phoneNumber) => {
    if (!isNaN(phoneNumber)) {
      this.setState({phoneNumber});
    }
  };

  buttonHandler = () => {
    let phoneNumber =
      countryCodes[this.state.countryCodeIndex].key +
      ' ' +
      this.state.phoneNumber;
    this.props.navigation.navigate('VerificationCode', {phoneNumber});
  };

  render() {
    const disableButton = this.state.phoneNumber.length >= 10 ? false : true;
    const disabledButtonStyle = {
      backgroundColor: projColors.disabledButtonColor,
      opacity: 0.3,
    };
    const disableButtonTextStyle = {
      color: projColors.dark,
    };

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

              <View style={styles.content}>
                <Text style={styles.header}>What's your phone number?</Text>

                <View style={styles.inputContainer}>
                  <Dropdown
                    baseColor={projColors.white}
                    containerStyle={styles.cCode}
                    inputContainerStyle={styles.cCodeContainer}
                    fontSize={20}
                    data={countryCodes}
                    animationDuration={0}
                    rippleDuration={10}
                    value={countryCodes[this.state.countryCodeIndex].value}
                    onChangeText={this.cCodeHandler}
                  />
                  {/* <Picker
              style={styles.cCode}
              mode="dropdown"
              dropdownIconColor={projColors.black}
              onValueChange={this.cCodeHandler}
              selectedValue={countryCodes[this.state.countryCodeIndex].value}
              iosIcon={<MaterialIcons name="arrow-drop-down" />}>
              {countryCodes.map((item, index) => (
                <Picker.Item color="red" label={item.value} value={item.key} />
              ))}
            </Picker> */}
                  <TextInput
                    style={styles.phoneInput}
                    keyboardType="decimal-pad"
                    textAlignVertical="bottom"
                    value={this.state.phoneNumber}
                    onChangeText={this.handlePhoneNumber}
                  />
                </View>

                <View style={styles.buttonContainer}>
                  <TouchableOpacity
                    style={[
                      styles.button,
                      disableButton && disabledButtonStyle,
                    ]}
                    disabled={disableButton}
                    onPress={this.buttonHandler}>
                    {disableButton ? (
                      <Text
                        style={[
                          styles.buttonText,
                          disableButton && disableButtonTextStyle,
                        ]}>
                        Send Code
                      </Text>
                    ) : (
                      <LinearGradient
                        colors={projColors.enabledButton}
                        start={{x: 0, y: 0}}
                        end={{x: 1, y: 0}}
                        style={styles.button}>
                        <Text
                          style={[
                            styles.buttonText,
                            disableButton && disableButtonTextStyle,
                          ]}>
                          Send Code
                        </Text>
                      </LinearGradient>
                    )}
                  </TouchableOpacity>
                </View>
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
    width: '33.3%',
  },
  content: {
    flex: 1,
  },
  header: {
    marginHorizontal: 50,
    marginTop: 100,
    color: projColors.dark,
    fontFamily: 'SkolarSans-Regular',
    fontSize: 28,
    fontWeight: '400',
  },
  inputContainer: {
    flexDirection: 'row',
    marginTop: 100,
  },
  cCode: {
    width: 130,
    height: 40,
    marginLeft: 50,
    marginRight: 5,
    marginBottom: 25,
  },
  cCodeContainer: {
    borderBottomWidth: 1,
    borderBottomColor: projColors.divider,
  },
  phoneInput: {
    flex: 1,
    marginRight: 40,
    borderBottomWidth: 1,
    borderBottomColor: projColors.divider,
    color: projColors.dark,
    fontFamily: 'SkolarSans-Regular',
    fontSize: 25,
    fontWeight: '400',
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginHorizontal: 30,
    marginTop: 100,
    marginBottom: 50,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 55,
    borderRadius: 33,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.1,
    shadowRadius: 15,
    elevation: 1,
  },
  buttonText: {
    fontFamily: 'SkolarSans-Regular',
    fontSize: 17,
    color: projColors.white,
  },
});

export default PhoneNumberScreen;
