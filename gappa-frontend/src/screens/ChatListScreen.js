import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList, TouchableOpacity } from 'react-native';

export default function ChatListScreen({ navigation }) {
  // Mock contacts for testing the UI
  const contacts = [
    { id: '1', name: 'Leeladhar', lastMessage: 'Sent an encrypted payload', time: '12:45 PM' },
    { id: '2', name: 'Ritesh', lastMessage: 'Are the WebSockets running?', time: '11:20 AM' },
  ];

  const renderContact = ({ item }) => (
    <TouchableOpacity 
      style={styles.contactItem}
      onPress={() => navigation.navigate('Chat', { contactName: item.name })}
    >
      <View style={styles.avatar}>
        <Text style={styles.avatarText}>{item.name.charAt(0)}</Text>
      </View>
      <View style={styles.contactInfo}>
        <Text style={styles.contactName}>{item.name}</Text>
        <Text style={styles.lastMessage} numberOfLines={1}>{item.lastMessage}</Text>
      </View>
      <Text style={styles.timeText}>{item.time}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>गप्पा Chats</Text>
      </View>
      
      <FlatList
        data={contacts}
        keyExtractor={item => item.id}
        renderItem={renderContact}
        contentContainerStyle={styles.listContainer}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#121212' },
  header: { padding: 20, borderBottomWidth: 1, borderBottomColor: '#333', backgroundColor: '#1A1A1A' },
  title: { color: '#00E676', fontSize: 28, fontWeight: 'bold' },
  listContainer: { padding: 10 },
  contactItem: { flexDirection: 'row', alignItems: 'center', padding: 15, borderBottomWidth: 1, borderBottomColor: '#2C2C2C' },
  avatar: { width: 50, height: 50, borderRadius: 25, backgroundColor: '#007A3E', justifyContent: 'center', alignItems: 'center', marginRight: 15 },
  avatarText: { color: '#FFF', fontSize: 20, fontWeight: 'bold' },
  contactInfo: { flex: 1 },
  contactName: { color: '#FFF', fontSize: 18, fontWeight: 'bold', marginBottom: 4 },
  lastMessage: { color: '#A0A0A0', fontSize: 14 },
  timeText: { color: '#666', fontSize: 12, paddingLeft: 10 },
});