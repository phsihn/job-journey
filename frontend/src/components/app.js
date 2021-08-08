import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';

import MainPage from './main/main_page';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import HomePage from './home/home_page';
import AboutPage from './about/about_page';

const App = () => (
	<Switch>
		<AuthRoute exact path='/' component={MainPage} />
		<AuthRoute exact path='/login' component={LoginFormContainer} />
		<AuthRoute exact path='/signup' component={SignupFormContainer} />

		<ProtectedRoute exact path='/home' component={HomePage} />
		<ProtectedRoute exact path='/about' component={AboutPage} />
	</Switch>
);

export default App;
