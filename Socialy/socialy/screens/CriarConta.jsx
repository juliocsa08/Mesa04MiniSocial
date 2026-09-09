import React from 'react';

import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  Image,
  SafeAreaView,
} from 'react-native';

export default function CriarConta() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.conteudo}>

        <View style={styles.card}>

          {/* logo */}
          <Image
            source={require('../assets/logo.png')}
            style={styles.logo}
            resizeMode="contain"
          />

          {/* titulo */}
          <Text style={styles.titulo}>
            Criar Conta
          </Text>

          {/* formulario */}
          <View style={styles.formulario}>

            {/* nome */}
            <View style={styles.campo}>
              <Text style={styles.label}>
                Nome Completo
              </Text>

              <TextInput
                style={styles.input}
                placeholder="Digite seu nome"
                placeholderTextColor="#999"
              />
            </View>

            {/* email */}
            <View style={styles.campo}>
              <Text style={styles.label}>
                E-mail
              </Text>

              <TextInput
                style={styles.input}
                placeholder="Ex: Email@email.com"
                placeholderTextColor="#999"
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </View>

            {/* senha */}
            <View style={styles.campo}>
              <Text style={styles.label}>
                Senha
              </Text>

              <TextInput
                style={styles.input}
                placeholder="Digite sua senha"
                placeholderTextColor="#999"
                secureTextEntry={true}
              />
            </View>

          </View>
        </View>

        {/* botao */}
        <Pressable style={styles.botao}>
          <Text style={styles.textoBotao}>
            Entrar
          </Text>
        </Pressable>

        {/* login */}
        <View style={styles.loginContainer}>

          <Text style={styles.textoLogin}>
            Já tem uma conta?
          </Text>

          <Pressable>
            <Text style={styles.linkLogin}>
              Entrar
            </Text>
          </Pressable>

        </View>

      </View>

      {/* rodapé */}
      <View style={styles.rodape}>
        <Text style={styles.textoRodape}>
          Socialy
        </Text>
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#FDEAEA',
    paddingHorizontal: 10,
  },

  conteudo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },

  card: {
    width: '94%',
    backgroundColor: '#FFF7F7',
    borderWidth: 1,
    borderColor: '#DC5A70',
    borderRadius: 7,
    paddingHorizontal: 35,
    paddingTop: 15,
    paddingBottom: 30,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.20,
    shadowRadius: 2,
    elevation: 3,
  },

  logo: {
    width: 35,
    height: 35,
    alignSelf: 'center',
    marginBottom: 8,
  },

  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#111',
    textAlign: 'center',
    marginBottom: 28,
  },

  formulario: {
    width: '100%',
    gap: 28,
  },

  campo: {
    width: '100%',
  },

  label: {
    fontSize: 12,
    fontWeight: '600',
    color: '#111',
    marginBottom: 6,
  },

  input: {
    width: '100%',
    height: 42,
    borderWidth: 1,
    borderColor: '#DF7182',
    borderRadius: 4,
    backgroundColor: '#F5F5F5',
    paddingHorizontal: 10,
    fontSize: 12,
    color: '#111',
  },

  botao: {
    width: '58%',
    height: 48,
    marginTop: 25,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#DF5268',
    borderRadius: 7,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.20,
    shadowRadius: 2,
    elevation: 3,
  },

  textoBotao: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
  },

  loginContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 25,
  },

  textoLogin: {
    fontSize: 12,
    fontWeight: '600',
    color: '#111',
  },

  linkLogin: {
    marginLeft: 10,
    fontSize: 12,
    color: '#DF5268',
  },

  rodape: {
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
  },

  textoRodape: {
    fontSize: 10,
    color: '#777',
  },

});