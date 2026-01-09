import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import React from 'react';

const TabsLayout = () => {
    return (
        <Tabs screenOptions={{
            tabBarActiveTintColor: 'green',
        }}>
            <Tabs.Screen
                name='(stack)'
                options={{
                    title: 'Stack',
                    tabBarIcon: ({ color }) => (
                        <Ionicons size={28} name='person-add-outline' color={color} />
                    ),
                }}
            />

            <Tabs.Screen
                name='favorites/index'
                options={{
                    title: 'Favorites Screen',
                    tabBarIcon: ({ color }) => (
                        <Ionicons size={28} name='star-outline' color={color} />
                    ),
                }}
            />
        </Tabs>
    )
}

export default TabsLayout