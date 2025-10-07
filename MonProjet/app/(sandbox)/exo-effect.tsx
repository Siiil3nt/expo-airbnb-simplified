import React, { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function ExoEffect() {
  const [count, setCount] = useState(0);
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    console.log('Composant monté');
    return () => {
      console.log('Composant démonté');
    };
  }, []);

  useEffect(() => {
    console.log('Count a changé:', count);
    
    const interval = setInterval(() => {
      setTimer(prev => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [count]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>useEffect</Text>
      
      <View style={styles.section}>
        <Text style={styles.label}>Compteur: {count}</Text>
        <Text style={styles.label}>Timer: {timer}s</Text>
        
        <View style={styles.buttons}>
          <Button title="+1" onPress={() => setCount(count + 1)} />
          <Button title="Reset" onPress={() => setCount(0)} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 60,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
  },
  section: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 8,
    alignItems: 'center',
  },
  label: {
    fontSize: 18,
    marginBottom: 15,
  },
  buttons: {
    flexDirection: 'row',
    gap: 20,
  },
});