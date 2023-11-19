import { useNavigation, useRoute } from "@react-navigation/native";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import * as Icon from "react-native-feather";
import { ScrollView } from "react-native-gesture-handler";
import { themeColors } from "../theme";

const Restaurant = () => {
  const navigation = useNavigation();

  const { params } = useRoute();
  const {
    params: {
      id,
      title,
      imgUrl,
      rating,
      type,
      address,
      description,
      dishes,
      lng,
      lat,
    },
  } = useRoute();
  const item = params;
  return (
    <ScrollView>
      <View>
        <Image className="h-72 w-full" source={item.image} />
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          className="absolute top-14 left-4 bg-gray-50 p-2 rounded-full shadow"
        >
          <Icon.ArrowLeft strokeWidth={3} stroke={themeColors.bgColor(1)} />
        </TouchableOpacity>
      </View>
      <View
        style={{ borderTopLeftRadius: 40, borderTopRightRadius: 40 }}
        className="bg-white -mt-12 pt-6"
      >
        <View className="px-5">
          <Text className="text-3xl font-bold">{title}</Text>
          {/* copy this code from restaurant card */}
          <View className="flex-row space-x-2 my-1">
            <View className="flex-row items-center space-x-1">
              <Image
                source={require("../assets/images/fullStar.png")}
                className="h-4 w-4"
              />
              <Text className="text-xs">
                <Text className="text-green-700">{rating}</Text>
                <Text className="text-gray-700"> (4.6k review)</Text> ·{" "}
                <Text className="font-semibold text-gray-700">{type}</Text>
              </Text>
            </View>
            <View className="flex-row items-center space-x-1">
              <Icon.MapPin color="gray" width={15} height={15} />
              <Text className="text-gray-800 text-xs"> Nearby · {address}</Text>
            </View>
          </View>
          <Text className="text-gray-500 mt-2">{description}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default Restaurant;
