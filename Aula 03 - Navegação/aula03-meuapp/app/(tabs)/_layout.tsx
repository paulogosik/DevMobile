import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function TabsLayout() {
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: "#a275cc",
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: "",
                    headerShown: false,
                    tabBarIcon: ({ focused, color }) => (
                        <Ionicons 
                        name={focused ? "home" : "home-outline"}
                        color={color}
                        size={24} />
                    )
                }}
            />
            <Tabs.Screen
                name="config"
                options={{
                    title: "",
                    headerShown: false,
                    tabBarIcon: ({ focused, color }) => (
                        <Ionicons 
                        name={focused ? "settings" : "settings-outline"}
                        color={color} 
                        size={24} />
                    )
                }}
            />
        </Tabs>
    );
}