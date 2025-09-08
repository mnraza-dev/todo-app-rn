import { Tabs } from 'expo-router'
import React from 'react'
import { Text } from 'react-native'

export default function TabLayout() {
    return (
        <Tabs screenOptions={{
            headerShown: false
        }}>
            <Tabs.Screen name="index" options={{ title: "Home", tabBarIcon: () => <Text>🏠</Text> }} />
            <Tabs.Screen name="settings" options={{ title: "Settings", tabBarIcon: () => <Text>⚙️</Text> }} />

        </Tabs>
    )
}