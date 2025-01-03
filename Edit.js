import React, { useState } from 'react';
import { TextInput, View, Text, Button, Alert } from 'react-native';
import { datasource } from './Data';

const Edit = ({ navigation, route }) => {
    const { item } = route.params;
    const [title, setTitle] = useState(item.title);
    const [isbn, setISBN] = useState(item.isbn);
    const [copiesOwned, setCopiesOwned] = useState(item.copiesOwned.toString());

    const handleSave = () => {
        const bookIndex = datasource[0].data.findIndex((book) => book.title === item.title);
        if (bookIndex > -1) {
            datasource[0].data[bookIndex] = {
                ...datasource[0].data[bookIndex],
                title,
                isbn,
                copiesOwned: parseInt(copiesOwned, 10),
            };
            navigation.navigate('Home');
        } else {
            Alert.alert('Error', 'Book not found.');
        }
    };

    const handleDelete = () => {
        Alert.alert('Confirm Delete', 'Are you sure you want to delete this book?', [
            {
                text: 'Cancel',
                style: 'cancel',
            },
            {
                text: 'Delete',
                onPress: () => {
                    const bookIndex = datasource[0].data.findIndex((book) => book.title === item.title);
                    if (bookIndex > -1) {
                        datasource[0].data.splice(bookIndex, 1);
                        navigation.navigate('Home');
                    } else {
                        Alert.alert('Error', 'Book not found.');
                    }
                },
            },
        ]);
    };

    return (
        <View style={{ padding: 10 }}>
            <View style={{ padding: 10 }}>
                <Text style={{ fontWeight: 'bold' }}>Title:</Text>
                <TextInput
                    value={title}
                    style={{ borderWidth: 1, padding: 5 }}
                    onChangeText={(text) => setTitle(text)}
                />
            </View>

            <View style={{ padding: 10 }}>
                <Text style={{ fontWeight: 'bold' }}>ISBN:</Text>
                <TextInput
                    value={isbn}
                    style={{ borderWidth: 1, padding: 5 }}
                    onChangeText={(text) => setISBN(text)}
                />
            </View>

            <View style={{ padding: 10 }}>
                <Text style={{ fontWeight: 'bold' }}>Copies Owned:</Text>
                <TextInput
                    value={copiesOwned}
                    style={{ borderWidth: 1, padding: 5 }}
                    keyboardType='numeric'
                    onChangeText={(text) => setCopiesOwned(text)}
                />
            </View>

            <Button title='Save Changes' onPress={handleSave} />
            <Button title='Delete Book' color='red' onPress={handleDelete} />
        </View>
    );
};

export default Edit;
