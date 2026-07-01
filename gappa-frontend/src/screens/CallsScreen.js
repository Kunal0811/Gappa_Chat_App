import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import Avatar from '../components/Avatar';
import colors from '../theme/colors';
import { mockContacts } from '../data/MockData';

const mockCalls = mockContacts.slice(0, 3).map((c, i) => ({
  ...c,
  type: i === 1 ? 'missed' : 'outgoing',
  time: i === 0 ? 'Today, 11:20 AM' : i === 1 ? 'Yesterday, 6:05 PM' : 'Yesterday, 2:40 PM',
  isVideo: i === 2,
}));

export default function CallsScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Calls</Text>
      </View>

      <FlatList
        data={mockCalls}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.row}>
            <Avatar name={item.name} color={item.avatarColor} />
            <View style={{ marginLeft: 14, flex: 1 }}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={[styles.sub, item.type === 'missed' && { color: colors.danger }]}>
                {item.type === 'missed' ? '↙ Missed' : '↗ Outgoing'} · {item.time}
              </Text>
            </View>
            <Text style={styles.icon}>{item.isVideo ? '🎥' : '📞'}</Text>
          </TouchableOpacity>
        )}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.bg },
  header: { paddingHorizontal: 16, paddingVertical: 14, backgroundColor: colors.header },
  headerTitle: { fontSize: 22, fontWeight: '800', color: colors.primary },
  row: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 16, paddingVertical: 12 },
  name: { color: colors.text, fontSize: 16, fontWeight: '600' },
  sub: { color: colors.textSecondary, fontSize: 13, marginTop: 2 },
  icon: { fontSize: 20, color: colors.primary },
  separator: { height: 1, backgroundColor: colors.border, marginLeft: 80 },
});