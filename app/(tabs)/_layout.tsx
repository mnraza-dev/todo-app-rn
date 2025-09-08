import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import React from 'react';
import { Text } from 'react-native';

export default function TabLayout() {
    return (
        <Tabs screenOptions={{
            tabBarActiveTintColor: 'green',
            tabBarInactiveTintColor: 'gray',
            tabBarStyle: { 
                height: 100, 
                paddingTop: 10, 
                paddingBottom: 30, 
                backgroundColor: '#08062aff', 
                borderTopWidth: 1, 
                borderTopColor: 'yellow' 
            },
            tabBarLabelStyle: { fontSize: 12 , fontWeight: '600' },
            headerShown: false,

        }}>
            <Tabs.Screen name="index" options={{
                title: "Todos", tabBarIcon: ({ color, size }) => <Text>
                    <Ionicons name="flash-outline" size={size} color={color} />
                </Text>
            }} />
            <Tabs.Screen name="settings" options={{
                title: "Settings", tabBarIcon: ({ color, size }) => <Text>
                    <Ionicons name="settings" size={size} color={color} />
                </Text>
            }} />

        </Tabs>
    )
}