import React from 'react';
import { withStyles } from '@material-ui/core/styles';

// material ui
import clsx from 'clsx';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { mainListItems } from './list_items';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const drawerWidth = 240;
// material ui style
const styles = (theme) => ({
	root: {
		display: 'flex',
	},
	toolbar: {
		paddingRight: 24, // keep right padding when drawer closed
	},
	toolbarIcon: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'flex-end',
		padding: '0 8px',
		...theme.mixins.toolbar,
	},
	appBar: {
		zIndex: theme.zIndex.drawer + 1,
		transition: theme.transitions.create(['width', 'margin'], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
	},
	appBarShift: {
		marginLeft: drawerWidth,
		width: `calc(100% - ${drawerWidth}px)`,
		transition: theme.transitions.create(['width', 'margin'], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
		}),
	},
	menuButton: {
		marginRight: 36,
	},
	menuButtonHidden: {
		display: 'none',
	},
	title: {
		flexGrow: 1,
	},
	drawerPaper: {
		position: 'relative',
		whiteSpace: 'nowrap',
		width: drawerWidth,
		transition: theme.transitions.create('width', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
		}),
	},
	drawerPaperClose: {
		overflowX: 'hidden',
		transition: theme.transitions.create('width', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
		width: theme.spacing(7),
		[theme.breakpoints.up('sm')]: {
			width: theme.spacing(9),
		},
	},
	appBarSpacer: theme.mixins.toolbar,
	content: {
		flexGrow: 1,
		height: '100vh',
		overflow: 'auto',
	},
	container: {
		paddingTop: theme.spacing(4),
		paddingBottom: theme.spacing(4),
	},
	paper: {
		padding: theme.spacing(2),
		display: 'flex',
		overflow: 'auto',
		flexDirection: 'column',
	},
	fixedHeight: {
		height: 240,
	},
});

class NavBar extends React.Component {
	constructor(props) {
		super(props);
		this.logoutUser = this.logoutUser.bind(this);
		this.getLinks = this.getLinks.bind(this);
		this.state = {
			open: true,
		};
	}

	logoutUser(e) {
		e.preventDefault();
		this.props.logout();
	}

	setOpen = (open) => {
		this.setState({ open: open });
	};

	handleDrawerOpen = () => {
		this.setOpen(true);
	};

	handleDrawerClose = () => {
		this.setOpen(false);
	};

	getLinks() {
		const { classes } = this.props;
		if (this.props.loggedIn) {
			return (
				<div className={classes.root}>
					<CssBaseline />
					<AppBar
						position='absolute'
						className={clsx(
							classes.appBar,
							this.state.open && classes.appBarShift
						)}
					>
						<Toolbar className={classes.toolbar}>
							<IconButton
								edge='start'
								color='inherit'
								aria-label='open drawer'
								onClick={this.handleDrawerOpen}
								className={clsx(
									classes.menuButton,
									this.state.open && classes.menuButtonHidden
								)}
							>
								<MenuIcon />
							</IconButton>
							<Typography
								component='h1'
								variant='h6'
								color='inherit'
								noWrap
								className={classes.title}
							>
								Job Board
							</Typography>
						</Toolbar>
					</AppBar>
					<Drawer
						variant='permanent'
						classes={{
							paper: clsx(
								classes.drawerPaper,
								!this.state.open && classes.drawerPaperClose
							),
						}}
						open={this.state.open}
					>
						<div className={classes.toolbarIcon}>
							<IconButton onClick={this.handleDrawerClose}>
								<ChevronLeftIcon />
							</IconButton>
						</div>
						<Divider />
						<List>{mainListItems}</List>
						<Divider />
						<List>
							<ListSubheader inset>Actions</ListSubheader>
							<ListItem button onClick={this.logoutUser}>
								<ListItemIcon>
									<ExitToAppIcon />
								</ListItemIcon>
								<ListItemText primary='Sign out' />
							</ListItem>
						</List>
					</Drawer>
				</div>
			);
		} else {
			return <React.Fragment />;
		}
	}

	render() {
		return <React.Fragment>{this.getLinks()}</React.Fragment>;
	}
}
export default withStyles(styles)(NavBar);
