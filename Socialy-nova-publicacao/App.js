import React from 'react';
import { StyleSheet, View, Platform } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import NewPostScreen from './src/screens/NewPostScreen';

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar style="dark" backgroundColor="#FFE9E8" />
      <View style={styles.rootContainer}>
        <View style={styles.appWrapper}>
          <NewPostScreen />
        </View>
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: Platform.OS === 'web' ? '#E9ECEF' : '#FFE9E8',
    alignItems: 'center',
    justifyContent: 'center',
  },
  appWrapper: {
    width: '100%',
    maxWidth: 440,
    height: '100%',
    backgroundColor: '#FFE9E8',
    ...Platform.select({
      web: {
        maxHeight: 880,
        boxShadow: '0 12px 36px rgba(0, 0, 0, 0.18)',
        borderRadius: 28,
        overflow: 'hidden',
        borderWidth: 8,
        borderColor: '#1C1C1E',
      },
    }),
  },
});
