import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, Text, TouchableWithoutFeedback, View } from "react-native";
import * as Icon from "react-native-feather";
import { themeColors } from "../../theme";

export default function ResturantCard({ item }) {
  const navigation = useNavigation();
  const handleCardPressed = () => {
    navigation.navigate("Restaurant", { ...item });
  };
  return (
    <TouchableWithoutFeedback onPress={handleCardPressed}>
      <View
        style={{
          shadowColor: themeColors.bgColor(0.2),
          shadowRadius: 7,
          elevation: 4,
          shadowOffset: { width: 2, height: 4 },
          borderColor: themeColors.bgColor(0.2),
          borderWidth: 1,
        }}
        className="mr-6 bg-white rounded-3xl shadow-lg"
      >
        <Image className="h-36 w-64 rounded-t-3xl" source={item.image} />

        <View className="px-3 pb-4 space-y-2">
          <Text className="text-lg font-bold pt-2">{item.name}</Text>
          <View className="flex-row items-center space-x-1">
            <Image
              source={require("../../assets/images/fullStar.png")}
              className="h-4 w-4"
            />
            <Text className="text-xs">
              {/* {item.title} */}
              <Text className="text-green-700">{item.start}</Text>
              <Text className="text-gray-700">
                {" "}
                ({item.reviews} review)
              </Text> ·{" "}
              <Text className="font-semibold text-gray-700">{item.type}</Text>
            </Text>
          </View>
          <View className="flex-row items-center space-x-1">
            <Icon.MapPin color="gray" width={15} height={15} />
            <Text className="text-gray-700 text-xs">
              {" "}
              Nearby · {item.address}
            </Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
