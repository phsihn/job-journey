import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import JobFormContainer from '../job_form/job_form_container';

// material ui
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AddIcon from '@material-ui/icons/Add';
import NotInterestedIcon from '@material-ui/icons/NotInterested';
import IconButton from '@material-ui/core/IconButton';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';

const styles = (theme) => ({
	root: {
		display: 'flex',
	},
	categoryTitle: {
		...theme.typography.button,
		backgroundColor: 'yellow',
		marginTop: theme.spacing(1),
		marginBottom: theme.spacing(1),
	},
	cardCategoryTitle: {
		marginTop: theme.spacing(1),
		marginBottom: theme.spacing(1),
	},
	cardContent: {
		textAlign: 'center',
	},
});

class JobBoard extends Component {
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
			<Grid container classesName={classes.root}>
				<Grid item xs={3}>
					<Card className={classes.cardCategoryTitle}>
						<CardContent className={classes.cardContent}>
							<Typography variant='h6'>Rejected</Typography>
							<JobFormContainer />
						</CardContent>
					</Card>
				</Grid>
				<Grid item xs={3}>
					hi
				</Grid>
				<Grid item xs={3}>
					hi
				</Grid>
				<Grid item xs={3}>
					hi
				</Grid>
			</Grid>
		);
	}
}

JobBoard.propTypes = {};

export default withStyles(styles)(JobBoard);
