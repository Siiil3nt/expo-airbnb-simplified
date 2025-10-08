import { Stack } from 'expo-router';

export default function MessagesLayout() {
    return (
        <Stack>
        <Stack.Screen 
            name="index" 
            options={{ 
            title: 'Messages',
            headerShown: false
            }} 
        />
        <Stack.Screen 
            name="[convId]" 
            options={{ 
            title: 'Conversation',
            headerShown: true
            }} 
        />
        </Stack>
    );
}
