import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function BottomNavBar({ activeTab = 'plus', onTabPress }) {
  const insets = useSafeAreaInsets();

  const tabs = [
    { id: 'home', label: 'Início', icon: 'home-outline', iconType: 'outline' },
    { id: 'search', label: 'Buscar', icon: 'search-outline', iconType: 'outline' },
    { id: 'plus', isCenter: true },
    { id: 'notifications', label: 'Notificações', icon: 'notifications-outline', iconType: 'outline' },
    { id: 'profile', label: 'perfil', icon: 'person', iconType: 'filled' },
  ];

  return (
    <View style={[styles.container, { paddingBottom: Math.max(insets.bottom, 6) }]}>
      <View style={styles.content}>
        {tabs.map((tab) => {
          if (tab.isCenter) {
            return (
              <TouchableOpacity
                key="plus-center"
                style={styles.centerButtonWrapper}
                onPress={() => onTabPress && onTabPress('plus')}
                activeOpacity={0.8}
                accessibilityLabel="Nova publicação"
                accessibilityRole="button"
              >
                <View style={styles.centerCircle}>
                  <Ionicons name="add" size={28} color="#FFFFFF" />
                </View>
              </TouchableOpacity>
            );
          }

          const isActive = activeTab === tab.id;

          return (
            <TouchableOpacity
              key={tab.id}
              style={styles.tabItem}
              onPress={() => onTabPress && onTabPress(tab.id)}
              activeOpacity={0.7}
              accessibilityLabel={tab.label}
              accessibilityRole="button"
            >
              <Ionicons
                name={tab.icon}
                size={25}
                color="#A33757"
                style={styles.tabIcon}
              />
              <Text style={styles.tabLabel}>{tab.label}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFE9E8',
    borderTopWidth: 1,
    borderTopColor: '#E8BCC3',
    paddingTop: 8,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: 52,
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabIcon: {
    marginBottom: 2,
  },
  tabLabel: {
    fontSize: 11,
    fontWeight: '600',
    color: '#A33757',
    letterSpacing: -0.2,
  },
  centerButtonWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  centerCircle: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#DC586D',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#DC586D',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.35,
    shadowRadius: 5,
    elevation: 4,
  },
});
