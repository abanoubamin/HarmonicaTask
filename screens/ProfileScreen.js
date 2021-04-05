import React, {Component} from 'react';
import {
  TouchableOpacity,
  Image,
  SafeAreaView,
  ScrollView,
  View,
  ImageBackground,
  Text,
  FlatList,
  StyleSheet,
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';

import {personalInformation, projColors, about} from '../constants';

class ProfileScreen extends Component {
  componentDidMount() {
    this.props.navigation.setOptions({
      headerTitle: '',
      headerLeft: () => (
        <TouchableOpacity style={{marginLeft: 16}}>
          <Image source={require('../assets/settingImage.png')} />
        </TouchableOpacity>
      ),
      headerRight: () => (
        <TouchableOpacity style={{marginRight: 16}}>
          <Entypo name="dots-three-horizontal" size={24} />
        </TouchableOpacity>
      ),
    });
  }

  renderItem = (item, index) => {
    return (
      <View style={styles.itemContainer}>
        <Image source={item.icon} style={styles.iconList} />
        <Text style={styles.textList}>{item.title}</Text>
      </View>
    );
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={{flexGrow: 1}}>
          <View style={styles.container}>
            <ImageBackground
              resizeMode="contain"
              source={require('../assets/profileImage.png')}
              style={styles.imageContainer}
            />

            <View>
              <View style={styles.nameContainer}>
                <Text style={styles.name}>{personalInformation.name}</Text>
                <Image
                  source={require('../assets/badgeVerified.png')}
                  style={[styles.iconStyle, {marginTop: 10}]}
                />
              </View>
              {personalInformation.age !== undefined && (
                <View style={styles.moreInfo}>
                  <Image source={require('../assets/ageImage.png')} />
                  <Text style={styles.moreInfoText}>
                    {personalInformation.age}
                  </Text>
                </View>
              )}
              {personalInformation.job !== undefined && (
                <View style={styles.moreInfo}>
                  <Image source={require('../assets/jobImage.png')} />
                  <Text style={styles.moreInfoText}>
                    {personalInformation.job}
                  </Text>
                </View>
              )}
              {personalInformation.location !== undefined && (
                <View style={styles.moreInfo}>
                  <Image source={require('../assets/locationImage.png')} />
                  <Text style={styles.moreInfoText}>
                    {personalInformation.location}
                  </Text>
                </View>
              )}
              {personalInformation.country !== undefined && (
                <View style={styles.moreInfo}>
                  <Image source={require('../assets/countryImage.png')} />
                  <Text style={styles.moreInfoText}>
                    {personalInformation.country}
                  </Text>
                </View>
              )}
            </View>

            <View style={styles.dsrcpContainer}>
              <Text style={styles.description}>
                {personalInformation.description}
              </Text>
              <View style={styles.likeContainer}>
                <TouchableOpacity style={styles.likeButton}>
                  <Image source={require('../assets/btnLike.png')} />
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.about}>
              <Text style={styles.aboutText}>About me</Text>
              <FlatList
                data={about}
                keyExtractor={(item) => item.title}
                renderItem={({item, index}) => this.renderItem(item, index)}
                numColumns={2}
                columnWrapperStyle={styles.columnWrapper}
              />
              <View style={styles.likeContainer}>
                <TouchableOpacity style={styles.likeButton}>
                  <Image source={require('../assets/btnLike.png')} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    height: 344,
    marginHorizontal: 16,
  },
  nameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 16,
    marginTop: 10,
  },
  name: {
    color: projColors.dark,
    fontFamily: 'SkolarSans-Regular',
    fontSize: 34,
    fontWeight: '400',
  },
  moreInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 33,
    marginTop: 7,
  },
  moreInfoText: {
    marginLeft: 10,
    color: projColors.dark,
    fontFamily: 'SkolarSans-Regular',
    fontSize: 16,
    fontWeight: '400',
  },
  dsrcpContainer: {
    margin: 16,
    backgroundColor: projColors.white,
    borderRadius: 16,
  },
  description: {
    marginHorizontal: 20,
    marginVertical: 20,
    color: projColors.dark,
    fontFamily: 'SkolarSans-Regular',
    fontSize: 16,
    fontWeight: '400',
    textAlign: 'center',
  },
  likeContainer: {
    alignItems: 'flex-end',
  },
  likeButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 48,
    height: 48,
    marginHorizontal: 10,
    marginVertical: 7,
    backgroundColor: projColors.white,
    borderRadius: 24,
    elevation: 3,
    shadowColor: projColors.black,
    shadowOffset: {width: 0, height: 4},
    shadowRadius: 16,
    shadowOpacity: 0.1,
  },
  about: {
    marginHorizontal: 16,
    marginBottom: 30,
    backgroundColor: projColors.white,
    borderRadius: 16,
  },
  aboutText: {
    marginTop: 20,
    marginBottom: 10,
    color: projColors.dark,
    fontFamily: 'SkolarSans-Regular',
    fontSize: 16,
    fontWeight: '400',
    textAlign: 'center',
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
    marginBottom: 10,
    backgroundColor: projColors.white,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: projColors.border,
  },
  iconList: {
    marginHorizontal: 15,
    marginVertical: 5,
  },
  textList: {
    marginHorizontal: 15,
    marginVertical: 5,
    color: projColors.dark,
    fontFamily: 'SkolarSans-Regular',
    fontSize: 14,
    fontWeight: '400',
  },
  columnWrapper: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default ProfileScreen;
