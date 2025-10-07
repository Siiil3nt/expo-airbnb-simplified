import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import useTaskStore from '../store/useTaskStore';

export default function AddTask() {
  const addTask = useTaskStore((state) => state.addTask);

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={addTask}>
        <Text style={styles.buttonText}>Ajouter une tâche</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    margin: 10,
    borderRadius: 8,
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});