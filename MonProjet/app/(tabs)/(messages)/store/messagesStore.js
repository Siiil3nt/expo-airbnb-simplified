import { create } from 'zustand';

export const useMessagesStore = create((set, get) => ({
    // initialisation des variables 
    messages: [],
    loading: false,

    // Permet de récup les données de l'api
    fetchMessages: async () => {
        set({ loading: true });
        
        const response = await fetch('https://jsonplaceholder.typicode.com/comments?_limit=30');
        const data = await response.json();
        
        set({ messages: data, loading: false });
    },

    // permet d'ajouter un message
    addMessage: (conversationId, text) => {
        const newMessage = {
        postId: conversationId,
        id: Date.now(),
        name: 'Mon message',
        email: 'maxime.hermier@gmail.com',
        body: text
        };

        set(state => ({
        messages: [...state.messages, newMessage]
        }));
    }
}));
