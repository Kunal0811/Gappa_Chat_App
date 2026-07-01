import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import Avatar from '../components/Avatar';
import colors from '../theme/colors';
import { mockContacts } from '../data/mockData';

export default function StatusScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Status</Text>
      </View>

      <TouchableOpacity style={styles.myStatus}>
        <Avatar name="Kunal Auti" color={colors.primaryDark} size={56} />
        <View style={{ marginLeft: 14 }}>
          <Text style={styles.name}>My status</Text>
          <Text style={styles.sub}>Tap to add status update</Text>
        </View>
      </TouchableOpacity>

      <Text style={styles.sectionLabel}>Recent updates</Text>

      <FlatList
        data={mockContacts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.row}>
            <View style={[styles.ring, { borderColor: colors.primary }]}>
              <Avatar name={item.name} color={item.avatarColor} size={50} />
            </View>
            <View style={{ marginLeft: 14 }}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.sub}>Today, {`${8 + (item.id.charCodeAt(1) % 4)}:00 AM`}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.bg },
  header: { paddingHorizontal: 16, paddingVertical: 14, backgroundColor: colors.header },
  headerTitle: { fontSize: 22, fontWeight: '800', color: colors.primary },
  myStatus: { flexDirection: 'row', alignItems: 'center', padding: 16 },
  sectionLabel: { color: colors.primary, fontSize: 13, fontWeight: '700', paddingHorizontal: 16, paddingVertical: 8 },
  row: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 16, paddingVertical: 10 },
  ring: { borderWidth: 2, borderRadius: 27, padding: 2 },
  name: { color: colors.text, fontSize: 16, fontWeight: '600' },
  sub: { color: colors.textSecondary, fontSize: 13, marginTop: 2 },
});