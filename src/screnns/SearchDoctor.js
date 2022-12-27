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
import {DashboardStyle} from '../assets/styles/DashboardStyle/DashboardStyle';
import Feather from 'react-native-vector-icons/Feather';
import Modal from 'react-native-modal';
import DoctorsFlatList from '../components/DcotorsFlatlist/DoctorsFlatList';
import {StyleSheet} from 'react-native';
import {SelectList} from 'react-native-dropdown-select-list';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import RadioButtonRN from 'radio-buttons-react-native';
import {AppColor} from '../assets/colors/AppColor';
import {ScrollView} from 'react-native-virtualized-view';
import BackButton from '../components/ScrennHeader/BackButton';
import {Neomorph} from 'react-native-neomorph-shadows';
import {SearchDoctorStyle} from '../assets/styles/DashboardStyle/SearchDoctorStyle';
import NeoButton from '../components/NeoMorphButton/NeoButton';

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
  const gender = [
    {key: '1', value: 'Male'},
    {key: '2', value: 'FeMale'},
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
                    maxLength={wp('20')}
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
                    style={SearchDoctorStyle.ModalStyle}>
                    <View style={SearchDoctorStyle.ModalViewStyle}>
                      <TouchableOpacity
                        style={{alignSelf: 'flex-end'}}
                        onPress={() => {
                          toggleModal();
                        }}>
                        <FontAwesome
                          name="close"
                          size={wp('8')}
                          color={AppColor.primary}
                        />
                      </TouchableOpacity>
                      <Text style={SearchDoctorStyle.ModalText}>
                        Experience
                      </Text>
                      <SelectList
                        fontFamily="Poppins-Medium"
                        boxStyles={SearchDoctorStyle.SelectListBoxStyle}
                        dropdownStyles={{borderColor: AppColor.white}}
                        placeholder="experience"
                        data={data}
                      />
                    </View>
                    <View style={SearchDoctorStyle.DoneButtonView}>
                      <NeoButton
                        width={wp('79')}
                        height={hp('7.7')}
                        backgroundColor={AppColor.primary}
                        borderRadius={wp('5')}>
                        <TouchableOpacity
                          style={SearchDoctorStyle.DoneButtonStyle}>
                          <View style={SearchDoctorStyle.DoneButtonTextView}>
                            <Text style={SearchDoctorStyle.DoneButtonTextStyle}>
                              Done
                            </Text>
                          </View>
                        </TouchableOpacity>
                      </NeoButton>
                    </View>

                    <Text style={SearchDoctorStyle.ConsultationText}>
                      Concultation Price
                    </Text>

                    <SelectList
                      fontFamily="Poppins-Medium"
                      boxStyles={SearchDoctorStyle.SelectPriceListBoxStyle}
                      dropdownStyles={{borderColor: AppColor.white}}
                      placeholder="price"
                      data={price}
                    />

                    <View>
                      <Text style={SearchDoctorStyle.ConsultationText}>
                        Gendre
                      </Text>
                    </View>

                    <SelectList
                      fontFamily="Poppins-Medium"
                      boxStyles={SearchDoctorStyle.SelectPriceListBoxStyle}
                      dropdownStyles={{borderColor: AppColor.white}}
                      placeholder="gender"
                      data={gender}
                    />

                    <View style={SearchDoctorStyle.DoneButtonView}>
                      <NeoButton
                        width={wp('79')}
                        height={hp('7.7')}
                        backgroundColor={AppColor.primary}
                        borderRadius={wp('5')}>
                        <TouchableOpacity
                          style={SearchDoctorStyle.ApplyButtonStyle}>
                          <View style={SearchDoctorStyle.DoneButtonTextView}>
                            <Text style={SearchDoctorStyle.DoneButtonTextStyle}>
                              Apply
                            </Text>
                          </View>
                        </TouchableOpacity>
                      </NeoButton>
                    </View>
                  </Modal>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={SearchDoctorStyle.DoctorFlatListView}>
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
