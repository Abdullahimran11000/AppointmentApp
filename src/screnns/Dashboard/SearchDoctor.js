import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  TextInput,
  Text,
  TouchableOpacity,
} from 'react-native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {DashboardStyle} from '../../assets/styles/DashboardStyle/DashboardStyle';
import Feather from 'react-native-vector-icons/Feather';
import Modal from 'react-native-modal';
import DoctorsFlatList from '../DcotorsFlatlist/DoctorsFlatList';
import {StyleSheet} from 'react-native';
import {SelectList} from 'react-native-dropdown-select-list';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import RadioButtonRN from 'radio-buttons-react-native';
import {AppColor} from '../../assets/colors/AppColor';
import BackButton from '../ScrennHeader/BackButton';
import {ScrollView} from 'react-native-virtualized-view';
import {Neomorph} from 'react-native-neomorph-shadows';
import {SearchDoctorStyle} from '../../assets/styles/DashboardStyle/SearchDoctorStyle';

const SearchDoctor = props => {
  const data = [
    {key: '1', value: '5-10 years'},
    {key: '2', value: '10-15 years'},
    {key: '3', value: '15-20 years'},
    {key: '4', value: '20-25 years'},
  ];

  const price = [
    {key: '1', value: '5-100 Dollars'},
    {key: '2', value: '100-1160 Dollars'},
    {key: '3', value: '160-210 years'},
    {key: '4', value: '210-260 years'},
  ];
  const gendre = [
    {
      label: 'Male',
    },
    {
      label: 'Female',
    },
  ];

  const [modalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <SafeAreaView style={{backgroundColor: AppColor.whiteShade}}>
      <ScrollView>
        <View>
          <BackButton
            onPress={() => {
              props.navigation.goBack();
            }}></BackButton>
          <View style={DashboardStyle.searchCont}>
            <View style={DashboardStyle.searchInnerCont}>
              <Neomorph
                inner
                lightShadowColor={AppColor.white}
                style={SearchDoctorStyle.neoMorphView}>
                <View style={DashboardStyle.seacrhIconOneInnerCont}>
                  <Feather
                    name="search"
                    size={wp('6')}
                    color={AppColor.blackOpacity4}
                  />
                </View>
                <View style={DashboardStyle.searchTextInputCont}>
                  <TextInput
                    placeholder="Search Doctor"
                    maxLength={20}
                    style={SearchDoctorStyle.searchTextInput}
                  />
                </View>
              </Neomorph>
              <View style={DashboardStyle.searchIconTwoCont}>
                <TouchableOpacity onPress={toggleModal}>
                  <Neomorph style={DashboardStyle.filterButton}>
                    <SimpleLineIcons
                      name="equalizer"
                      color={AppColor.black}
                      size={wp('4')}></SimpleLineIcons>
                  </Neomorph>
                </TouchableOpacity>
              </View>
              <View style={DashboardStyle.searchIconTwoCont}>
                <View>
                  <Modal
                    isVisible={modalVisible}
                    style={{
                      borderRadius: 30,
                      overflow: 'hidden',
                      backgroundColor: 'white',
                      width: wp('90'),
                    }}>
                    <View
                      style={{
                        width: wp('80'),
                        marginHorizontal: 15,
                        marginTop: -50,
                      }}>
                      <TouchableOpacity
                        style={{alignSelf: 'flex-end'}}
                        onPress={() => {
                          toggleModal();
                        }}>
                        <FontAwesome
                          name="close"
                          size={24}
                          color={AppColor.primary}
                        />
                      </TouchableOpacity>
                      <Text style={[styles.Text, {marginTop: 30}]}>
                        Experience
                      </Text>
                      <SelectList
                        fontFamily="Poppins-Regular"
                        boxStyles={{
                          borderRadius: 15,
                          borderColor: 'white',
                          backgroundColor: 'white',
                        }}
                        dropdownStyles={{borderColor: 'white'}}
                        placeholder="experience"
                        data={data}
                      />
                    </View>

                    <View style={{marginLeft: 15}}>
                      <TouchableOpacity style={styles.opacity}>
                        <View
                          style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                          }}>
                          <Text style={{marginVertical: 15}}>Done</Text>
                        </View>
                      </TouchableOpacity>
                    </View>

                    <View
                      style={{width: 290, marginHorizontal: 15, marginTop: 15}}>
                      <Text style={styles.Text}>Concultation Price</Text>
                      <SelectList
                        fontFamily="Poppins-Regular"
                        boxStyles={{
                          borderRadius: 15,
                          borderColor: 'white',
                          backgroundColor: 'white',
                        }}
                        dropdownStyles={{borderColor: 'white'}}
                        placeholder="price"
                        data={price}
                      />
                    </View>

                    <View style={{marginLeft: 15, marginTop: 15}}>
                      <Text style={styles.Text}>Gendre</Text>
                    </View>
                    <View style={{width: wp('80'), alignSelf: 'center'}}>
                      <RadioButtonRN
                        deactiveColor="rgba(0,0,0,0.6)"
                        boxActiveBgColor="white"
                        activeColor="#c38cde"
                        boxStyle={{
                          borderRadius: 15,
                          width: wp('35'),
                          height: hp('8'),
                          borderColor: 'white',
                        }}
                        circleSize={12}
                        style={{
                          display: 'flex',
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                        }}
                        textStyle={{marginLeft: 20}}
                        data={gendre}
                      />
                    </View>

                    <View style={{marginLeft: 15}}>
                      <TouchableOpacity style={styles.applyOpacity}>
                        <View
                          style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                          }}>
                          <Text style={{marginVertical: 15}}>Apply</Text>
                        </View>
                      </TouchableOpacity>
                    </View>
                  </Modal>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={{width: wp('90'), alignSelf: 'center'}}>
          <DoctorsFlatList
            horizontal={false}
            numColumns={2}
            marginRight={wp('16')}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SearchDoctor;

const styles = StyleSheet.create({
  Text: {
    marginLeft: 4,
    marginBottom: 5,
  },
  experienceScroll: {
    marginTop: 5,
    width: 300,
    height: 240,
    backgroundColor: 'orange',
    marginHorizontal: 20,
    borderRadius: 20,
  },
  experienceView: {
    marginLeft: 20,
    marginTop: 10,
  },
  opacity: {
    width: 290,
    height: 50,
    backgroundColor: 'rgba(240, 122, 199,0.7)',
    borderRadius: 15,
    marginTop: 30,
  },
  applyOpacity: {
    width: 290,
    height: 50,
    backgroundColor: '#c38cde',
    borderRadius: 15,
    marginTop: 20,
  },
});
