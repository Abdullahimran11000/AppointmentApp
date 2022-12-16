import { StyleSheet } from "react-native";

const BackButtonStyle = StyleSheet.create({
    headerView: {display: 'flex',flex: 1, flexDirection: 'row',marginTop: 15, justifyContent: 'center'},
    iconView: {position: 'absolute', left: 0, paddingLeft: 10},
    headingText: {fontFamily: 'Poppins-Bold', fontSize: 16, color: "black"},
})
export {BackButtonStyle}
