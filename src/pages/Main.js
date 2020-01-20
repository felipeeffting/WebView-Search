import React, { useState } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Alert, Switch, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'

function Main({ navigation }) {
    const [search, setSearch] = useState('');
    const [instaSearch, setInstaSearch] = useState();

    return (
        <>
            <View style={styles.searchForm}>
                <TextInput
                    style={styles.searchInput}
                    placeholder="Username..."
                    placeholderTextColor="#999"
                    autoCapitalize="words"
                    autoCorrect={false}
                    value={search}
                    onChangeText={setSearch}
                />
                <TouchableOpacity
                    style={styles.loadButton}
                    onPress={() => {

                        if (search === '') {
                            return Alert.alert('Search', 'Enter the username');
                        }

                        navigation.navigate('Profile', { username: search, insta: instaSearch });

                    }}>
                    <MaterialIcons
                        name="search"
                        size={20}
                        color="#FFF" />
                </TouchableOpacity>
            </View>
            <View style={styles.viewCheck}>
                <Text style={styles.text}>Instagram Search</Text>
                <Switch
                    style={styles.switch}
                    value={instaSearch}
                    onValueChange={setInstaSearch} />
            </View>
        </>
    );
}

const styles = StyleSheet.create({

    loadButton: {
        width: 50,
        height: 50,
        backgroundColor: '#71A3BE',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 15,
    },
    
    text: {
        fontSize: 20,
        color: '#345995',
        paddingTop: 4,
        paddingHorizontal: 10,
    },

    switch: {
        left: 115,
    },

    viewCheck: {
        top: 270,
        left: 20,
        right: 20,
        zIndex: 5,
        flexDirection: 'row',
    },

    searchForm: {
        position: 'absolute',
        top: 200,
        left: 20,
        right: 20,
        zIndex: 5,
        flexDirection: 'row',
    },

    searchInput: {
        flex: 1,
        height: 50,
        backgroundColor: '#FFF',
        color: '#333',
        borderRadius: 25,
        paddingHorizontal: 20,
        fontSize: 16,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowOffset: {
            width: 4,
            height: 4,
        },
        elevation: 2,
    }

});

export default Main;