import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';

import MainPage from './main/main_page';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import HomePageContainer from './home/home_page_container';
import CssBaseline from '@material-ui/core/CssBaseline';

const App = () => (
	<CssBaseline>
		<Switch>
			<AuthRoute exact path='/' component={MainPage} />
			<AuthRoute exact path='/login' component={LoginFormContainer} />
			<AuthRoute exact path='/signup' component={SignupFormContainer} />

			<ProtectedRoute exact path='/home' component={HomePageContainer} />
		</Switch>
	</CssBaseline>
);

export default App;
