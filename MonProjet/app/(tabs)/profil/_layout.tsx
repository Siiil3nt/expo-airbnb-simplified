import Ionicons from '@expo/vector-icons/Ionicons';
import { Drawer } from 'expo-router/drawer';

export default function ProfildrawerLayout() {
  return (
    <Drawer
      screenOptions={{
        drawerActiveTintColor: '#ffd33d',
      }}
    >
      <Drawer.Screen
        name="index" // page profil principale
        options={{
          drawerLabel: 'Profil',
          drawerIcon: ({ color }: { color: string }) => <Ionicons name="person" size={20} color={color} />,
        }}
      />
      <Drawer.Screen
        name="settings"
        options={{
          drawerLabel: 'Paramètres',
          drawerIcon: ({ color }: { color: string }) => <Ionicons name="settings" size={20} color={color} />,
        }}
      />
    </Drawer>
  );
}
