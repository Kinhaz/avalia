import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import BookCatalogScreen from './components/BookCatalogScreen';
import FlowerCatalogScreen from './components/FlowerCatalogScreen';

type Tab = 'books' | 'flowers';

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>('books');

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {activeTab === 'books' ? <BookCatalogScreen /> : <FlowerCatalogScreen />}
      </View>

      <View style={styles.tabBar}>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'books' && styles.tabActive]}
          onPress={() => setActiveTab('books')}
        >
          <Text style={styles.tabIcon}>📚</Text>
          <Text style={[styles.tabLabel, activeTab === 'books' && styles.tabLabelActive]}>
            Livros
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.tab, activeTab === 'flowers' && styles.tabActive]}
          onPress={() => setActiveTab('flowers')}
        >
          <Text style={styles.tabIcon}>🌸</Text>
          <Text style={[styles.tabLabel, activeTab === 'flowers' && styles.tabLabelActive]}>
            Flores
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F0E8',
  },
  content: {
    flex: 1,
  },
  tabBar: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#E8E0D5',
    paddingBottom: 8,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 8,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
  },
  tabActive: {
    borderTopWidth: 2,
    borderTopColor: '#C2185B',
  },
  tabIcon: {
    fontSize: 22,
  },
  tabLabel: {
    fontSize: 12,
    color: '#AAA',
    marginTop: 2,
    fontWeight: '500',
  },
  tabLabelActive: {
    color: '#C2185B',
    fontWeight: '700',
  },
});