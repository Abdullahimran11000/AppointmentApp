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
import {DashboardStyle} from '../assets/styles/DashboardStyle';
import Feather from 'react-native-vector-icons/Feather';
import Modal from 'react-native-modal';
import DoctorCard from './DoctorCard';
import {StyleSheet} from 'react-native';
import {SelectList} from 'react-native-dropdown-select-list';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import RadioButtonRN from 'radio-buttons-react-native';
import { AppColors } from '../assets/colors/AppColor';

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
    <SafeAreaView>
      <View>
        <View style={DashboardStyle.searchCont}>
          <View style={DashboardStyle.searchInnerCont}>
            <View style={DashboardStyle.searchIconOneCont}>
              <View style={DashboardStyle.seacrhIconOneInnerCont}>
                <Feather
                  name="search"
                  size={20}
                  color="rgba(0, 0, 0, 0.4)"></Feather>
              </View>
            </View>
            <View style={DashboardStyle.searchTextInputCont}>
              <TextInput
                placeholder="Search Doctor"
                maxLength={20}
                style={{
                  fontFamily: 'Poppins-Medium',
                  fontSize: 15,
                  color: 'rgba(0, 0, 0, 0.4)',
                  marginBottom: -5,
                }}></TextInput>
            </View>
            <View style={DashboardStyle.searchIconTwoCont}>
              <View>
                <Modal isVisible={modalVisible} style={{borderRadius:30,overflow:"hidden", backgroundColor:"white",width:wp('90')}}>
                  <View
                    style={{width: wp('80'), marginHorizontal: 15,marginTop:-50}}>
                    <TouchableOpacity style={{alignSelf:"flex-end"}} onPress={()=>{toggleModal()}}>
                        <FontAwesome name="close" size={24} color={AppColors.primary} />
                    </TouchableOpacity>
                    <Text style={[styles.Text,{marginTop:30}]}>Experience</Text>
                    <SelectList
                    fontFamily='Poppins-Regular'
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
                      fontFamily='Poppins-Regular'
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

              <TouchableOpacity
                style={DashboardStyle.searchIconTwoTouchable}
                onPress={() => {
                  toggleModal();
                }}>
                <SimpleLineIcons
                  name="equalizer"
                  color="rgba(0, 0, 0, 0.7)"
                  size={15}></SimpleLineIcons>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={{marginTop: 20}}>
          <DoctorCard
            color={'rgba(195, 140, 222, 0.5)'}
            source={require('../assets/images/doctorsInfo.png')}
            name={'Dr. Amanda'}
            dept={'Dentist'}
            star={'4.5'}
            experience={'5 years'}
          />
        </View>
      </View>
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
