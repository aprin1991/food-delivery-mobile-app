import { Image, Text, TouchableOpacity, View } from 'react-native';
import * as Icon from 'react-native-feather';
import { themeColors } from '../../theme';
import { useDispatch, useSelector } from 'react-redux';
import {
  addToBasket,
  removeFromBasket,
  selectBasketItemsById,
} from '../../redux/features/basketSlice';

export default function DishRow({ dish }) {
  const { image, name: title, description, price } = dish;
  const dispatch = useDispatch();
  const basketItems = useSelector((state) =>
    selectBasketItemsById(state, dish.id)
  );

  const handleIncrease = () => {
    dispatch(addToBasket({ ...dish }));
  };
  const handleDecrease = () => {
    dispatch(removeFromBasket({ id: dish.id }));
  };

  return (
    <View className='flex-row items-center bg-white p-3 rounded-3xl shadow-2xl mb-3 mx-2'>
      <Image
        className='rounded-3xl'
        style={{ height: 100, width: 100 }}
        source={image}
      />
      <View className='flex flex-1 space-y-3'>
        <View className='pl-3'>
          <Text className='text-xl'>{title}</Text>
          <Text className='text-gray-700'>{description}</Text>
        </View>
        <View className='flex-row pl-3 justify-between items-center'>
          <Text className='text-gray-700 text-lg font-bold'>${price}</Text>
          <View className='flex-row items-center'>
            <TouchableOpacity
              onPress={handleDecrease}
              disabled={!basketItems.length}
              className='p-1 rounded-full'
              style={{ backgroundColor: themeColors.bgColor(1) }}
            >
              <Icon.Minus
                strokeWidth={2}
                height={20}
                width={20}
                stroke='white'
              />
            </TouchableOpacity>
            <Text className='px-3'>{basketItems.length}</Text>

            <TouchableOpacity
              onPress={handleIncrease}
              className='p-1 rounded-full'
              style={{ backgroundColor: themeColors.bgColor(1) }}
            >
              <Icon.Plus
                strokeWidth={2}
                height={20}
                width={20}
                stroke='white'
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
