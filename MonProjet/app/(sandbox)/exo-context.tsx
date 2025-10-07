import Ionicons from '@expo/vector-icons/Ionicons';
import React, { createContext, ReactNode, useContext, useState } from 'react';
import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  colors: {
    background: string;
    surface: string;
    text: string;
    textSecondary: string;
    primary: string;
    border: string;
  };
}

const lightTheme = {
  background: '#ffffff',
  surface: '#f8f9fa',
  text: '#212529',
  textSecondary: '#6c757d',
  primary: '#007bff',
  border: '#e9ecef',
};

const darkTheme = {
  background: '#121212',
  surface: '#1e1e1e',
  text: '#ffffff',
  textSecondary: '#b3b3b3',
  primary: '#bb86fc',
  border: '#333333',
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>('light');

  const toggleTheme = () => {
    console.log('Avant changement de thème:', theme);
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    console.log('Après changement de thème:', newTheme);
  };

  const colors = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, colors }}>
      {children}
    </ThemeContext.Provider>
  );
}


export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}


function Header() {
  const { theme, toggleTheme, colors } = useTheme();

  return (
    <View style={[styles.header, { backgroundColor: colors.surface, borderBottomColor: colors.border }]}>
      <Text style={[styles.headerTitle, { color: colors.text }]}>
        Thème Manager
      </Text>
      <TouchableOpacity 
        style={[styles.themeButton, { backgroundColor: colors.primary }]}
        onPress={toggleTheme}
      >
        <Ionicons 
          name={theme === 'light' ? 'moon' : 'sunny'} 
          size={20} 
          color={theme === 'light' ? '#ffffff' : '#000000'} 
        />
        <Text style={[styles.buttonText, { color: theme === 'light' ? '#ffffff' : '#000000' }]}>
          {theme === 'light' ? 'Mode sombre' : 'Mode clair'}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default function ExoContext() {
  return (
    <ThemeProvider>
      <ExoContextContent />
    </ThemeProvider>
  );
}

function ExoContextContent() {
  const { colors } = useTheme();

  return (
    <>
      <StatusBar 
        barStyle={colors.background === '#ffffff' ? 'dark-content' : 'light-content'} 
        backgroundColor={colors.surface}
      />
      <View style={[styles.container, { backgroundColor: colors.background }]}>
        <Header />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    paddingTop: 50,
    borderBottomWidth: 1,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  themeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
    gap: 8,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: '600',
  },
  content: {
    flex: 1,
    padding: 20,
  },
  card: {
    padding: 20,
    borderRadius: 12,
    marginBottom: 20,
    borderWidth: 1,
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  cardDescription: {
    fontSize: 15,
    lineHeight: 22,
  },
  infoSection: {
    padding: 20,
    borderRadius: 12,
    marginBottom: 20,
    borderWidth: 1,
  },
  infoTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  infoText: {
    fontSize: 14,
    lineHeight: 20,
  },
  demoSection: {
    padding: 20,
    borderRadius: 12,
    borderWidth: 1,
  },
  demoTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  demoItems: {
    gap: 10,
  },
  demoItem: {
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
});