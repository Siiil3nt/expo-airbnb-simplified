import React from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';

const appartements = [
  { id: '1', nom: 'Appartement cosy', prix: 75 },
  { id: '2', nom: 'Loft lumineux', prix: 120 },
  { id: '3', nom: 'Studio moderne', prix: 60 },
  { id: '4', nom: 'Appartement avec balcon', prix: 90 },
];

type Appartement = {
  id: string;
  nom: string;
  prix: number;
};

export default function IndexScreen() {
  const renderItem = ({ item }: { item: Appartement }) => (
    <View style={styles.item}>
      <Image source={{ uri: 'https://picsum.photos/400/200' }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.nom}>{item.nom}</Text>
        <Text style={styles.prix}>{item.prix} €/nuit</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={appartements}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: '#fff',
  },
  list: {
    paddingHorizontal: 16,
  },
  item: {
    flexDirection: 'row', // image à gauche, texte à droite
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 60,
    borderRadius: 6,
    marginRight: 12,
  },
  textContainer: {
    flex: 1,
  },
  nom: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  prix: {
    fontSize: 16,
    color: 'gray',
  },
});
