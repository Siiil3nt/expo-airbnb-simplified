import { Stack } from 'expo-router';
import { ReservationProvider } from './contexts/ReservationContext';

export default function RootLayout() {
  return (
    <ReservationProvider>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </ReservationProvider>
  );
}
