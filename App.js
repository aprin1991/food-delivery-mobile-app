import { NavigationContainer } from '@react-navigation/native';
import Navigation from './src/navigation';
import { store } from './src/redux/store';

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </Provider>
  );
}
