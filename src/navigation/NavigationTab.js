import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';

const TabNavigation = createBottomTabNavigator();

const NavigationTab = () => {
    return (
        <TabNavigation.Navigator>
            <TabNavigation.Screen name="Home" component={HomeScreen} />
            <TabNavigation.Screen name="Settings" component={SettingsScreen} />
        </TabNavigation.Navigator>
    )
}
export default NavigationTab;