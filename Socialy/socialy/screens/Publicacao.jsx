import React from 'react';
import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  ScrollView,
  SafeAreaView,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';

export default function Publicacao() {
  return (
    <SafeAreaView style={styles.container}>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.conteudo}
      >

        {/* CABEÇALHO */}
        <View style={styles.header}>

          <Pressable>
            <Ionicons
              name="chevron-back"
              size={32}
              color="#A9365D"
            />
          </Pressable>

          <Text style={styles.titulo}>
            Publicação
          </Text>

          <Pressable>
            <Ionicons
              name="share-social"
              size={25}
              color="#A9365D"
            />
          </Pressable>

        </View>


        {/* USUÁRIO */}
        <View style={styles.usuario}>

          <View style={styles.avatar} />

          <View>
            <Text style={styles.nome}>
              Milena Mares
            </Text>

            <Text style={styles.horario}>
              hoje às 14:09
            </Text>
          </View>

        </View>


        {/* TEXTO DA PUBLICAÇÃO */}
        <Text style={styles.textoPublicacao}>
          Viajando com minha família!!
        </Text>


        {/* IMAGEM DA PUBLICAÇÃO */}
        <View style={styles.imagemPublicacao} />


        {/* AÇÕES */}
        <View style={styles.acoes}>

          <View style={styles.acoesEsquerda}>

            {/* CURTIDA */}
            <Pressable style={styles.acao}>
              <Ionicons
                name="heart"
                size={24}
                color="#A9365D"
              />

              <Text style={styles.numero}>
                23
              </Text>
            </Pressable>


            {/* COMENTÁRIOS */}
            <Pressable style={styles.acao}>
              <Ionicons
                name="chatbubble-outline"
                size={22}
                color="#A9365D"
              />

              <Text style={styles.numero}>
                4
              </Text>
            </Pressable>

          </View>


          {/* SALVAR */}
          <Pressable>
            <Ionicons
              name="bookmark-outline"
              size={25}
              color="#A9365D"
            />
          </Pressable>

        </View>


        {/* TÍTULO DOS COMENTÁRIOS */}
        <Text style={styles.tituloComentarios}>
          Comentarios
        </Text>


        {/* COMENTÁRIO */}
        <View style={styles.comentario}>

          <View style={styles.avatarComentario} />

          <View style={styles.conteudoComentario}>

            <Text style={styles.nomeComentario}>
              Milena Mares
            </Text>

            <Text style={styles.horarioComentario}>
              hoje às 14:09
            </Text>

            <Text style={styles.textoComentario}>
              Ficou incrivel continua assim!!
            </Text>

          </View>

        </View>


        {/* CAMPO PARA COMENTAR */}
        <TextInput
          style={styles.inputComentario}
          placeholder="Adicione um comentario :"
          placeholderTextColor="#555"
        />

      </ScrollView>


      {/* MENU INFERIOR */}
      <View style={styles.menu}>

        {/* INÍCIO */}
        <Pressable style={styles.itemMenu}>

          <Ionicons
            name="home-outline"
            size={25}
            color="#A9365D"
          />

          <Text style={styles.textoMenu}>
            Início
          </Text>

        </Pressable>


        {/* BUSCAR */}
        <Pressable style={styles.itemMenu}>

          <Ionicons
            name="search-outline"
            size={27}
            color="#A9365D"
          />

          <Text style={styles.textoMenu}>
            Buscar
          </Text>

        </Pressable>


        {/* BOTÃO + */}
        <Pressable style={styles.botaoMais}>

          <Ionicons
            name="add"
            size={32}
            color="#FFFFFF"
          />

        </Pressable>


        {/* NOTIFICAÇÕES */}
        <Pressable style={styles.itemMenu}>

          <Ionicons
            name="notifications-outline"
            size={26}
            color="#A9365D"
          />

          <Text style={styles.textoMenu}>
            Notificações
          </Text>

        </Pressable>


        {/* PERFIL */}
        <Pressable style={styles.itemMenu}>

          <Ionicons
            name="person"
            size={24}
            color="#A9365D"
          />

          <Text style={styles.textoMenu}>
            perfil
          </Text>

        </Pressable>

      </View>

    </SafeAreaView>
  );
}


const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#FFE8E8',
  },

  conteudo: {
    paddingBottom: 20,
  },


  /* CABEÇALHO */

  header: {
    height: 70,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },

  titulo: {
    fontSize: 21,
    fontWeight: 'bold',
    color: '#111111',
  },


  /* USUÁRIO */

  usuario: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 22,
    marginTop: 8,
  },

  avatar: {
    width: 45,
    height: 45,
    borderRadius: 30,
    backgroundColor: '#D3D3D3',
    marginRight: 17,
  },

  nome: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#111111',
  },

  horario: {
    fontSize: 10,
    color: '#111111',
    marginTop: 3,
  },


  /* PUBLICAÇÃO */

  textoPublicacao: {
    fontSize: 16,
    color: '#111111',
    marginHorizontal: 20,
    marginTop: 20,
    marginBottom: 8,
  },

  imagemPublicacao: {
    height: 136,
    marginHorizontal: 20,
    borderRadius: 7,
    backgroundColor: '#D3D3D3',
  },


  /* AÇÕES */

  acoes: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginTop: 8,
  },

  acoesEsquerda: {
    flexDirection: 'row',
    gap: 20,
  },

  acao: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 7,
  },

  numero: {
    fontSize: 15,
    color: '#111111',
  },


  /* COMENTÁRIOS */

  tituloComentarios: {
    fontSize: 16,
    color: '#111111',
    marginHorizontal: 20,
    marginTop: 12,
    marginBottom: 10,
  },

  comentario: {
    flexDirection: 'row',
    backgroundColor: '#CBA8B1',
    marginHorizontal: 20,
    borderRadius: 7,
    padding: 8,
    minHeight: 88,
  },

  avatarComentario: {
    width: 45,
    height: 45,
    borderRadius: 30,
    backgroundColor: '#AE355D',
    marginRight: 12,
  },

  conteudoComentario: {
    flex: 1,
  },

  nomeComentario: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#111111',
  },

  horarioComentario: {
    fontSize: 9,
    color: '#111111',
    marginTop: 2,
  },

  textoComentario: {
    fontSize: 13,
    fontWeight: '500',
    color: '#111111',
    marginTop: 13,
  },


  /* CAMPO DE COMENTÁRIO */

  inputComentario: {
    backgroundColor: '#FFFFFF',
    height: 48,
    marginHorizontal: 85,
    marginTop: 32,
    borderRadius: 7,
    paddingHorizontal: 10,
    fontSize: 12,
    marginBottom: 10,
  },


  /* MENU INFERIOR */

  menu: {
    height: 64,
    backgroundColor: '#FFE8E8',
    borderTopWidth: 1,
    borderTopColor: '#F05A78',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },

  itemMenu: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 55,
  },

  textoMenu: {
    fontSize: 10,
    color: '#333333',
    marginTop: 2,
  },

  botaoMais: {
    width: 40,
    height: 40,
    borderRadius: 25,
    backgroundColor: '#F13E69',
    alignItems: 'center',
    justifyContent: 'center',
  },

});