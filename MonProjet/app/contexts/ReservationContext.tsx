import React, { createContext, useContext, useState } from 'react';


type Reservation = { logementId: string; nom: string; date: string };
const ReservationContext = createContext<{reservations: Reservation[]; addReservation: (r: Reservation) => void }>({ reservations: [], addReservation: () => {} });

export const useReservation = () => useContext(ReservationContext);

import { ReactNode } from 'react';

export function ReservationProvider({ children }: { children: ReactNode }) {
  const [reservations, setReservations] = useState<Reservation[]>([]);
  const addReservation = (r: Reservation) => setReservations(res => [...res, r]);
  return <ReservationContext.Provider value={{ reservations, addReservation }}>{children}</ReservationContext.Provider>;
}
