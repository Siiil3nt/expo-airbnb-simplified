import { StyleSheet, View } from 'react-native';
import AddTask from './AddTask';
import TaskList from './TaskList';

export default function ExoZustand() {
  return (
    <View style={styles.container}>
      <AddTask />
      <TaskList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: 50,
  },
});