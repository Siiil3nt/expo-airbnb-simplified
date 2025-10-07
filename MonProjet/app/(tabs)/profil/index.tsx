import { router } from 'expo-router';
import React from 'react';
import { Button, Image, StyleSheet, Text, View } from 'react-native';
import { useReservation } from '../../contexts/ReservationContext';

export default function Profil() {
  const { reservations } = useReservation();

  return (
    <View style={styles.container}>
      <Image source={{ uri: 'https://static.wikia.nocookie.net/youtuberfrancais/images/6/61/Alderiate.PNG/revision/latest/scale-to-width-down/350?cb=20200705211516&path-prefix=fr' }} style={styles.avatar} />
      <Text style={styles.name}>Maxime HERMIER</Text>
      <Text style={styles.info}>Email : maxime.hermier@gmail.com</Text>
      <Text style={styles.info}>Membre depuis 2023</Text>
      <Text style={styles.subtitle}>Mes réservations :</Text>
      {reservations.length === 0 && <Text>Aucune réservation</Text>}
      {reservations.map((resa, i) => (
        <Text key={i} style={styles.resa}>{resa.nom} le {resa.date}</Text>
      ))}
      
      <View style={styles.playgroundSection}>
        <Button
          title="Accéder aux exercices"
          onPress={() => router.push("../(sandbox)/playground")}
          color="#ffd33d"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', paddingTop: 40, backgroundColor: '#fff' },
  avatar: { width: 100, height: 100, borderRadius: 50, marginBottom: 16 },
  name: { fontSize: 24, fontWeight: 'bold', marginBottom: 4 },
  info: { fontSize: 16, color: 'gray', marginBottom: 2 },
  subtitle: { marginTop: 20, fontWeight: 'bold', fontSize: 18, marginBottom: 6 },
  resa: { fontSize: 16, color: '#333' },
  playgroundSection: { 
    marginTop: 30, 
    width: '80%',
  },
});
