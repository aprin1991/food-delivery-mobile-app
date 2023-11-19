import React, { useState } from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { categories } from "../../constants";

const Categories = () => {
  const [activeCategory, setActiveCategory] = useState();
  return (
    <View className="mt-4">
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="overflow-visible"
        contentContainerStyle={{ paddingHorizontal: 15 }}
      >
        {categories.map((category) => {
          const isActive = category.id === activeCategory;
          const btnClass = isActive ? "bg-gray-600" : "bg-gray-200";
          const textClass = isActive
            ? "font-semibold text-gray-800"
            : "text-gray-500";
          return (
            <View
              key={category.id}
              className="flex justify-center items-center mr-6"
            >
              <TouchableOpacity
                onPress={() => setActiveCategory(category.id)}
                className={`p-1 rounded-full shadow bg-gray-200 items-center ${btnClass}`}
              >
                <Image
                  source={category.image}
                  style={{ width: 45, height: 45 }}
                />
              </TouchableOpacity>
              <Text className={`text-sm ${textClass}`}>{category.name}</Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Categories;
