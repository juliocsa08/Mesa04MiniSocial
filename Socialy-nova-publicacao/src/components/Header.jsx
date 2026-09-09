import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Header({ onClose }) {
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity
        style={styles.closeButton}
        onPress={onClose}
        activeOpacity={0.7}
        hitSlop={{ top: 12, bottom: 12, left: 12, right: 12 }}
        accessibilityLabel="Fechar"
        accessibilityRole="button"
      >
        <Ionicons name="close" size={30} color="#A33757" />
      </TouchableOpacity>

      <View style={styles.titleWrapper}>
        <Text style={styles.title}>Nova Publicação</Text>
      </View>

      {/* Espaçador para manter o título exatamente centralizado */}
      <View style={styles.placeholder} />
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 12,
    paddingBottom: 10,
    backgroundColor: '#FFE9E8',
  },
  closeButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  titleWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: '#000000',
    letterSpacing: 0.2,
  },
  placeholder: {
    width: 40,
  },
});
