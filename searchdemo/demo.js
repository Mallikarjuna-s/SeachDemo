import React from 'react'
import {
  FlatList,
  View,
  ActivityIndicator,
  TouchableOpacity,
  Input,
} from 'react-native'
import {filter} from 'lodash'
// import { ApplicationProvider, Text, Avatar } from '@ui-kitten/components'
// import { mapping, light as lightTheme } from '@eva-design/eva'

// add a state object to the HomeScreen component
class HomeScreen extends React.Component {
  state = {
    loading: false,
    data: [],
    page: 1,
    seed: 1,
    error: null
  }
  componentDidMount() {
    this.makeRemoteRequest()
    }
   
     makeRemoteRequest = () => {
    const { page, seed } = this.state
    const url = `https://randomuser.me/api/?seed=${seed}&page=${page}&results=20`
    this.setState({ loading: true })
   
    fetch(url)
    .then(res => res.json())
    .then(res => {
    this.setState({
    data: page === 1 ? res.results : [...this.state.data, ...res.results],
    error: res.error || null,
    loading: false
    })
    })
    .catch(error => {
    this.setState({ error, loading: false })
    })
    }


    renderFooter = () => {
        if (!this.state.loading) return null
      
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



      renderSeparator = () => {
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

      contains = ({ name, email }, query) => {
        const { first, last } = name
        if (first.includes(query) || last.includes(query) || email.includes(query)) {
          return true
        }
        return false
      }

      handleSearch = text => {
        const formattedQuery = text.toLowerCase()
        const data = filter(this.state.fullData, user => {
          return this.contains(user, formattedQuery)
        })
        this.setState({ data, query: text })
      }


      renderHeader = () => (
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
            onChangeText={this.handleSearch}
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


      render(){
          return(
            <FlatList
            data={this.state.data}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => alert('Item pressed!')}>
                <View
                  style={{
                    flexDirection: 'row',
                    padding: 16,
                    alignItems: 'center'
                  }}>
                  <Avatar
                    source={{ uri: item.picture.thumbnail }}
                    size='giant'
                    style={{ marginRight: 16 }}
                  />
                  <Text
                    category='s1'
                    style={{
                      color: '#000'
                    }}>{`${item.name.first} ${item.name.last}`}</Text>
                </View>
              </TouchableOpacity>
            )}
            keyExtractor={item => item.email}
            ItemSeparatorComponent={this.renderSeparator}
            ListFooterComponent={this.renderFooter}
            ListHeaderComponent={this.renderHeader}
          />
          )
      }
}

export default HomeScreen;