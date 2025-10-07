import { useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import { ActivityIndicator, Alert, Button, Image, StyleSheet, Text, View } from 'react-native';
import { fetchLogements } from './fetch';

export default function LogementDetail() {
  const { id } = useLocalSearchParams();
  const [logement, setLogement] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadLogement() {
      const logements = await fetchLogements();
      const found = logements.find(l => l.id === id);
      setLogement(found);
      setLoading(false);
    }
    loadLogement();
  }, [id]);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#007AFF" />
        <Text>Chargement...</Text>
      </View>
    );
  }

  if (!logement) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Logement non trouvé</Text>
      </View>
    );
  }

  const handleReserve = () => {
    Alert.alert(
      'Réservation',
      `Voulez-vous réserver "${logement.title}" ?`,
      [
        { text: 'Annuler', style: 'cancel' },
        { text: 'Réserver', onPress: () => Alert.alert('Succès', 'Logement réservé !') }
      ]
    );
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: logement.image }} style={styles.image} />
      
      <View style={styles.content}>
        <Text style={styles.title}>{logement.title}</Text>
        <Text style={styles.location}>{logement.city} | {logement.type}</Text>
        
        <View style={styles.priceContainer}>
          <Text style={styles.price}>{logement.price} €/nuit</Text>
          <Text style={styles.rating}>{logement.rating}/5 ({logement.reviews} avis)</Text>
        </View>
        
        <Text style={styles.description}>{logement.description}</Text>
        
        <View style={styles.buttonContainer}>
          <Button 
            title="Réserver" 
            onPress={handleReserve}
            color="#666"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 250,
    resizeMode: 'cover',
  },
  content: {
    padding: 20,
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
  },
  location: {
    fontSize: 16,
    color: '#666',
    marginBottom: 12,
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  price: {
    fontSize: 18,
    color: '#333',
    fontWeight: 'bold',
  },
  rating: {
    fontSize: 14,
    color: '#666',
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: '#444',
    marginBottom: 30,
  },
  buttonContainer: {
    marginTop: 'auto',
    paddingBottom: 20,
  },
  errorText: {
    textAlign: 'center',
    fontSize: 18,
    color: '#666',
    marginTop: 50,
  },
});