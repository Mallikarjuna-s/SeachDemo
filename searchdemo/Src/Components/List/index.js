import React from 'react';
import {View,Text,StyleSheet,Image} from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { Button } from 'react-native-paper';Fontisto
import Icon from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Entypo from 'react-native-vector-icons/Entypo';

const img = require("./download.jpg")


const Uisamples =()=>{
    return(
        <>
        <View style={styles.container}>
            <View style={styles.row}>
                <View style={{backgroundColor:"red"}}>
                    <Text>
                        Text
                    </Text>
                </View>
                <View style={{backgroundColor:"black"}}>
                    <Text>
                        hi
                    </Text>
                </View>
                <View style={{backgroundColor:"blue"}}>
                    <Text>
                        hello
                    </Text>
                </View>
            </View>
            <View style={styles.listItem}>
                <View style={styles.row}>
                    <View>
                        <Image
                            style={styles.imgStyles}
                            source={img}
                        />
                    </View>
                    <View style={styles.columon}>                
                        <View style={{flexDirection:"row",marginTop:10}}>
                            <Fontisto
                                name="person"
                                backgroundColor="#3b5998"
                                size={25}
                                // onPress={this.loginWithFacebook}
                            />
                            <Text style={{...styles.listPrimaryText, marginLeft:5}}>
                                mallikarjuna
                            </Text>
                        </View>
                        <View style={{flexDirection:"row",marginTop:10}}>
                            <Entypo
                                name="old-mobile"
                                backgroundColor="#3b5998"
                                size={25}
                            />
                            <Text style={{...styles.secoundryText, marginLeft:5}}>
                                8956545262
                            </Text>
                        </View>
                        <View style={{flexDirection:"row",marginTop:10}}>    
                            <Entypo
                                name="mail"
                                backgroundColor="#3b5998"
                                size={25}
                            />            
                            <Text style={{...styles.listPrimaryText, fontSize:15, marginLeft:5}}>
                                mallikarjuna@gmail.com
                            </Text>
                        </View>
                    </View>
                   
                </View>
                <View style={{...styles.row, padding:10}}>
                    <View style={{justifyContent:"flex-start"}}>
                        <Text>
                            hi1
                        </Text>
                    </View>
                    {/* <View>
                        <Text>
                            hi2
                        </Text>
                    </View> */}
                    <View style={{justifyContent:"flex-end"}}>
                        <Text>
                            hi3
                        </Text>
                    </View>
                </View>
                <View>
                    <Text style={{height: 1, backgroundColor: 'black'}}></Text>
                </View>
                <View style={{...styles.row, padding:10}}>
                    <View>
                        <Text>
                            hi1
                        </Text>
                    </View>
                    <View>
                        <Text>
                            hi2
                        </Text>
                    </View>
                    <View>
                        <Text>
                            hi3
                        </Text>
                    </View>
                </View>             
            </View>
            <TouchableHighlight onPress={()=>{}}>
                <Button style={styles.submitButton}>
                    submit
                </Button>
            </TouchableHighlight>
        </View>
        </>
    )
}

export default Uisamples;

const styles = StyleSheet.create({
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
    

})