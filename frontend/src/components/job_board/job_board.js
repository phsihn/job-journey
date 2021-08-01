import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import JobFormContainer from '../job_form/job_form_container';
import JobCard from '../job_card/job_card';

// material ui
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

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

		this.state = {
			jobs: [],
		};
	}

	componentWillMount() {
		console.log(this.props.currentUser);
		this.props.fetchUserJobs(this.props.currentUser.id);
	}

	UNSAFE_componentWillReceiveProps(newState) {
		console.log(newState.jobs);
		this.setState({ jobs: newState.jobs });
	}

	renderJobs = () => {
		return this.state.jobs.map((job) => (
			<JobCard
				key={job._id}
				company={job.company}
				position={job.position}
				location={job.location}
				status={job.status}
				description={job.description}
				notes={job.notes}
				contacts={job.contacts}
			/>
		));
	};

	render() {
		const { classes } = this.props;
		return (
			<Grid container spacing={2} className={classes.root}>
				<Grid item xs={3}>
					<Card className={classes.cardCategoryTitle}>
						<CardContent className={classes.cardContent}>
							<JobFormContainer />
						</CardContent>
					</Card>
					{this.renderJobs()}
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
