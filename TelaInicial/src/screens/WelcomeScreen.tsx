import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Alert,
} from 'react-native';
import { colors } from '../theme/colors';

interface WelcomeScreenProps {
  onLogin?: () => void;
  onRegister?: () => void;
}

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({
  onLogin,
  onRegister,
}) => {
  const handleLogin = () => {
    if (onLogin) {
      onLogin();
    } else {
      Alert.alert('Entrar', 'Redirecionando para a tela de Login...');
    }
  };

  const handleRegister = () => {
    if (onRegister) {
      onRegister();
    } else {
      Alert.alert('Criar conta', 'Redirecionando para a tela de Cadastro...');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <View style={styles.logoContainer}>
          <Image
            source={require('../../assets/socialy-logo-transparent.png')}
            style={styles.logoImage}
            resizeMode="contain"
          />
        </View>
      </View>

      <View style={styles.messageContainer}>
        <Text style={styles.taglineText}>
          Conecte-se com as pessoas e{'\n'}compartilhe momentos.
        </Text>
      </View>

      <View style={styles.buttonSection}>
        <TouchableOpacity
          style={[styles.button, styles.primaryButton]}
          onPress={handleLogin}
          activeOpacity={0.85}
        >
          <Text style={styles.primaryButtonText}>Entrar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.secondaryButton]}
          onPress={handleRegister}
          activeOpacity={0.85}
        >
          <Text style={styles.secondaryButtonText}>Criar conta</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    justifyContent: 'space-between',
    paddingHorizontal: 28,
    paddingTop: 40,
    paddingBottom: 40,
  },
  topSection: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 210,
    height: 200,
  },
  logoImage: {
    width: '100%',
    height: '100%',
  },
  messageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
    marginVertical: 20,
  },
  taglineText: {
    fontSize: 18,
    lineHeight: 26,
    fontWeight: '700',
    color: colors.textPrimary,
    textAlign: 'center',
    letterSpacing: -0.2,
  },
  buttonSection: {
    width: '100%',
    gap: 16,
    marginBottom: 16,
  },
  button: {
    width: '100%',
    height: 52,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
  },
  primaryButton: {
    backgroundColor: colors.primary,
  },
  primaryButtonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: 0.2,
  },
  secondaryButton: {
    backgroundColor: colors.white,
  },
  secondaryButtonText: {
    color: colors.textPrimary,
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: 0.2,
  },
});
