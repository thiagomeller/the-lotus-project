import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import CartIcon from "../assets/cart.svg";
import HomeIcon from "../assets/home.svg";
import Home from "../screens/Home";
import Cart from "../screens/Cart";
import Product from "../screens/Product";
import { theme } from "../styles/theme";

const Tab = createBottomTabNavigator();

export function AppRoutes() {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false, tabBarShowLabel: false }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: () => <HomeIcon />,
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarBadge: 3,
          tabBarIcon: () => <CartIcon color={theme.colors.primaryPurple} />,
        }}
      />
    </Tab.Navigator>
  );
}
