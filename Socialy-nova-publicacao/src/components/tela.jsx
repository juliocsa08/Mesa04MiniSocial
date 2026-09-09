import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Platform, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function CreatePostCard({
  content,
  onChangeContent,
  onPressImage,
  onPressLocation,
  onPressFeeling,
  onRemoveImage,
  onRemoveLocation,
  onRemoveFeeling,
  selectedImage,
  selectedLocation,
  selectedFeeling,
}) {
  return (
    <View style={styles.card}>
      {/* Título de pergunta */}
      <Text style={styles.cardQuestion}>O que você está pensando?</Text>

      {/* Caixa interna de texto */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Escreva algo..."
          placeholderTextColor="#9CA3AF"
          multiline
          textAlignVertical="top"
          value={content}
          onChangeText={onChangeContent}
        />
      </View>

      {/* Badges de itens adicionados (se houver) */}
      {(selectedImage || selectedLocation || selectedFeeling) && (
        <View style={styles.badgesContainer}>
          {selectedImage && (
            <View style={styles.badge}>
              <Ionicons name="image" size={14} color="#DC586D" />
              <Text style={styles.badgeText} numberOfLines={1}>
                {selectedImage}
              </Text>
              {onRemoveImage && (
                <TouchableOpacity
                  onPress={onRemoveImage}
                  hitSlop={{ top: 6, bottom: 6, left: 6, right: 6 }}
                >
                  <Ionicons name="close-circle" size={16} color="#DC586D" />
                </TouchableOpacity>
              )}
            </View>
          )}

          {selectedLocation && (
            <View style={styles.badge}>
              <Ionicons name="location" size={14} color="#DC586D" />
              <Text style={styles.badgeText} numberOfLines={1}>
                {selectedLocation}
              </Text>
              {onRemoveLocation && (
                <TouchableOpacity
                  onPress={onRemoveLocation}
                  hitSlop={{ top: 6, bottom: 6, left: 6, right: 6 }}
                >
                  <Ionicons name="close-circle" size={16} color="#DC586D" />
                </TouchableOpacity>
              )}
            </View>
          )}

          {selectedFeeling && (
            <View style={styles.badge}>
              <Ionicons name="happy" size={14} color="#DC586D" />
              <Text style={styles.badgeText} numberOfLines={1}>
                {selectedFeeling}
              </Text>
              {onRemoveFeeling && (
                <TouchableOpacity
                  onPress={onRemoveFeeling}
                  hitSlop={{ top: 6, bottom: 6, left: 6, right: 6 }}
                >
                  <Ionicons name="close-circle" size={16} color="#DC586D" />
                </TouchableOpacity>
              )}
            </View>
          )}
        </View>
      )}

      {/* Linha de ações inferiores: Imagem, Localização, Sentimento */}
      <View style={styles.actionsRow}>
        <TouchableOpacity
          style={styles.actionButton}
          onPress={onPressImage}
          activeOpacity={0.7}
        >
          <Ionicons name="image-outline" size={22} color="#DC586D" />
          <Text style={styles.actionText}>Imagem</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.actionButton}
          onPress={onPressLocation}
          activeOpacity={0.7}
        >
          <Ionicons name="location-outline" size={22} color="#DC586D" />
          <Text style={styles.actionText}>Localização</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.actionButton}
          onPress={onPressFeeling}
          activeOpacity={0.7}
        >
          <Ionicons name="happy-outline" size={22} color="#DC586D" />
          <Text style={styles.actionText}>Sentimento</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    padding: 16,
    marginHorizontal: 16,
    marginTop: 8,
    // Sombra suave idêntica ao design
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.07,
    shadowRadius: 8,
    elevation: 3,
  },
  cardQuestion: {
    fontSize: 17,
    fontWeight: '700',
    color: '#000000',
    marginBottom: 12,
    letterSpacing: -0.2,
  },
  inputContainer: {
    backgroundColor: '#F3F4F6',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    height: 310,
    padding: 12,
  },
  textInput: {
    flex: 1,
    fontSize: 16,
    color: '#111827',
    lineHeight: 22,
    ...Platform.select({
      web: {
        outlineStyle: 'none',
      },
    }),
  },
  badgesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginTop: 10,
  },
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    backgroundColor: '#FFE9E8',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#F9CBD3',
    maxWidth: '90%',
  },
  badgeText: {
    fontSize: 12,
    color: '#DC586D',
    fontWeight: '600',
  },
  actionsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 14,
    paddingHorizontal: 4,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingVertical: 4,
    paddingHorizontal: 4,
  },
  actionText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#DC586D',
  },
});
