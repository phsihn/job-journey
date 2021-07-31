import React from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';

// material ui
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';

// material ui style
const styles = (theme) => ({
	root: {
		flexGrow: 1,
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		flexGrow: 1,
	},
});

class NavBar extends React.Component {
	constructor(props) {
		super(props);
		this.logoutUser = this.logoutUser.bind(this);
		this.getLinks = this.getLinks.bind(this);
	}

	logoutUser(e) {
		e.preventDefault();
		this.props.logout();
	}

	getLinks() {
		const { classes } = this.props;
		if (this.props.loggedIn) {
			return (
				<AppBar position='static'>
					<Toolbar>
						<Typography variant='h6' className={classes.title}>
							Title
						</Typography>
						<Button color='inherit' onClick={this.logoutUser}>
							Logout
						</Button>
					</Toolbar>
				</AppBar>
			);
		} else {
			return <React.Fragment />;
		}
	}

	render() {
		return <div>{this.getLinks()}</div>;
	}
}
export default withStyles(styles)(NavBar);
