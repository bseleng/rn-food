import {createAppContainer} from "react-navigation";
import {createStackNavigator} from "react-navigation-stack";
import SearchScreen from "./src/screens/SearchScreen";
import ResultScreen from "./src/screens/ResultScreen";

export enum Routes {
  Search = 'Search',
  Result = 'Result',
}

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