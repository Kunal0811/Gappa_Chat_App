import React, { useState } from 'react';
import {
  StyleSheet, Text, View, TextInput, TouchableOpacity,
  FlatList, SafeAreaView, KeyboardAvoidingView, Platform,
} from 'react-native';
import Avatar from '../components/Avatar';
import colors from '../theme/colors';
import { mockMessages } from '../data/MockData';

export default function ChatScreen({ route, navigation }) {
  const { contactName, chatId, isGroup } = route.params;

  const [messages, setMessages] = useState(mockMessages[chatId] || []);
  const [inputText, setInputText] = useState('');

  const sendMessage = () => {
    if (inputText.trim() === '') return;

    const newMessage = {
      id: Date.now().toString(),
      text: inputText,
      sender: 'me',
      status: 'sent',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    // TODO: send over WebSocket once backend is wired
    setMessages((prev) => [...prev, newMessage]);
    setInputText('');
  };

  const renderMessage = ({ item }) => {
    const isMe = item.sender === 'me';
    return (
      <View style={[styles.messageBubble, isMe ? styles.myMessage : styles.theirMessage]}>
        <Text style={styles.messageText}>{item.text}</Text>
        <View style={styles.metaRow}>
          <Text style={styles.timeText}>{item.timestamp}</Text>
          {isMe && (
            <Text style={[styles.tick, item.status === 'read' && styles.tickRead]}>
              {item.status === 'read' ? '✓✓' : item.status === 'delivered' ? '✓✓' : '✓'}
            </Text>
          )}
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Text style={styles.backButtonText}>←</Text>
        </TouchableOpacity>
        <Avatar name={contactName} size={36} isGroup={isGroup} />
        <View style={{ marginLeft: 10, flex: 1 }}>
          <Text style={styles.headerTitle}>{contactName}</Text>
          <Text style={styles.headerSubtitle}>{isGroup ? 'tap for group info' : 'online'}</Text>
        </View>
        <Text style={styles.headerIcon}>📞</Text>
        <Text style={[styles.headerIcon, { marginLeft: 18 }]}>⋮</Text>
      </View>

      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 90 : 0}
      >
        <FlatList
          data={messages}
          keyExtractor={(item) => item.id}
          renderItem={renderMessage}
          contentContainerStyle={styles.messageList}
        />

        <View style={styles.inputBar}>
          <Text style={styles.attachIcon}>📎</Text>
          <TextInput
            style={styles.input}
            placeholder="Message"
            placeholderTextColor={colors.textSecondary}
            value={inputText}
            onChangeText={setInputText}
            multiline
          />
          {inputText.trim() === '' ? (
            <Text style={styles.attachIcon}>🎤</Text>
          ) : (
            <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
              <Text style={styles.sendIcon}>➤</Text>
            </TouchableOpacity>
          )}
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.bg },
  header: {
    flexDirection: 'row', alignItems: 'center', backgroundColor: colors.header,
    paddingHorizontal: 12, paddingVertical: 10,
  },
  backButton: { marginRight: 6 },
  backButtonText: { color: colors.text, fontSize: 22 },
  headerTitle: { color: colors.text, fontSize: 16, fontWeight: '700' },
  headerSubtitle: { color: colors.textSecondary, fontSize: 12, marginTop: 2 },
  headerIcon: { color: colors.text, fontSize: 18 },
  messageList: { padding: 14, paddingBottom: 8 },
  messageBubble: {
    maxWidth: '78%', borderRadius: 10, paddingHorizontal: 12, paddingVertical: 8, marginBottom: 8,
  },
  myMessage: { backgroundColor: colors.bubbleMe, alignSelf: 'flex-end', borderTopRightRadius: 2 },
  theirMessage: { backgroundColor: colors.bubbleThem, alignSelf: 'flex-start', borderTopLeftRadius: 2 },
  messageText: { color: colors.text, fontSize: 15 },
  metaRow: { flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', marginTop: 4, gap: 4 },
  timeText: { color: colors.textSecondary, fontSize: 11 },
  tick: { color: colors.textSecondary, fontSize: 12 },
  tickRead: { color: '#53BDEB' },
  inputBar: {
    flexDirection: 'row', alignItems: 'flex-end', paddingHorizontal: 10, paddingVertical: 8,
    backgroundColor: colors.header, gap: 10,
  },
  attachIcon: { fontSize: 20, paddingBottom: 10 },
  input: {
    flex: 1, backgroundColor: colors.inputBg, borderRadius: 20, paddingHorizontal: 16,
    paddingVertical: 10, color: colors.text, fontSize: 15, maxHeight: 100,
  },
  sendButton: {
    backgroundColor: colors.primary, width: 40, height: 40, borderRadius: 20,
    alignItems: 'center', justifyContent: 'center',
  },
  sendIcon: { color: '#0B141A', fontSize: 16, fontWeight: '700' },
});