import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { AppColor } from '../../colors/AppColor';

const ChatStyle = StyleSheet.create({
    firstMainView: {display:'flex',flexDirection:'row',flex:7,width:wp(95), height:hp(15), backgroundColor:AppColor.whiteShade,margin:wp(2),borderRadius:wp(10),shadowRadius:5,marginTop:hp(3)},
    mainViewInnerView: {flex:1.5,alignItems:'center',justifyContent:'center'},
    mainViewInnerViewOne:{backgroundColor:AppColor.white,width:wp(13),height:hp(7),alignItems:'center',justifyContent:'center',borderRadius:wp(7)},
    mainViewInnerViewTwo: {flex:5.5,alignItems:'center',justifyContent:'center'},
    mainViewInnerViewTwoInnerView: {display:'flex',flexDirection:'row'},
    mainViewInnerViewTwoInnerViewOne: {width:wp(30),marginLeft:wp(1.5)},



    secondMainView: {width: wp(93),flex:7,backgroundColor:AppColor.whiteShade,height:hp(76),shadowRadius:4,borderRadius:wp(5),alignItems:'center',marginLeft:wp(3)},
    sendMessageContainerView: {width: wp(90),alignSelf:"center",borderRadius:30,bottom:hp(1)},
    sendMessageContainerHeaderTextView: {alignSelf: 'center', top: hp(1)},
    sendMessageContainerHeaderTextStyle: {fontFamily: 'Poppins-SemiBold'},
    sendMessageContainerStyle: {width: wp(90),backgroundColor:AppColor.white,borderRadius: 50},
    sendMessageContainerTextStyle:{left:wp(3),textAlign:"left", fontFamily: 'Poppins-Regular' , fontSize: wp('4') },
    sendMessageTouchableOpacityView : {position:"absolute",right:wp(2),top:hp(.6)},
    sendMessageIconView : {backgroundColor:AppColor.primary,width: wp(11),height:hp (6),borderRadius:20,},
    Icon: {alignSelf:"center",justifyContent:"center",top:hp(1.3)},
    
    
    
    backbutton: { width: wp('10'),height: wp('10'),borderRadius: wp('9'),backgroundColor: AppColor.whiteShade,alignItems: 'center',justifyContent: 'center',shadowRadius:4},
    nameText: {fontFamily:'Poppins-SemiBold',fontSize:wp(3),top:hp(1),},
    status: {paddingTop:hp(1.5),fontFamily:'Poppins-Medium',fontSize:wp(2.8)},
    headerInnerViewIcons: {flexDirection:"row",alignItems:"center",justifyContent:"center",width:wp(25),},
    videoCamButtonStyle:{  width: wp(10),height: hp(5),backgroundColor: AppColor.whiteShade,justifyContent: 'center',alignItems: 'center',borderRadius: 20, shadowRadius: 4},
    callButtonStyle:{ width: wp(10),height: hp(5),backgroundColor: AppColor.whiteShade,justifyContent: 'center',alignItems: 'center',borderRadius: 20,shadowRadius: 4,left:wp(1.5)}  ,
    messageContainerView: {width:wp (93),height: hp(68),backgroundColor:AppColor.whiteShade,borderRadius:wp(10),},
    image: {width:wp (15), height: hp(8),borderRadius:30},
    
    messageImage1:{width:wp (10) ,height: hp(5),borderRadius:30,marginHorizontal:wp(78)},
    textRight: {color:AppColor.black,fontFamily:'Poppins-Regular',fontSize:wp(3.5),top: hp(1.5)},
    subHeadingTextOne: {width:wp(50),textAlign:"right",top:hp(3),fontFamily:'Poppins-Regular',fontSize:wp(2.8)},
    textLeft: {top: hp(1.5),color:AppColor.black,fontFamily:'Poppins-Regular',fontSize:wp(3.5)},
    
    subHeadingTextTwo: {top:hp(3),fontFamily:'Poppins-Regular',fontSize:wp(2.8),width:wp(45)},
    textRight2: {textAlign:"center",color:AppColor.white,fontFamily:'Poppins-Regular',fontSize:12},
    textRight2Paragraph: {left: wp(2),top:hp(5),borderTopLeftRadius:15,borderBottomRightRadius:15,borderBottomLeftRadius:15,borderTopRightRadius:15,backgroundColor:AppColor.primary,width: wp(73),height:hp(12),justifyContent:"center"},
    textRight2ParagraphStyle: {textAlign:"center",color:AppColor.white,fontFamily:'Poppins-Regular',fontSize:wp(3.5)},
    messageImage2:{width:wp(10) , height: hp(5),borderRadius:30,marginLeft:wp(4)},
    
    
})

export {ChatStyle};