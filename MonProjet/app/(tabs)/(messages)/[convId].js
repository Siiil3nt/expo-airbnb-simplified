import { useLocalSearchParams } from 'expo-router';
import { useState } from 'react';
import { Button, FlatList, KeyboardAvoidingView, Platform, Text, TextInput, View } from 'react-native';
import { useMessagesStore } from './store/messagesStore';

export default function ConversationDetail() {
    const { convId } = useLocalSearchParams();
    const { messages, addMessage } = useMessagesStore();
    const [newMessage, setNewMessage] = useState('');

    // permets de récuperer les messages d'uniquement la conversation souhaitée
    const conversationMessages = messages.filter(msg => msg.postId.toString() === convId);

    const handleSendMessage = () => {
        addMessage(parseInt(convId), newMessage);
    };

    const renderMessage = ({ item }) => {
        // différencie mes messages de ceux de l'api pour le style
        const isMyMessage = item.email === 'maxime.hermier@gmail.com';
        
        return (
        <View style={{
            alignSelf: isMyMessage ? 'flex-end' : 'flex-start',
            maxWidth: '80%',
            padding: 10,
            margin: 5,
            backgroundColor: isMyMessage ? '#007AFF' : '#f0f0f0',
            borderRadius: 10
        }}>
            <Text style={{ color: isMyMessage ? 'white' : 'black' }}>
            {item.body}
            </Text>
            <Text style={{ 
            fontSize: 12, 
            marginTop: 5, 
            opacity: 0.7,
            color: isMyMessage ? '#ccc' : '#666'
            }}>
            {item.email}
            </Text>
        </View>
        );
    };

    return (
        <KeyboardAvoidingView 
        style={{ flex: 1 }} 
        behavior={Platform.OS === 'android' ? 'padding' : 'height'} 
        keyboardVerticalOffset={200}
        >
        <View style={{ flex: 1, padding: 10 }}>
            
            {/* permet de voir un message */}
            <FlatList
            data={conversationMessages}
            renderItem={renderMessage}
            keyExtractor={(item) => item.id.toString()}
            style={{ flex: 1 }}
            contentContainerStyle={{ paddingBottom: 20 }}
            />

            {/* nouveau message */}
            <TextInput
            style={{
                borderWidth: 1,
                borderColor: '#ddd',
                padding: 10,
                marginBottom: 10
            }}
            placeholder="Entrez votre message"
            value={newMessage}
            onChangeText={setNewMessage}
            />
            
            <Button title="Envoyer" onPress={handleSendMessage} />
        </View>
        </KeyboardAvoidingView>
    );
}
