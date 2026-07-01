import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import Avatar from '../components/Avatar';
import colors from '../theme/colors';

const SETTINGS = [
  { icon: '🔑', label: 'Account', sub: 'Security notifications, change number' },
  { icon: '🔒', label: 'Privacy', sub: 'Block contacts, last seen, read receipts' },
  { icon: '💬', label: 'Chats', sub: 'Theme, wallpaper, chat history' },
  { icon: '🔔', label: 'Notifications', sub: 'Message, group & call tones' },
  { icon: '💾', label: 'Storage and data', sub: 'Network usage, auto-download' },
  { icon: '❓', label: 'Help', sub: 'FAQ, contact us, terms' },
];

export default function ProfileScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.back}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Settings</Text>
      </View>

      <ScrollView>
        <View style={styles.profileRow}>
          <Avatar name="Kunal Auti" color={colors.primaryDark} size={64} />
          <View style={{ marginLeft: 16 }}>
            <Text style={styles.name}>Kunal Auti</Text>
            <Text style={styles.status}>Hey there! I am using गप्पा.</Text>
          </View>
        </View>

        {SETTINGS.map((item) => (
          <TouchableOpacity key={item.label} style={styles.row}>
            <Text style={styles.rowIcon}>{item.icon}</Text>
            <View style={{ marginLeft: 16 }}>
              <Text style={styles.rowLabel}>{item.label}</Text>
              <Text style={styles.rowSub}>{item.sub}</Text>
            </View>
          </TouchableOpacity>
        ))}

        <TouchableOpacity
          style={[styles.row, { marginTop: 10 }]}
          onPress={() => navigation.reset({ index: 0, routes: [{ name: 'Login' }] })}
        >
          <Text style={[styles.rowLabel, { color: colors.danger }]}>Log out</Text>
        </TouchableOpacity>
      </ScrollView>
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
  profileRow: { flexDirection: 'row', alignItems: 'center', padding: 20, borderBottomWidth: 1, borderBottomColor: colors.border },
  name: { color: colors.text, fontSize: 20, fontWeight: '700' },
  status: { color: colors.textSecondary, fontSize: 14, marginTop: 4 },
  row: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 20, paddingVertical: 14 },
  rowIcon: { fontSize: 20, width: 24, textAlign: 'center' },
  rowLabel: { color: colors.text, fontSize: 16, fontWeight: '600' },
  rowSub: { color: colors.textSecondary, fontSize: 13, marginTop: 2 },
});