import React from 'react';
import { StatusBar, Button, SectionList, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { datasource } from './Data';

const styles = StyleSheet.create({
    opacityStyle: {
        borderWidth: 1,
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 5,
    },

    textContainer: {
        flex: 1,
        paddingLeft: 50
    },

    textStyle: {
        fontSize: 16,
        marginBottom: 20,
        fontWeight: 'bold',
        fontStyle: "italic"
    },

    subTextStyle: {
        fontSize: 12,
        color: 'black',
        marginBottom: 20
    },

    headerText: {
        fontSize: 20,
        margin: 10,
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#adff2f',
        padding: 10,
    },

    container: {
        padding: 10,
        flex: 1,
        backgroundColor: '#b9f2ff',
    },

    cardImage: {
        width: 100,
        height: 150,
        marginLeft: 10,
        borderRadius: 10,
        borderWidth: 5,
        borderColor: '#adff2f'
    },

    addButton: {
        marginTop: 20,
    }
});

const Home = ({ navigation }) => {
    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity
                style={styles.opacityStyle}
                onPress={() => {
                    navigation.navigate('Edit', { item });
                }}
            >
                <View style={styles.textContainer}>
                    <Text style={styles.textStyle}>{item.title}</Text>
                    <Text style={styles.subTextStyle}>ISBN: {item.isbn}</Text>
                    <Text style={styles.subTextStyle}>Copies Owned: {item.copiesOwned}</Text>
                </View>
                <Image source={{ uri: item.cardImage }} style={styles.cardImage} />
            </TouchableOpacity>
        );
    };

    return (
        <View style={styles.container}>
            <StatusBar hidden={true} />
            <Button
                title='New Book'
                onPress={() => {
                    navigation.navigate('Add');
                }}
            />

            <SectionList
                sections={datasource}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    );
};

export default Home;
