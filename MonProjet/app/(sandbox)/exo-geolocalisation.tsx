import * as Location from 'expo-location';
import { useState } from 'react';
import { Button, Text, View } from 'react-native';

export default function App(){
    const [location, setLocation] = useState<any>(null);

    async function obtenirPosition() {
        const { status } = await Location.requestForegroundPermissionsAsync();
        
        if (status === 'granted') {
            const position = await Location.getCurrentPositionAsync({});
            setLocation(position);
        } else {
            console.log('Permission refusée');
        }
    }

    return (
        <View style={{ flex: 1, justifyContent: 'center', padding: 20 }}>
            {location ? (
                <View style={{ backgroundColor: '#ffffffff', padding: 20, borderRadius: 10, marginBottom: 30 }}>
                    <Text style={{ fontSize: 18, marginBottom: 10 }}>Ma Position:</Text>
                    <Text>Latitude: {location.coords.latitude}</Text>
                    <Text>Longitude: {location.coords.longitude}</Text>
                </View>
            ) : (
                <Text style={{ textAlign: 'center', marginBottom: 30 }}>
                    Obtenir la position
                </Text>
            )}
            
            <Button title="Obtenir ma position" onPress={obtenirPosition} />
        </View>
    );
}
