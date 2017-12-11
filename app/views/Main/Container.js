import Expo from "expo";
import { compose, withState, lifecycle } from 'recompose';


import Component from './Component';

const enhance = compose(
  withState('isLoading', 'setIsLoading', true),
  lifecycle({
    async componentWillMount() {
      await Expo.Font.loadAsync({
        Roboto: require("native-base/Fonts/Roboto.ttf"),
        Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
        Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf")
      });

      this.props.setIsLoading(false);
    }
  }),
);

export default enhance(Component);
