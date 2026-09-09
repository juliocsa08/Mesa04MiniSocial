import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Header from '../components/Header';
import CreatePostCard from '../components/CreatePostCard';
import BottomNavBar from '../components/BottomNavBar';

export default function NewPostScreen() {
  const [postText, setPostText] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [selectedFeeling, setSelectedFeeling] = useState(null);
  const [activeTab, setActiveTab] = useState('plus');

  // Fechar tela com confirmação caso haja conteúdo não salvo
  const handleClose = () => {
    if (postText.trim() || selectedImage || selectedLocation || selectedFeeling) {
      Alert.alert(
        'Descartar publicação?',
        'As alterações feitas não serão salvas.',
        [
          { text: 'Continuar editando', style: 'cancel' },
          {
            text: 'Descartar',
            style: 'destructive',
            onPress: () => {
              setPostText('');
              setSelectedImage(null);
              setSelectedLocation(null);
              setSelectedFeeling(null);
            },
          },
        ]
      );
    } else {
      Alert.alert('Fechar', 'Voltando para o feed principal.');
    }
  };

  // Ação de adicionar imagem
  const handleAddImage = () => {
    Alert.alert('Adicionar Imagem', 'Escolha a origem da foto:', [
      { text: 'Cancelar', style: 'cancel' },
      {
        text: '📷 Câmera',
        onPress: () => setSelectedImage('Foto_Camera.jpg'),
      },
      {
        text: '🖼️ Galeria de Fotos',
        onPress: () => setSelectedImage('Foto_Galeria.png'),
      },
    ]);
  };

  // Ação de adicionar localização
  const handleAddLocation = () => {
    Alert.alert('Adicionar Localização', 'Selecione uma localização:', [
      { text: 'Cancelar', style: 'cancel' },
      {
        text: '📍 São Paulo, SP',
        onPress: () => setSelectedLocation('São Paulo, SP'),
      },
      {
        text: '📍 Rio de Janeiro, RJ',
        onPress: () => setSelectedLocation('Rio de Janeiro, RJ'),
      },
      {
        text: '📍 Belo Horizonte, MG',
        onPress: () => setSelectedLocation('Belo Horizonte, MG'),
      },
    ]);
  };

  // Ação de adicionar sentimento
  const handleAddFeeling = () => {
    Alert.alert('Como você está se sentindo?', 'Escolha um sentimento:', [
      { text: 'Cancelar', style: 'cancel' },
      { text: '😄 Feliz', onPress: () => setSelectedFeeling('Feliz') },
      { text: '✨ Inspirado(a)', onPress: () => setSelectedFeeling('Inspirado(a)') },
      { text: '☕ Produtivo(a)', onPress: () => setSelectedFeeling('Produtivo(a)') },
      { text: '🚀 Animado(a)', onPress: () => setSelectedFeeling('Animado(a)') },
    ]);
  };

  // Ação de publicar
  const handlePublish = () => {
    if (!postText.trim() && !selectedImage) {
      Alert.alert('Atenção', 'Escreva algo ou selecione uma imagem para publicar!');
      return;
    }

    Alert.alert('Sucesso!', 'Sua publicação foi compartilhada com sucesso!', [
      {
        text: 'OK',
        onPress: () => {
          setPostText('');
          setSelectedImage(null);
          setSelectedLocation(null);
          setSelectedFeeling(null);
        },
      },
    ]);
  };

  return (
    <SafeAreaView style={styles.safeArea} edges={['top', 'left', 'right']}>
      <KeyboardAvoidingView
        style={styles.keyboardContainer}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        {/* Cabeçalho */}
        <Header onClose={handleClose} />

        {/* Conteúdo com rolagem suave */}
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          {/* Card Branco Principal */}
          <CreatePostCard
            content={postText}
            onChangeContent={setPostText}
            onPressImage={handleAddImage}
            onPressLocation={handleAddLocation}
            onPressFeeling={handleAddFeeling}
            onRemoveImage={() => setSelectedImage(null)}
            onRemoveLocation={() => setSelectedLocation(null)}
            onRemoveFeeling={() => setSelectedFeeling(null)}
            selectedImage={selectedImage}
            selectedLocation={selectedLocation}
            selectedFeeling={selectedFeeling}
          />

          {/* Botão Publicar */}
          <View style={styles.publishButtonWrapper}>
            <TouchableOpacity
              style={styles.publishButton}
              onPress={handlePublish}
              activeOpacity={0.85}
              accessibilityLabel="Publicar"
              accessibilityRole="button"
            >
              <Text style={styles.publishButtonText}>Publicar</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>

        {/* Barra de Navegação Inferior */}
        <BottomNavBar activeTab={activeTab} onTabPress={setActiveTab} />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFE9E8',
  },
  keyboardContainer: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 20,
  },
  publishButtonWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 22,
    marginBottom: 10,
  },
  publishButton: {
    width: 238,
    height: 50,
    borderRadius: 8,
    backgroundColor: '#DC586D',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#DC586D',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.35,
    shadowRadius: 8,
    elevation: 4,
  },
  publishButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: 0.2,
  },
});
