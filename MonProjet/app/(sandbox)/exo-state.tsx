import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function ExoState() {
  const [count, setCount] = useState(0);

  const incrementer = () => {
    console.log('Avant incrémentation - Count actuel:', count);
    setCount(count + 1);
    console.log('Après incrémentation - Nouveau count:', count + 1);
  };

  const decrementer = () => {
    console.log('Avant décrémentation - Count actuel:', count);
    setCount(count - 1);
    console.log('Après décrémentation - Nouveau count:', count - 1);
  };

  const reset = () => {
    console.log('Avant reset - Count actuel:', count);
    setCount(0);
    console.log('Après reset - Nouveau count: 0');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>useState - Compteur</Text>
      
      <View style={styles.countContainer}>
        <Text style={styles.countLabel}>Valeur actuelle :</Text>
        <Text style={styles.countValue}>{count}</Text>
      </View>

      <View style={styles.buttonsContainer}>
        <Button
          title="Incrémenter"
          onPress={incrementer}
          color="#4CAF50"
        />
        <Button
          title="Décrémenter"
          onPress={decrementer}
          color="#FF5722"
        />
        <Button
          title="Reset"
          onPress={reset}
          color="#2196F3"
        />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
    color: '#333',
  },
  countContainer: {
    alignItems: 'center',
    marginBottom: 40,
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  countLabel: {
    fontSize: 18,
    color: '#666',
    marginBottom: 10,
  },
  countValue: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#2196F3',
  },
  buttonsContainer: {
    gap: 15,
    width: '80%',
    marginBottom: 30,
  },
  infoContainer: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 8,
    width: '100%',
  },
  infoTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
  },
  infoText: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
});