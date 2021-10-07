// import { StatusBar } from 'expo-status-bar';
import React,{useState,useEffect} from 'react';
import {filter} from 'lodash'
import { StyleSheet, Text, View,FlatList,ActivityIndicator,TouchableOpacity,Alert } from 'react-native';
// import { useEffect, useState } from 'react';

const App=()=> {
  const [loading, setloading]=useState(false);
  const [ ingredians, setingredians]=useState();
  const [error, seterror] =useState("");
  const [data, setdata]=useState([]);
  // const [type, settype]=useState("")

  useEffect(
    ()=>{
      getSearchlist();

    },
    []
  )

  const getSearchlist =(query)=>{
    const url = `https://api.edamam.com/api/recipes/v2?_embed&search=${query}`
    setloading(true);
    fetch(url,{
      method: "POST",
      headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
      },
      body: JSON.stringify({ type: "pubilc", q:"",app_key:"",app_id:'',dishType:"",mealType:"",cuisineType:"",health:"" })
    })
    .then(res => res.json())
    .then(res => {
      if(res.Status ==200){
        if(!res.error){ 
          setingredians((prevState) => [prevState, ...res.data])
        }else{
          setingredians(res.data)
        }
      }else{
        if(ingredians=undefined){
          console.log(res.error);
          seterror(res.error);
        }
      }
    })
  }

  const renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: '86%',
          backgroundColor: '#CED0CE',
          marginLeft: '5%'
        }}
      />
    )
  }


 const contains = ({ dishType,mealType,cuisineType,health,ingredients}, query) => {
    if (dishType.includes(query) || mealType.includes(query) || cuisineType.includes(query)|| health.includes(query)|| ingredients.includes(query)) {
      return true
    }
    return false
  }


  const  handleSearch = text => {
    const formattedQuery = text.toLowerCase()
    const data = filter(ingredians || health || cuisineType || mealType || dishType, item => {
      return contains(item, formattedQuery)
    })
    setdata({ data, query: text })
  }

  const renderFooter = () => {
    if (!loading) return null
  
    return (
      <View
        style={{
          paddingVertical: 20,
          borderTopWidth: 1,
          borderColor: '#CED0CE'
        }}>
        <ActivityIndicator animating size='large' />
      </View>
    )
  }

  const renderHeader = () => (
    <View
      style={{
        backgroundColor: '#fff',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center'
      }}>
      <Input
        autoCapitalize='none'
        autoCorrect={false}
        onChangeText={handleSearch}
        status='info'
        placeholder='Search'
        style={{
          borderRadius: 25,
          borderColor: '#333',
          backgroundColor: '#fff'
        }}
        textStyle={{ color: '#000' }}
        clearButtonMode='always'
      />
    </View>
  )

  const HomeScreen = () => {
    const ingredients =ingredians.hits[0].recipe.ingredients;
    const cuisineType=ingredians.hits[0].recipe.cuisineType;
    const mealType=ingredians.hits[0].recipe.mealType;
    const dishType=ingredians.hits[0].recipe.dishType;
    const health=ingredians.hits[0].recipe.health;
    <View
      style={{
        flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 20,
        marginTop: 40
      }}>
      <FlatList
        data={ingredients||cuisineType||mealType||dishType||health}
        // keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Text style={{ fontSize: 22 }}>
            {item.text}
          </Text>
        )}
        keyExtractor={index => index.toLowerCase()}
        ItemSeparatorComponent={renderSeparator}
        ListFooterComponent={renderFooter}
        ListHeaderComponent={renderHeader}
      />
    </View>
  }
  return (
    <View style={styles.container}>
     {HomeScreen()}
    </View>
  );
}
export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
