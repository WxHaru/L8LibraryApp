import React, { useState } from 'react';
import { Alert, TextInput, View, Text, Button } from 'react-native';
import { datasource } from './Data';

const Add = ({ navigation }) => {
    const [title, setTitle] = useState('');
    const [isbn, setISBN] = useState('');
    const [image, setImage] = useState('');
    const [copiesOwned, setCopiesOwned] = useState('');

    const isValidImageUrl = (url) => {
        const urlRegex = /^(https?:\/\/.*\.(?:png|jpg|jpeg|gif))$/i;
        return urlRegex.test(url);
    };

    const handleSubmit = () => {
        if (!title || !isbn || !image || !copiesOwned) {
            Alert.alert('Error', 'Please fill in all fields.');
            return;
        }

        if (!isValidImageUrl(image)) {
            Alert.alert('Error', 'Please enter a valid image URL (e.g., ending with .png, .jpg, etc.).');
            return;
        }

        const newBook = {
            title,
            isbn,
            cardImage: image,
            copiesOwned: parseInt(copiesOwned, 10),
        };

        datasource[0].data.push(newBook);
        navigation.navigate('Home');
    };

    return (
        <View style={{ padding: 10 }}>
            <View style={{ padding: 10 }}>
                <Text style={{ fontWeight: 'bold' }}>Title:</Text>
                <TextInput
                    style={{ borderWidth: 1, padding: 5 }}
                    placeholder='Enter Book Title'
                    onChangeText={(text) => setTitle(text)}
                />
            </View>

            <View style={{ padding: 10 }}>
                <Text style={{ fontWeight: 'bold' }}>ISBN:</Text>
                <TextInput
                    style={{ borderWidth: 1, padding: 5 }}
                    placeholder='Enter ISBN'
                    onChangeText={(text) => setISBN(text)}
                />
            </View>

            <View style={{ padding: 10 }}>
                <Text style={{ fontWeight: 'bold' }}>Image URL:</Text>
                <TextInput
                    style={{ borderWidth: 1, padding: 5 }}
                    placeholder='Enter Image URL'
                    onChangeText={(text) => setImage(text)}
                />
            </View>

            <View style={{ padding: 10 }}>
                <Text style={{ fontWeight: 'bold' }}>Copies Owned:</Text>
                <TextInput
                    style={{ borderWidth: 1, padding: 5 }}
                    placeholder='Enter Number of Copies'
                    keyboardType='numeric'
                    onChangeText={(text) => setCopiesOwned(text)}
                />
            </View>

            <Button title='Add Book'
                    onPress={handleSubmit}
            />
        </View>
    );
};

export default Add;
