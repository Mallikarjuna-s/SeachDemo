import React from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
} from "react-native";
import Fontisto from 'react-native-vector-icons/Fontisto';
import Entypo from 'react-native-vector-icons/Entypo';
const img = require("./download.jpg")

const List =()=>{
    return(
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
    )
}

export default List;

const styles = StyleSheet.create({
    

})