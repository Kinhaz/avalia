import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from 'react-native';

type Flower = {
  id: string;
  name: string;
  species: string;
  color: string;
  price: string;
  emoji: string;
  inStock: boolean;
};

const FLOWERS: Flower[] = [
  { id: '1', name: 'Rosa Vermelha', species: 'Rosa gallica', color: 'Vermelha', price: 'R$ 8,00', emoji: '🌹', inStock: true },
  { id: '2', name: 'Girassol', species: 'Helianthus annuus', color: 'Amarelo', price: 'R$ 5,00', emoji: '🌻', inStock: true },
  { id: '3', name: 'Tulipa', species: 'Tulipa gesneriana', color: 'Roxa', price: 'R$ 12,00', emoji: '🌷', inStock: false },
  { id: '4', name: 'Margarida', species: 'Bellis perennis', color: 'Branca', price: 'R$ 4,00', emoji: '🌼', inStock: true },
  { id: '5', name: 'Orquídea', species: 'Orchidaceae', color: 'Rosa', price: 'R$ 35,00', emoji: '🪷', inStock: true },
  { id: '6', name: 'Lavanda', species: 'Lavandula', color: 'Lilás', price: 'R$ 10,00', emoji: '💜', inStock: false },
  { id: '7', name: 'Hibisco', species: 'Hibiscus rosa-sinensis', color: 'Laranja', price: 'R$ 6,00', emoji: '🌺', inStock: true },
  { id: '8', name: 'Lírio', species: 'Lilium candidum', color: 'Branco', price: 'R$ 15,00', emoji: '⚘', inStock: true },
];

export default function FlowerCatalogScreen() {
  const [search, setSearch] = useState('');

  const filtered = FLOWERS.filter(
    (f) =>
      f.name.toLowerCase().includes(search.toLowerCase()) ||
      f.color.toLowerCase().includes(search.toLowerCase())
  );

  const renderItem = ({ item }: { item: Flower }) => (
    <View style={styles.card}>
      <View style={styles.emojiBox}>
        <Text style={styles.emoji}>{item.emoji}</Text>
      </View>
      <View style={styles.cardBody}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.species}>{item.species}</Text>
        <View style={styles.row}>
          <Text style={styles.color}>🎨 {item.color}</Text>
          <Text style={styles.price}>{item.price}</Text>
        </View>
      </View>
      <View style={[styles.badge, item.inStock ? styles.badgeIn : styles.badgeOut]}>
        <Text style={styles.badgeText}>{item.inStock ? 'Em estoque' : 'Esgotado'}</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>🌸 Floricultura</Text>
        <Text style={styles.headerSub}>{FLOWERS.length} variedades disponíveis</Text>
      </View>

      <TextInput
        style={styles.search}
        placeholder="Buscar por nome ou cor..."
        placeholderTextColor="#999"
        value={search}
        onChangeText={setSearch}
      />

      <FlatList
        data={filtered}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
        ListEmptyComponent={<Text style={styles.empty}>Nenhuma flor encontrada.</Text>}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF5F8',
  },
  header: {
    backgroundColor: '#C2185B',
    paddingVertical: 24,
    paddingHorizontal: 20,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#FFF',
  },
  headerSub: {
    fontSize: 13,
    color: '#F8BBD0',
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
  emojiBox: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#FCE4EC',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  emoji: {
    fontSize: 26,
  },
  cardBody: {
    flex: 1,
  },
  name: {
    fontSize: 15,
    fontWeight: '700',
    color: '#880E4F',
  },
  species: {
    fontSize: 11,
    color: '#AAA',
    fontStyle: 'italic',
    marginTop: 2,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
    gap: 10,
  },
  color: {
    fontSize: 12,
    color: '#666',
  },
  price: {
    fontSize: 13,
    fontWeight: '700',
    color: '#C2185B',
  },
  badge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 20,
    marginLeft: 8,
  },
  badgeIn: {
    backgroundColor: '#D4EDDA',
  },
  badgeOut: {
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