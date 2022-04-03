const styles ={
    container:{
        flex:1,
        justifyContent: "space-around",
        // alignItems: "stretch",
        // flexDirection:"column"
    },
    row:{
        display:'flex',
        flexDirection:"row",
        justifyContent:"space-evenly",
    },
    submitButton:{
        backgroundColor:"black",
        padding:10,
        color:"white",
        borderRadius:40,
        width:"80%",
        marginLeft:"10%"
    },
    listItem:{
        display:'flex',
        flexDirection:"column",
        height:200,
        width:"auto",
        borderColor:"grey",
        borderWidth:2,
        // backgroundColor:"red",
        margin:5
    },
    imgStyles:{
        margin:10,       
        width: 90,
        height:100,
    },
    columon:{
        display:"flex",
        flexDirection:"column",
    },
    listPrimaryText:{
        fontSize:18,
        fontFamily:"roboto",
        fontWeight:"bold",
        flexWrap: 'wrap'
    },
    secoundryText:{
        fontSize:15,
        fontFamily:"roboto",
        fontWeight:"bold",
        flexWrap: 'wrap'
        // fontVariants :"proportional-nums"
    }
  

}

export default styles;