import React, { useState } from 'react';
import {
  View, Text, TextInput, TouchableOpacity, StyleSheet,
  SafeAreaView, KeyboardAvoidingView, Platform,
} from 'react-native';
import colors from '../theme/colors';

export default function LoginScreen({ navigation }) {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // TODO: wire to POST /auth/login once backend is ready
    navigation.replace('Main');
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={{ flex: 1, justifyContent: 'center' }}
      >
        <View style={styles.logoWrap}>
          <Text style={styles.logo}>गप्पा</Text>
          <Text style={styles.tagline}>Fast. Secure. Yours.</Text>
        </View>

        <View style={styles.form}>
          <Text style={styles.label}>Phone Number</Text>
          <TextInput
            style={styles.input}
            placeholder="+91 98765 43210"
            placeholderTextColor={colors.textSecondary}
            keyboardType="phone-pad"
            value={phone}
            onChangeText={setPhone}
          />

          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="••••••••"
            placeholderTextColor={colors.textSecondary}
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />

          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Log In</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Registration')}>
            <Text style={styles.link}>New here? Create an account</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.bg, paddingHorizontal: 24 },
  logoWrap: { alignItems: 'center', marginBottom: 48 },
  logo: { fontSize: 42, fontWeight: '800', color: colors.primary },
  tagline: { color: colors.textSecondary, marginTop: 6, fontSize: 14 },
  form: { gap: 4 },
  label: { color: colors.textSecondary, fontSize: 13, marginBottom: 6, marginTop: 14 },
  input: {
    backgroundColor: colors.inputBg,
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 14,
    color: colors.text,
    fontSize: 16,
    borderWidth: 1,
    borderColor: colors.border,
  },
  button: {
    backgroundColor: colors.primary,
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: 'center',
    marginTop: 28,
  },
  buttonText: { color: '#0B141A', fontSize: 16, fontWeight: '700' },
  link: { color: colors.primary, textAlign: 'center', marginTop: 20, fontSize: 14 },
});