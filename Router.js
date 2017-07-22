import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import FacebookLoginForm from './screens/FacebookLoginForm';
import CourseList from './screens/CourseList';
import CourseDetails from './screens/CourseDetails';
import ScorecardForm from './screens/ScorecardForm';
import GamePlay from './screens/GamePlay';
import WelcomeScreen from './screens/WelcomeScreen';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 60 }}>
      <Scene key="auth">
        <Scene
          initial
          key="welcome"
          component={WelcomeScreen}
        />
        <Scene
          key="facebookLogin"
          component={FacebookLoginForm}
        />
      </Scene>

      <Scene key="main">
        <Scene
          key="courseList"
          component={CourseList}
          title="Nearby Courses"
        />
        <Scene
          key="courseDetails"
          component={CourseDetails}
          title="Course Details"
        />
        <Scene
          key="scorecardForm"
          component={ScorecardForm}
          title="New Scorecard"
        />
        <Scene
          key="gamePlay"
          component={GamePlay}
          title="Game"
        />
      </Scene>
    </Router>
  );
};

export default RouterComponent;
