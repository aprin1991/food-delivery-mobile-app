import React from "react";
import { Text, TextInput, View } from "react-native";
import * as Icon from "react-native-feather";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import Categories from "../components/categories";
import FeatureRow from "../components/featureRow";
import { featured } from "../constants";
import { themeColors } from "../theme";
const HomeScreen = () => {
  return (
    <SafeAreaView className="bg-white">
      {/* Search Bar */}
      <View className="flex-row items-center space-x-2 px-4 pb-2 ">
        <View className="flex-row flex-1 items-center p-3 rounded-full border border-gray-300">
          <Icon.Search height="25" width="25" stroke="gray" />
          <TextInput
            placeholder="Resturants"
            className="ml-2 flex-1"
            keyboardType="default"
          />
          <View className="flex-row items-center space-x-1 border-0 border-l-2 pl-2 border-l-gray-300">
            <Icon.MapPin height="20" width="20" stroke="gray" />
            <Text className="text-gray-600">New York, NYC</Text>
          </View>
        </View>
        <View
          style={{ backgroundColor: themeColors.bgColor(1) }}
          className="p-3 rounded-full"
        >
          <Icon.Sliders
            height={20}
            width={20}
            strokeWidth="2.5"
            stroke="white"
          />
        </View>
      </View>

      {/* Main part*/}
      <ScrollView
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 60,
        }}
      >
        <Categories />

        {/* Featured*/}
        <View className="mt-5">
          {[featured, featured, featured].map((feature, index) => (
            <FeatureRow
              key={index}
              title={feature.title}
              restaurants={feature.restaurants}
              description={feature.description}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
