import { CameraType, CameraView, useCameraPermissions } from 'expo-camera';
import { useRef, useState } from 'react';
import { Button, Image, Text, View } from 'react-native';

export default function App(){
    const [permission, requestPermission] = useCameraPermissions();
    const [facing, setFacing] = useState<CameraType>('back');
    const [photo, setPhoto] = useState<string | null>(null);
    const cameraRef = useRef<CameraView>(null);

    if(!permission){
        return <View></View>;
    }
    if(!permission.granted){
        return <View>
            <Text>Nous avons besoin de votre permission pour utiliser la caméra</Text>
            <Button title="Autoriser" onPress={requestPermission}/>
        </View>;
    }

    function retournerCamera() {
        if (facing === 'back') {
            setFacing('front');
        } else {
            setFacing('back');
        }
    }

    function prendrePhoto(){
        cameraRef.current?.takePictureAsync().then(result => {
            setPhoto(result.uri);
        });
    }

    return (
        <View style={{ flex: 1 }}>
            {photo ? (
                <Image source={{ uri: photo }} style={{ flex: 1 }} />
            ) : (
                <CameraView ref={cameraRef} style={{ flex: 1 }} facing={facing} />
            )}
            
            <View style={{ position: 'absolute', bottom: 50, left: 20, right: 20 }}>
                <Button title="Retourner caméra" onPress={retournerCamera} />
                <Button title="Prendre une photo" onPress={prendrePhoto} />
                {photo && <Button title="Supprimer photo" onPress={() => setPhoto(null)} />}
            </View>
        </View>
    );
}