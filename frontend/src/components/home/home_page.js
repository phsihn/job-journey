import React, { Component } from 'react';
import NavBarContainer from '../nav/navbar_container';
import { withStyles } from '@material-ui/core/styles';
import JobBoardContainer from '../job_board/job_board_container';

// material ui
import Container from '@material-ui/core/Container';

const styles = (theme) => ({
	root: {
		display: 'flex',
	},
	content: {
		flexGrow: 1,
		height: '100vh',
		overflow: 'auto',
	},
	appBarSpacer: theme.mixins.toolbar,
	container: {
		paddingTop: theme.spacing(8),
		paddingBottom: theme.spacing(8),
	},
});

class HomePage extends Component {
	render() {
		const { classes } = this.props;
		return (
			<div className={classes.root}>
				<NavBarContainer />
				<div className={classes.content}>
					<div className={classes.appBarSpacer}>
						<Container maxWidth='lg' className={classes.container}>
							<JobBoardContainer />
						</Container>
					</div>
				</div>
			</div>
		);
	}
}

HomePage.propTypes = {};

export default withStyles(styles)(HomePage);
