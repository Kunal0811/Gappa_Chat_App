import React, { useState } from 'react';
import {
  StyleSheet, Text, View, TextInput, TouchableOpacity,
  ActivityIndicator, SafeAreaView, StatusBar, ScrollView
} from 'react-native';

export default function RegistrationScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [phone, setPhone] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const handleRegister = async () => {
    if (!username || !phone) {
      alert('Please enter a username and phone number.');
      return;
    }

    setIsGenerating(true);

    // Simulate Key Generation & API call
    setTimeout(() => {
      setIsGenerating(false);
      // Once keys are generated and saved, navigate to the main app!
      navigation.replace('ChatList'); 
    }, 1500);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#121212" />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <Text style={styles.logoText}>गप्पा</Text>
          <Text style={styles.subtitle}>Secure. Private. Fast.</Text>
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.label}>Username</Text>
          <TextInput
            style={styles.input}
            placeholder="Choose a username"
            placeholderTextColor="#666"
            value={username}
            onChangeText={setUsername}
          />

          <Text style={styles.label}>Phone Number</Text>
          <TextInput
            style={styles.input}
            placeholder="+91 98765 43210"
            placeholderTextColor="#666"
            keyboardType="phone-pad"
            value={phone}
            onChangeText={setPhone}
          />

          <TouchableOpacity
            style={[styles.button, isGenerating && styles.buttonDisabled]}
            onPress={handleRegister}
            disabled={isGenerating}
          >
            {isGenerating ? (
              <ActivityIndicator color="#121212" />
            ) : (
              <Text style={styles.buttonText}>Register securely</Text>
            )}
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#121212' },
  scrollContent: { flexGrow: 1, justifyContent: 'center', padding: 24 },
  header: { alignItems: 'center', marginBottom: 48 },
  logoText: { fontSize: 48, fontWeight: 'bold', color: '#00E676', marginBottom: 8 },
  subtitle: { fontSize: 16, color: '#A0A0A0', letterSpacing: 1 },
  formContainer: { width: '100%' },
  label: { color: '#E0E0E0', fontSize: 14, marginBottom: 8, fontWeight: '500' },
  input: { backgroundColor: '#1E1E1E', borderWidth: 1, borderColor: '#333', borderRadius: 12, color: '#FFF', padding: 16, fontSize: 16, marginBottom: 24 },
  button: { backgroundColor: '#00E676', borderRadius: 12, padding: 16, alignItems: 'center', marginTop: 8 },
  buttonDisabled: { backgroundColor: '#007A3E' },
  buttonText: { color: '#121212', fontSize: 16, fontWeight: 'bold' },
});