import React from 'react';
import {
  View, Text, FlatList, TouchableOpacity, StyleSheet, SafeAreaView,
} from 'react-native';
import Avatar from '../components/Avatar';
import colors from '../theme/colors';
import { mockContacts } from '../data/MockData';

export default function NewChatScreen({ navigation }) {
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.row}
      onPress={() => navigation.replace('Chat', { chatId: item.id, contactName: item.name })}
    >
      <Avatar name={item.name} color={item.avatarColor} />
      <View style={{ marginLeft: 14 }}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.phone}>{item.phone}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.back}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Select contact</Text>
      </View>

      <TouchableOpacity style={styles.newGroupRow} onPress={() => navigation.navigate('NewGroup')}>
        <View style={styles.groupIconWrap}>
          <Text style={{ fontSize: 18 }}>👥</Text>
        </View>
        <Text style={styles.newGroupText}>New group</Text>
      </TouchableOpacity>

      <Text style={styles.sectionLabel}>Contacts on गप्पा</Text>

      <FlatList
        data={mockContacts}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.bg },
  header: {
    flexDirection: 'row', alignItems: 'center', gap: 16,
    paddingHorizontal: 16, paddingVertical: 14, backgroundColor: colors.header,
  },
  back: { color: colors.text, fontSize: 22 },
  headerTitle: { color: colors.text, fontSize: 18, fontWeight: '700' },
  newGroupRow: { flexDirection: 'row', alignItems: 'center', padding: 16 },
  groupIconWrap: {
    width: 48, height: 48, borderRadius: 24, backgroundColor: colors.surfaceAlt,
    alignItems: 'center', justifyContent: 'center',
  },
  newGroupText: { color: colors.text, fontSize: 16, marginLeft: 14, fontWeight: '600' },
  sectionLabel: { color: colors.primary, fontSize: 13, fontWeight: '700', paddingHorizontal: 16, paddingVertical: 8 },
  row: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 16, paddingVertical: 10 },
  name: { color: colors.text, fontSize: 16, fontWeight: '600' },
  phone: { color: colors.textSecondary, fontSize: 13, marginTop: 2 },
  separator: { height: 1, backgroundColor: colors.border, marginLeft: 80 },
});