import React, { useEffect } from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, Tabs } from "expo-router";
import { Pressable, View } from "react-native";

import Colors from "@/constants/Colors";
import { useColorScheme } from "@/components/useColorScheme";
import { useClientOnlyValue } from "@/components/useClientOnlyValue";
import Fontisto from "@expo/vector-icons/Fontisto";
import { useDispatch, useSelector } from "react-redux";
import { setLanguage } from "@/redux/actions/languageActions";
import * as Localization from "expo-localization";

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const dispatch = useDispatch();
  const colorScheme = useColorScheme();
  const language = useSelector((state: any) => state.language.language);

  useEffect(() => {
    if (!language) {
      const deviceLanguage = Localization.locale.split("-")[0]; // Get language code
      dispatch(setLanguage(deviceLanguage));
    }
  }, [language]);

  return (
    <Tabs
      initialRouteName="home"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        headerShown: useClientOnlyValue(true, true),
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          headerShown: useClientOnlyValue(false, true),
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="home" color={color} size={size} />
          ),
          headerLeft: () => (
            <View style={{ flexDirection: "row" }}>
              <Link href="/home" asChild>
                <Pressable>
                  {({ pressed }) => (
                    <FontAwesome
                      name="home"
                      size={25}
                      color={Colors[colorScheme ?? "light"].text}
                      style={{
                        marginRight: 15,
                        opacity: pressed ? 0.5 : 1,
                        paddingLeft: 5,
                      }}
                    />
                  )}
                </Pressable>
              </Link>
            </View>
          ),
          headerRight: () => (
            <View style={{ flexDirection: "row" }}>
              <Link href="/settings" asChild>
                <Pressable>
                  {({ pressed }) => (
                    <FontAwesome
                      name="info-circle"
                      size={25}
                      color={Colors[colorScheme ?? "light"].text}
                      style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                    />
                  )}
                </Pressable>
              </Link>
              <Link href="/settings" asChild>
                <Pressable>
                  {({ pressed }) => (
                    <FontAwesome
                      name="info-circle"
                      size={25}
                      color={Colors[colorScheme ?? "light"].text}
                      style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                    />
                  )}
                </Pressable>
              </Link>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="study"
        options={{
          title: "Study",
          headerShown: useClientOnlyValue(false, false),
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="book" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="practice"
        options={{
          title: "Practice Exam",
          headerShown: useClientOnlyValue(false, false),
          tabBarIcon: ({ color, size }) => (
            <Fontisto name="test-tube" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="history"
        options={{
          title: "Previous Exams",
          headerShown: useClientOnlyValue(false, false),
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="history" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          headerShown: useClientOnlyValue(false, false),
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="gear" color={color} size={size} />
          ),
        }}
      />
    </Tabs>
  );
}
