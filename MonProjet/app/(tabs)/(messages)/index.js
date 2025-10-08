import { useRouter } from 'expo-router';
import { useEffect } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { useMessagesStore } from './store/messagesStore';

export default function MessagesIndex() {
    const router = useRouter();
    const { messages, loading, fetchMessages } = useMessagesStore();

    // charger les messages 
    useEffect(() => {
        fetchMessages();
    }, []);

    // permet de grouper les messages avec leurs id donc par conversations
    const conversations = {};
    messages.forEach(message => {
        conversations[message.postId] = [];
        conversations[message.postId].push(message);
    });

    // ici on met dans une flatlist les conversations
    const conversationsList = Object.keys(conversations).map(postId => {
        const msgs = conversations[postId];
        const lastMessage = msgs[msgs.length - 1];
        
        return {
        id: postId,
        participantName: lastMessage.email.split('@')[0],
        lastMessage: lastMessage.body.substring(0, 50) + '...',
        messageCount: msgs.length
        };
    });

    const renderConversation = ({ item }) => (
        <TouchableOpacity 
        style={{
            padding: 15,
            borderBottomWidth: 1,
            borderBottomColor: '#eee',
            backgroundColor: '#fff'
        }}
        onPress={() => router.push(`/(tabs)/(messages)/${item.id}`)}
        >
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={{
            width: 50,
            height: 50,
            borderRadius: 25,
            backgroundColor: '#007AFF',
            justifyContent: 'center',
            alignItems: 'center',
            marginRight: 15
            }}>
            <Text style={{ color: 'white', fontWeight: 'bold' }}>
                {item.id}
            </Text>
            </View>
            
            <View style={{ flex: 1 }}>
            <Text style={{ fontWeight: 'bold', fontSize: 16 }}>
                {item.participantName}
            </Text>
            <Text style={{ color: '#666', marginTop: 5 }}>
                {item.lastMessage}
            </Text>
            <Text style={{ color: '#999', fontSize: 12, marginTop: 2 }}>
                {item.messageCount} messages
            </Text>
            </View>
        </View>
        </TouchableOpacity>
    );

    return (
        <View style={{ flex: 1, backgroundColor: '#f5f5f5' }}>
        <FlatList
            data={conversationsList}
            renderItem={renderConversation}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
        />
        </View>
    );
}
