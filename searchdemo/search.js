import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { Searchbar } from "react-native-paper";

export default function App() {
    const [input, setInput] = useState("");
    const [results, setResults] = useState([]);
    const [searchTimer, setSearchTimer] = useState(null);

    async function fetchData(text) {
        const res = await fetch(
            `https://demo.wp-api.org/wp-json/wp/v2/posts?_embed&search=${text}`,
        );
        res
            .json()
            .then((res) => {
                setResults(res);
            })
            .catch((err) => console.log(err));
    }
    return (
        <View style={styles.container}>
            <Searchbar
                placeholder="Search"
                onChangeText={(text) => {
                    if (searchTimer) {
                        clearTimeout(searchTimer);
                    }
                    setInput(text);
                    setSearchTimer(
                        setTimeout(() => {
                            fetchData(text);
                        }, 2000),
                    );
                }}
                value={input}
            />
            <FlatList
                data={results}
                renderItem={({ item }) => (
                    <View>
                        <Text>{item.title.rendered}</Text>
                        <Text>{item.excerpt.rendered}</Text>
                    </View>
                )}
                keyExtractor={(item) => "" + item.id}
            />
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
