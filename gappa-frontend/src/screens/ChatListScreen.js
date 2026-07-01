import React, { useState } from 'react';
import {
  View, Text, FlatList, TouchableOpacity, StyleSheet,
  SafeAreaView, StatusBar, TextInput,
} from 'react-native';
import Avatar from '../components/Avatar';
import colors from '../theme/colors';
import { mockChats } from '../data/mockData';

export default function ChatListScreen({ navigation }) {
  const [search, setSearch] = useState('');

  const filtered = mockChats.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.row}
      onPress={() => navigation.navigate('Chat', { chatId: item.id, contactName: item.name, isGroup: item.isGroup })}
    >
      <Avatar name={item.name} color={item.avatarColor} isGroup={item.isGroup} />
      <View style={styles.rowText}>
        <View style={styles.rowTop}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={[styles.time, item.unread > 0 && { color: colors.primary }]}>{item.time}</Text>
        </View>
        <View style={styles.rowBottom}>
          <Text style={styles.lastMessage} numberOfLines={1}>{item.lastMessage}</Text>
          {item.unread > 0 && (
            <View style={styles.badge}>
              <Text style={styles.badgeText}>{item.unread}</Text>
            </View>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={colors.header} />

      <View style={styles.header}>
        <Text style={styles.headerTitle}>गप्पा</Text>
        <View style={styles.headerIcons}>
          <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
            <Text style={styles.icon}>👤</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.searchWrap}>
        <TextInput
          style={styles.search}
          placeholder="Search chats"
          placeholderTextColor={colors.textSecondary}
          value={search}
          onChangeText={setSearch}
        />
      </View>

      <FlatList
        data={filtered}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />

      <TouchableOpacity style={styles.fab} onPress={() => navigation.navigate('NewChat')}>
        <Text style={styles.fabIcon}>💬</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.bg },
  header: {
    flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
    paddingHorizontal: 16, paddingVertical: 14, backgroundColor: colors.header,
  },
  headerTitle: { fontSize: 22, fontWeight: '800', color: colors.primary },
  headerIcons: { flexDirection: 'row', gap: 16 },
  icon: { fontSize: 20 },
  searchWrap: { paddingHorizontal: 16, paddingVertical: 10 },
  search: {
    backgroundColor: colors.inputBg, borderRadius: 20, paddingHorizontal: 16,
    paddingVertical: 9, color: colors.text, fontSize: 14, borderWidth: 1, borderColor: colors.border,
  },
  row: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 16, paddingVertical: 12 },
  rowText: { flex: 1, marginLeft: 14 },
  rowTop: { flexDirection: 'row', justifyContent: 'space-between' },
  name: { color: colors.text, fontSize: 16, fontWeight: '600' },
  time: { color: colors.textSecondary, fontSize: 12 },
  rowBottom: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 4, alignItems: 'center' },
  lastMessage: { color: colors.textSecondary, fontSize: 14, flex: 1, marginRight: 8 },
  badge: {
    backgroundColor: colors.primary, borderRadius: 10, minWidth: 20, height: 20,
    alignItems: 'center', justifyContent: 'center', paddingHorizontal: 5,
  },
  badgeText: { color: '#0B141A', fontSize: 12, fontWeight: '700' },
  separator: { height: 1, backgroundColor: colors.border, marginLeft: 80 },
  fab: {
    position: 'absolute', right: 20, bottom: 24, width: 56, height: 56, borderRadius: 28,
    backgroundColor: colors.primary, alignItems: 'center', justifyContent: 'center',
    shadowColor: '#000', shadowOpacity: 0.3, shadowRadius: 6, elevation: 6,
  },
  fabIcon: { fontSize: 24 },
});