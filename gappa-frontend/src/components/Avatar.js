import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Avatar({ name, color = '#25D366', size = 50, isGroup = false }) {
  const initials = (name || '?')
    .split(' ')
    .map((w) => w[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();

  return (
    <View
      style={[
        styles.circle,
        { backgroundColor: color, width: size, height: size, borderRadius: size / 2 },
      ]}
    >
      <Text style={[styles.text, { fontSize: size * 0.38 }]}>
        {isGroup ? '👥' : initials}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  circle: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    fontWeight: '700',
  },
});