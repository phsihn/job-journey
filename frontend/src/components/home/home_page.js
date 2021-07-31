import React, { Component } from 'react';
import NavBarContainer from '../nav/navbar_container';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import JobBoard from '../job_board/job_board';

// material ui
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

const styles = (theme) => ({
	root: {
		display: 'flex',
	},
});

class HomePage extends Component {
	constructor(props) {
		super(props);
	}

	componentWillMount() {}

	componentDidMount() {}

	componentWillReceiveProps(nextProps) {}

	shouldComponentUpdate(nextProps, nextState) {}

	componentWillUpdate(nextProps, nextState) {}

	componentDidUpdate(prevProps, prevState) {}

	componentWillUnmount() {}

	render() {
		const { classes } = this.props;
		return (
			<Grid
				container
				direction='row'
				alignItems='center'
				justifyContent='center'
				classesName={classes.root}
				spacing={2}
			>
				<Grid item xs={2}>
					<div>left</div>
				</Grid>
				<Grid item xs={10}>
					<JobBoard />
				</Grid>
			</Grid>
		);
	}
}

HomePage.propTypes = {};

export default withStyles(styles)(HomePage);
