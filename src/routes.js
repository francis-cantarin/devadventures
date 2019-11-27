import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './pages/Main';
import Quests from './pages/Quests';
import StoryTelling from './pages/StoryTelling';
import Challenge from './pages/Challenge';
import Conclusion from './pages/Conclusion';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Main,
      Quests,
      StoryTelling,
      Challenge,
      Conclusion,
    },
    {
      headerLayoutPreset: 'center',
      headerBackTitleVisible: false,
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: '#000',
        },
        headerTintColor: '#FFF',
      },
    }
  )
);

export default Routes;
