import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  TextInput,
} from 'react-native';

type Book = {
  id: string;
  title: string;
  author: string;
  genre: string;
  available: boolean;
};

const BOOKS: Book[] = [
  { id: '1', title: 'O Pequeno Príncipe', author: 'Antoine de Saint-Exupéry', genre: 'Clássico', available: true },
  { id: '2', title: 'Dom Casmurro', author: 'Machado de Assis', genre: 'Romance', available: false },
  { id: '3', title: '1984', author: 'George Orwell', genre: 'Ficção', available: true },
  { id: '4', title: 'A Moreninha', author: 'Joaquim Manuel de Macedo', genre: 'Romance', available: true },
  { id: '5', title: 'Memórias Póstumas', author: 'Machado de Assis', genre: 'Clássico', available: false },
  { id: '6', title: 'O Alquimista', author: 'Paulo Coelho', genre: 'Aventura', available: true },
  { id: '7', title: 'Sapiens', author: 'Yuval Noah Harari', genre: 'Não-ficção', available: true },
  { id: '8', title: 'Harry Potter', author: 'J.K. Rowling', genre: 'Fantasia', available: false },
];

export default function BookCatalogScreen() {
  const [search, setSearch] = useState('');

  const filtered = BOOKS.filter(
    (b) =>
      b.title.toLowerCase().includes(search.toLowerCase()) ||
      b.author.toLowerCase().includes(search.toLowerCase())
  );

  const renderItem = ({ item }: { item: Book }) => (
    <View style={styles.card}>
      <View style={styles.cardLeft}>
        <Text style={styles.bookIcon}>📖</Text>
      </View>
      <View style={styles.cardBody}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.author}>{item.author}</Text>
        <Text style={styles.genre}>{item.genre}</Text>
      </View>
      <View style={[styles.badge, item.available ? styles.badgeAvailable : styles.badgeUnavailable]}>
        <Text style={styles.badgeText}>{item.available ? 'Disponível' : 'Emprestado'}</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>📚 Catálogo de Livros</Text>
        <Text style={styles.headerSub}>{BOOKS.length} títulos disponíveis</Text>
      </View>

      <TextInput
        style={styles.search}
        placeholder="Buscar por título ou autor..."
        placeholderTextColor="#999"
        value={search}
        onChangeText={setSearch}
      />

      <FlatList
        data={filtered}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
        ListEmptyComponent={<Text style={styles.empty}>Nenhum livro encontrado.</Text>}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F0E8',
  },
  header: {
    backgroundColor: '#4A3728',
    paddingVertical: 24,
    paddingHorizontal: 20,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#F5E6C8',
  },
  headerSub: {
    fontSize: 13,
    color: '#C4A882',
    marginTop: 4,
  },
  search: {
    margin: 16,
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 10,
    fontSize: 14,
    color: '#333',
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },
  list: {
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 14,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOpacity: 0.07,
    shadowRadius: 4,
    elevation: 2,
  },
  cardLeft: {
    marginRight: 12,
  },
  bookIcon: {
    fontSize: 28,
  },
  cardBody: {
    flex: 1,
  },
  title: {
    fontSize: 15,
    fontWeight: '700',
    color: '#2C1A0E',
  },
  author: {
    fontSize: 13,
    color: '#7A5C3E',
    marginTop: 2,
  },
  genre: {
    fontSize: 11,
    color: '#AAA',
    marginTop: 2,
  },
  badge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 20,
    marginLeft: 8,
  },
  badgeAvailable: {
    backgroundColor: '#D4EDDA',
  },
  badgeUnavailable: {
    backgroundColor: '#F8D7DA',
  },
  badgeText: {
    fontSize: 10,
    fontWeight: '600',
    color: '#333',
  },
  empty: {
    textAlign: 'center',
    color: '#999',
    marginTop: 40,
    fontSize: 14,
  },
});