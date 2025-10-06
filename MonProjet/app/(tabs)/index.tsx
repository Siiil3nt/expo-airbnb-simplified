import { Link } from 'expo-router';
import React from 'react';
import { FlatList, Image, Pressable, StyleSheet, Text, View } from 'react-native';

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

const renderItem = ({ item }: { item: Appartement }) => (
  <Link href={`./logement/${item.id}`} asChild>
    <Pressable style={styles.item}>
      <Image source={{ uri: 'https://static.vecteezy.com/system/resources/previews/000/567/738/original/vector-real-estate-house-icon.jpg' }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.nom}>{item.nom}</Text>
        <Text style={styles.prix}>{item.prix} €/nuit</Text>
      </View>
    </Pressable>
  </Link>
);

export default function IndexScreen() {
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
  container: { flex: 1, paddingTop: 50, backgroundColor: '#fff' },
  list: { paddingHorizontal: 16 },
  item: {
    flexDirection: 'row',
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
