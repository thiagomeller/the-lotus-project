import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

import CartIcon from "../assets/cart.svg";
import HomeIcon from "../assets/home.svg";
import ProfileIcon from "../assets/profile.svg";
import NewProduct from "../screens/NewProduct";
import Home from "../screens/Home";
import Cart from "../screens/Cart";
import Product from "../screens/Product";
import Profile from "../screens/Profile";
import { theme } from "../styles/theme";
import Login from '../screens/Login';
import Register from '../screens/Register';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export function AppRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{ headerShown: false }}
      />
      
      <Stack.Screen
        name="HomeTab"
        component={Tabs}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Product"
        component={Product}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="NewProduct"
        component={NewProduct}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export function Tabs() {
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
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          tabBarIcon: () => <ProfileIcon color={theme.colors.primaryPurple} />,
        }}
      />
    </Tab.Navigator>
  );
}
