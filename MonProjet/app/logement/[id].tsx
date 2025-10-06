import DateTimePicker from '@react-native-community/datetimepicker';
import { Stack, useLocalSearchParams } from 'expo-router';
import React, { useState } from 'react';
import { Button, Image, StyleSheet, Text, View } from 'react-native';
import { useReservation } from '../contexts/ReservationContext';

const appartements = [
  { id: '1', nom: 'Appartement cosy', prix: 75, description: 'Un appartement chaleureux idéal pour 2 personnes.', image: 'https://i0.wp.com/espritlaita.fr/wp-content/uploads/2020/05/appart-cosy-su%C3%A8de-historika-hem-se-10.jpg?w=1500&ssl=1' },
  { id: '2', nom: 'Loft lumineux', prix: 120, description: 'Un loft ultra lumineux en plein centre-ville.', image: 'https://www.espaces-atypiques.com/wp-content/uploads/138081/0076EM/138081-0076EM-3.jpg' },
  { id: '3', nom: 'Studio moderne', prix: 60, description: 'Petit studio moderne, parfait pour un week-end.', image: 'https://tse4.mm.bing.net/th/id/OIP.3cfwNM59Xun665_LmQuplgHaE8?pid=Api' },
  { id: '4', nom: 'Appartement avec balcon', prix: 90, description: 'Bel appartement disposant d\'un grand balcon.', image: 'https://www.espaces-atypiques.com/wp-content/uploads/289686/4076EP/289686-4076EP-51146441d.jpg' },
];

export default function LogementDetails() {
  const { id } = useLocalSearchParams();
  const logement = appartements.find((a) => a.id === id);

  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const { addReservation } = useReservation();

  if (!logement) return <Text>Logement introuvable</Text>;

  const handleReserve = () => {
    addReservation({ logementId: logement.id, nom: logement.nom, date: date.toLocaleDateString() });
    alert('Réservé !');
  };

  return (
    <>
      <Stack.Screen options={{ title: logement.nom }} />
      <View style={styles.container}>
        <Image source={{ uri: logement.image }} style={styles.image} />
        <Text style={styles.nom}>{logement.nom}</Text>
        <Text style={styles.prix}>{logement.prix} €/nuit</Text>
        <Text style={styles.description}>{logement.description}</Text>
        <Button title="Choisir une date" onPress={() => setShow(true)} color="#ffd33d" />
        {show && (
          <DateTimePicker
            value={date}
            mode="date"
            display="default"
            onChange={(e, d) => {
              setShow(false);
              if (d) setDate(d);
            }}
          />
        )}
        <View style={styles.buttonContainer}>
          <Button title="RÉSERVER" onPress={handleReserve} color="#ffd33d" />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', alignItems: 'center', padding: 20 },
  image: { width: '100%', height: 180, borderRadius: 8, marginBottom: 16 },
  nom: { fontWeight: 'bold', fontSize: 22, marginBottom: 6 },
  prix: { fontSize: 18, color: 'gray', marginBottom: 10 },
  description: { fontSize: 16, marginBottom: 20, color: '#444', textAlign: 'center' },
  buttonContainer: { width: '80%', marginTop: 10 },
});
