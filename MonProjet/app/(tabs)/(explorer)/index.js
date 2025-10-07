import { Link } from 'expo-router';
import { ActivityIndicator, FlatList, Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { useLogements } from './fetch';

export default function Explorer() {
  const { logements, loading } = useLogements();

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#007AFF" />
        <Text>Chargement</Text>
      </View>
    );
  }

  const renderLogement = ({ item }) => (
    <Link href={`./detail?id=${item.id}`} asChild>
      <Pressable style={styles.item}>
        <Image source={{ uri: item.image }} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.city}>{item.city} • {item.type}</Text>
          <Text style={styles.price}>{item.price} €/nuit</Text>
          <Text style={styles.rating}>{item.rating}/5</Text>
        </View>
      </Pressable>
    </Link>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Explorer les logements</Text>
      <FlatList
        data={logements}
        renderItem={renderLogement}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 20,
    fontWeight: 'normal',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  list: {
    paddingHorizontal: 16,
  },
  item: {
    flexDirection: 'row',
    backgroundColor: '#f8f8f8',
    borderRadius: 10,
    padding: 12,
    marginBottom: 12,
    alignItems: 'center',
  },
  image: {
    width: 80,
    height: 60,
    borderRadius: 8,
    marginRight: 12,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
    color: '#333',
  },
  city: {
    fontSize: 14,
    color: '#666',
    marginBottom: 2,
  },
  price: {
    fontSize: 14,
    color: '#333',
    fontWeight: '600',
    marginBottom: 2,
  },
  rating: {
    fontSize: 12,
    color: '#666',
  },
});