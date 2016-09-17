import {
  createRouter,
  NavigationProvider,
  StackNavigation,
} from '@exponent/ex-navigation';

import IconSetList from './IconSetList';
import IconList from './IconList';

const Router = createRouter(() => ({
  IconSetList: () => IconSetList,
  IconList: () => IconList,
}));

export default Router;
