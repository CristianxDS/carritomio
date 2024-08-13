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
}
})
export default styles