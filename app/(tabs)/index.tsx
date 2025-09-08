import useTheme from '@/hooks/useTheme';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

const Index = () => {
  const { toggleDarkMode } = useTheme();
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 44 }}>Hi There</Text>
      <TouchableOpacity style={{
        backgroundColor: 'blue',
        borderRadius: 10,
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
        paddingVertical: 10,
      }} onPress={toggleDarkMode}>
        <Text style={{
          fontSize: 20,
          color: 'white',
          padding: 10,
        }}>Toggle the Mode</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Index