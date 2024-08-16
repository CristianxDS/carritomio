import { StyleSheet } from "react-native";
import { InputColor, PrimaryColor, SecundaryColor } from "../Commons/ConstantsColor";

const styles=StyleSheet.create({
    globaltitle:{
        color:SecundaryColor,
        fontSize:27,
        paddingHorizontal:30,
        paddingVertical:30,
        fontWeight:'bold',
    },
    ContentBody:{
        backgroundColor:SecundaryColor,
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        paddingHorizontal:40,
        paddingTop:40,


    },
    titlebody:{
        fontSize:18,
        fontWeight:'bold',
        color:'black',

    },
    descripcionbody:{
        fontSize:16,

    },
    inputText:{
        backgroundColor:InputColor,
        paddingHorizontal:20,
        paddingVertical:10,
        borderRadius:10,
    },
    ContentInput:{
        marginTop:30,
        gap:10,

    },
    BotonEnviar:{
        backgroundColor:PrimaryColor,
        paddingVertical:15,
        borderRadius:25,
        marginTop:30,
    },
    TextBoton:{
        color:SecundaryColor,
        fontSize:20,
        fontWeight:'bold',
        textAlign:'center',
    },
IconPassword:{
    position:'absolute',
    right:20,
    zIndex:1,
    marginTop:13
},
textRedirection:{
    marginTop:20,
    fontSize:13,
    color:PrimaryColor,
    fontWeight:'bold',
    textAlign:'center'

},
contentCard:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    padding:10,
    borderStyle:'solid',
    borderColor:'gray',
    borderWidth:2,
    shadowColor:'#000',
    shadowOffset:{
        width:0,
        height:2
    },
    shadowOpacity:0.23,
    shadowRadius:2.59,
    elevation:2,
    marginBottom:13,
},
titleCard:{
fontWeight:'bold',
fontSize:20,
color:'black'
},
imageCard:{
    width: 100,
    height:100,
},subTitleCard:{
    fontWeight:'bold'
},
IconCard:{
    flex:1,
    alignItems:'flex-end'
},
contentPrincipal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
},
contentModal: {
    backgroundColor: SecundaryColor,
    padding: 25,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
        width: 0,
        height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
},
headerModal: {
    flexDirection: 'row',
    borderBottomColor: '#ccc',
    borderBottomWidth: 2,
    padding: 10,
    alignItems: 'center'
},
titleModal: {
    fontSize: 18,
    fontWeight: 'bold',
},
imageModal: {
    width: 200,
    height: 200
},
contentQuantity: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
},
buttonQuantity: {
    width: 50,
    height: 50,
    backgroundColor: PrimaryColor,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 17
},
textButtonQuantity: {
    color: SecundaryColor,
    fontSize: 20,
    fontWeight: 'bold'
},
textQuantity: {
    fontSize: 20,
    color: '#000',
    textAlign: 'center'
},
buttonAddCard: {
    backgroundColor: PrimaryColor,
    alignItems: 'center',
    marginTop: 15,
    paddingVertical: 10,
    borderRadius: 5
},
textButtonAddCard: {
    color: SecundaryColor,
    fontWeight: 'bold'
},
messageStock: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#b52828',
    textAlign: 'center'
},
contentHeaderHome: {
    flexDirection: 'row',
    alignItems: 'center'
},
textIconCar: {
    backgroundColor: SecundaryColor,
    borderRadius: 100,
    paddingHorizontal: 5,
    fontSize: 14,
    fontWeight: 'bold'
},
headerTable: {
    flexDirection: 'row',
    justifyContent: 'space-between'
},
headerTableInf: {
    flexDirection: 'row',
},
textHeaderInf: {
    fontWeight: 'bold',
    color: '#000'
},
textTotalPay: {
    marginTop: 15,
    fontSize: 15,
    fontWeight: 'bold'
}
})
export default styles