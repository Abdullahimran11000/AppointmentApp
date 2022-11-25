import React, {useState} from 'react';
import Lottie from 'lottie-react-native';
import {
  SafeAreaView,
  View,
  TextInput,
  Text,
  TouchableOpacity,
  ScrollView,
  Modal,
} from 'react-native';
import {Calendar} from 'react-native-calendars';
import BackButton from './BackButton';
const Schedule = () => {
  const [showModal, setShowModal] = useState(false);
  const [color, setColor] = useState('black');
  const [backColor, setBackColor] = useState('#E8E4E4');
  const colorHandler = () => {
    if (color === 'black' && backColor === '#E8E4E4') {
      setColor('white');
      setBackColor('#F9947F');
    }
    else {
        setColor('black')
        setBackColor('#E8E4E4')
    }
  };
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{backgroundColor: 'white'}}>
          <BackButton />
          <View
            style={{
              width: 290,
              position: 'absolute',
              marginVertical: 16,
              marginHorizontal: 40,
            }}>
            <Text
              style={{
                fontFamily: 'Poppins-Bold',
                color: 'black',
                fontSize: 18,
                marginHorizontal: 100,
              }}>
              Schedule
            </Text>
          </View>
          <View style={{marginTop: 20, height: 370, borderRadius: 50}}>
            <Calendar
              style={{borderRadius: 40}}
              enableSwipeMonths={true}
              theme={{indicatorColor: 'red'}}
            />
          </View>
          <View>
            <Text
              style={{
                fontFamily: 'Poppins-Bold',
                color: 'black',
                marginHorizontal: 15,
              }}>
              Available Time
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              marginTop: 10,
            }}>
            <TouchableOpacity
              onPress={colorHandler}
              style={{
                backgroundColor: backColor,
                width: 100,
                marginLeft: 30,
                borderRadius: 20,
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  color: color,
                  fontFamily: 'Poppins-Regular',
                  fontSize: 12,
                  textAlign: 'center',
                }}>
                08:00 am
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text
                style={{
                  backgroundColor: '#E8E4E4',
                  width: 100,
                  marginLeft: 30,
                  padding: 3,
                  borderRadius: 20,
                  paddingHorizontal: 20,
                  color: 'black',
                  fontFamily: 'Poppins-Regular',
                  fontSize: 12,
                  textAlign: 'center',
                }}>
                10:00 am
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text
                style={{
                  backgroundColor: '#E8E4E4',
                  width: 100,
                  marginLeft: 30,
                  padding: 3,
                  borderRadius: 20,
                  paddingHorizontal: 20,
                  marginRight: 30,
                  color: 'black',
                  fontFamily: 'Poppins-Regular',
                  fontSize: 12,
                  textAlign: 'center',
                }}>
                14:00 pm
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              marginTop: 10,
            }}>
            <TouchableOpacity>
              <Text
                style={{
                  backgroundColor: '#E8E4E4',
                  width: 100,
                  marginLeft: 30,
                  padding: 3,
                  borderRadius: 20,
                  paddingHorizontal: 20,
                  color: 'black',
                  fontFamily: 'Poppins-Regular',
                  fontSize: 12,
                  textAlign: 'center',
                }}>
                16:00 pm
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text
                style={{
                  backgroundColor: '#E8E4E4',
                  width: 100,
                  marginLeft: 30,
                  padding: 3,
                  borderRadius: 20,
                  paddingHorizontal: 20,
                  color: 'black',
                  fontFamily: 'Poppins-Regular',
                  fontSize: 12,
                  textAlign: 'center',
                }}>
                18:00 pm
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text
                style={{
                  backgroundColor: '#E8E4E4',
                  width: 100,
                  marginLeft: 30,
                  padding: 3,
                  borderRadius: 20,
                  paddingHorizontal: 20,
                  marginRight: 30,
                  color: 'black',
                  fontFamily: 'Poppins-Regular',
                  fontSize: 12,
                  textAlign: 'center',
                }}>
                20:00 pm
              </Text>
            </TouchableOpacity>
          </View>
          <View>
            <Text
              style={{
                fontFamily: 'Poppins-Bold',
                color: 'black',
                marginLeft: 15,
                marginTop: 15,
              }}>
              Appointment Details
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              marginTop: 10,
            }}>
            <TouchableOpacity>
              <Text
                style={{
                  backgroundColor: '#E8E4E4',
                  width: 100,
                  marginLeft: 30,
                  padding: 3,
                  borderRadius: 20,
                  paddingHorizontal: 20,
                  textAlign: 'center',
                  color: 'black',
                  fontFamily: 'Poppins-Regular',
                  fontSize: 12,
                  //   textAlign:'center'
                }}>
                Hospital
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text
                style={{
                  backgroundColor: '#E8E4E4',
                  width: 100,
                  marginLeft: 30,
                  padding: 3,
                  borderRadius: 20,
                  paddingHorizontal: 20,
                  textAlign: 'center',
                  color: 'black',
                  fontFamily: 'Poppins-Regular',
                  fontSize: 12,
                }}>
                Chat
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text
                style={{
                  backgroundColor: '#E8E4E4',
                  width: 100,
                  marginLeft: 30,
                  padding: 3,
                  borderRadius: 20,
                  paddingHorizontal: 20,
                  marginRight: 30,
                  textAlign: 'center',
                  color: 'black',
                  fontFamily: 'Poppins-Regular',
                  fontSize: 12,
                }}>
                Call
              </Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity>
              <Text
                style={{
                  backgroundColor: '#E8E4E4',
                  width: 100,
                  marginLeft: 15,
                  padding: 3,
                  marginTop: 10,
                  borderRadius: 20,
                  textAlign: 'center',
                  color: 'black',
                  fontFamily: 'Poppins-Regular',
                  fontSize: 12,
                }}>
                Video Call
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{padding: 10, alignItems: 'center', marginVertical: 10}}>
            <TouchableOpacity
              onPress={() => setShowModal(true)}
              style={{
                backgroundColor: 'red',
                padding: 10,
                width: 330,
                borderRadius: 30,
                backgroundColor: '#c28cde',
              }}>
              <Text
                style={{
                  textAlign: 'center',
                  color: 'white',
                  fontFamily: 'Poppins-SemiBold',
                }}>
                Book Appointment
              </Text>
            </TouchableOpacity>
          </View>
          <Modal visible={showModal} transparent>
            <View
              style={{
                width: 340,
                height: 500,
                margin: 10,
                marginVertical: 70,
                borderRadius: 30,
                alignItems: 'center',
                backgroundColor:"white"
              }}>
              <Lottie
                source={require('../assets/animations/bookApp.json')}
                style={{width: 200, height: 200}}
                autoPlay
              />
              <View style={{width:150,}}>
                <Text style={{fontFamily:"Poppins-Bold"}}>Your Appointment has been Created</Text>
              </View>
              <View style={{width:250,padding:20}}>
                <Text style={{fontFamily:"Poppins-Light",fontSize:12}}>
                    Your appointment with Dr. Mazhar Salahudiin moak was made on wednesday,March 22 at 16:02 pm
                </Text>
              </View>
              <View style={{padding: 10, alignItems: 'center', marginVertical: 10}}>
                <TouchableOpacity 
                style={{
                backgroundColor: 'red',
                padding: 10,
                width: 220,
                borderRadius: 30,
                backgroundColor: '#c28cde',
              }}>
                <Text
                style={{
                  textAlign: 'center',
                  color: 'white',
                  fontFamily: 'Poppins-SemiBold',
                }}>
                Done
              </Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Schedule;
