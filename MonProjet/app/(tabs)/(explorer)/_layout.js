import { Stack } from 'expo-router';

export default function ExplorerLayout() {
  return (
    <Stack>
      <Stack.Screen 
        name="index" 
        options={{ 
          title: 'Explorer',
          headerStyle: {
            backgroundColor: '#f8f8f8',
          },
          headerTintColor: '#333',
          headerTitleStyle: {
            fontWeight: 'normal',
          },
        }} 
      />
      <Stack.Screen 
        name="detail" 
        options={{ 
          title: 'Détail',
          headerStyle: {
            backgroundColor: '#f8f8f8',
          },
          headerTintColor: '#333',
          headerTitleStyle: {
            fontWeight: 'normal',
          },
        }} 
      />
    </Stack>
  );
}