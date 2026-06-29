import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

export default function ChatListScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Chats</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.emptyText}>No encrypted messages yet.</Text>
        <Text style={styles.subText}>Sync your contacts to start chatting!</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#121212' },
  header: { padding: 20, borderBottomWidth: 1, borderBottomColor: '#333' },
  title: { color: '#FFF', fontSize: 28, fontWeight: 'bold' },
  content: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  emptyText: { color: '#A0A0A0', fontSize: 16, marginBottom: 8 },
  subText: { color: '#666', fontSize: 14 },
});