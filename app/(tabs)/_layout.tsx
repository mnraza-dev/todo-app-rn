import useTheme from '@/hooks/useTheme';
import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import React from 'react';

export default function TabLayout() {
    const {colors} = useTheme();
    return (
        <Tabs screenOptions={{
            tabBarActiveTintColor: colors.primary,
            tabBarInactiveTintColor: colors.textMuted,
            tabBarStyle: {
                height: 90,
                paddingTop: 10,
                paddingBottom: 30,
                backgroundColor: colors.surface,
                borderTopWidth: 1,
                borderTopColor: colors.border
            },
            tabBarLabelStyle: {
                fontSize: 12,
                fontWeight: '600'
            },
            headerShown: false,

        }}>
            <Tabs.Screen
                name="index"
                options={{
                    title: "Todos",
                    tabBarIcon: ({ color, size }) =>

                        <Ionicons name="flash-outline" size={size} color={color} />

                }} />
            <Tabs.Screen
                name="settings"
                options={{
                    title: "Settings",
                    tabBarIcon: ({ color, size }) =>
                        <Ionicons name="settings" size={size} color={color} />

                }} />

        </Tabs>
    )
}