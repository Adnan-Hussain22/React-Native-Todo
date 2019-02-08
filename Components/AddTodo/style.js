import { StyleSheet,Dimensions } from 'react-native'
const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: '#00000040'
  },
  Wrapper: {
    backgroundColor: '#FFFFFF',
    minHeight: 120,
    maxWidth:Dimensions.get('screen').width - 15,
    minWidth: 155,
    borderRadius: 15,
    padding: 10,
    marginLeft: 5,
    marginRight: 5,
    position:'relative'
  },
  closeBtnCont:{
    position:'absolute',
    top:-5,
    right:-5
  },
  closeBtn:{
    color:'red',
    fontSize:25
  }
})
export default styles
