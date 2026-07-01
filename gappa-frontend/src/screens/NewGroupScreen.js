import React, { useState } from 'react';
import {
  View, Text, FlatList, TouchableOpacity, StyleSheet, SafeAreaView, TextInput,
} from 'react-native';
import Avatar from '../components/Avatar';
import colors from '../theme/colors';
import { mockContacts } from '../data/MockData';

export default function NewGroupScreen({ navigation }) {
  const [selected, setSelected] = useState([]);
  const [groupName, setGroupName] = useState('');
  const [step, setStep] = useState(1); // 1 = pick members, 2 = name group

  const toggle = (id) => {
    setSelected((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));
  };

  const createGroup = () => {
    // TODO: POST /groups once backend is wired
    navigation.popToTop();
  };

  if (step === 2) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => setStep(1)}>
            <Text style={styles.back}>←</Text>
          </TouchableOpacity>
          <Text style={styles.headerTitle}>New group</Text>
        </View>
        <View style={{ padding: 20 }}>
          <Text style={styles.sectionLabel}>{selected.length} members selected</Text>
          <TextInput
            style={styles.input}
            placeholder="Group name"
            placeholderTextColor={colors.textSecondary}
            value={groupName}
            onChangeText={setGroupName}
          />
        </View>
        <TouchableOpacity
          style={[styles.fab, !groupName && { opacity: 0.4 }]}
          disabled={!groupName}
          onPress={createGroup}
        >
          <Text style={styles.fabIcon}>✓</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }

  const renderItem = ({ item }) => {
    const isSelected = selected.includes(item.id);
    return (
      <TouchableOpacity style={styles.row} onPress={() => toggle(item.id)}>
        <Avatar name={item.name} color={item.avatarColor} />
        <View style={{ marginLeft: 14, flex: 1 }}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.phone}>{item.phone}</Text>
        </View>
        <View style={[styles.checkbox, isSelected && styles.checkboxChecked]}>
          {isSelected && <Text style={{ color: '#0B141A', fontWeight: '700' }}>✓</Text>}
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.back}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Add group members</Text>
      </View>

      <FlatList
        data={mockContacts}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />

      <TouchableOpacity
        style={[styles.fab, selected.length === 0 && { opacity: 0.4 }]}
        disabled={selected.length === 0}
        onPress={() => setStep(2)}
      >
        <Text style={styles.fabIcon}>→</Text>
      </TouchableOpacity>
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
  sectionLabel: { color: colors.textSecondary, fontSize: 13, marginBottom: 14 },
  row: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 16, paddingVertical: 10 },
  name: { color: colors.text, fontSize: 16, fontWeight: '600' },
  phone: { color: colors.textSecondary, fontSize: 13, marginTop: 2 },
  separator: { height: 1, backgroundColor: colors.border, marginLeft: 80 },
  checkbox: {
    width: 24, height: 24, borderRadius: 12, borderWidth: 2, borderColor: colors.textSecondary,
    alignItems: 'center', justifyContent: 'center',
  },
  checkboxChecked: { backgroundColor: colors.primary, borderColor: colors.primary },
  input: {
    backgroundColor: colors.inputBg, borderRadius: 10, paddingHorizontal: 16, paddingVertical: 14,
    color: colors.text, fontSize: 16, borderWidth: 1, borderColor: colors.border,
  },
  fab: {
    position: 'absolute', right: 20, bottom: 24, width: 56, height: 56, borderRadius: 28,
    backgroundColor: colors.primary, alignItems: 'center', justifyContent: 'center',
  },
  fabIcon: { fontSize: 22, color: '#0B141A', fontWeight: '700' },
});