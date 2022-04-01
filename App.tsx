import {createAppContainer} from "react-navigation";
import {createStackNavigator} from "react-navigation-stack";
import SearchScreen from "./src/screens/SearchScreen";
import ResultScreen from "./src/screens/ResultScreen";
import { Routes } from "./src/constatns/routes";

const navigator = createStackNavigator({
  [Routes.Search]: SearchScreen,
  [Routes.Result]: ResultScreen,
}, {
  initialRouteName: 'Search',
  defaultNavigationOptions: {
    title: 'Business Search'
  }
})

export default createAppContainer(navigator)