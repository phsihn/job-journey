import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import JobCardContainer from '../job_card/job_card_container';
import JobCategoryHeader from '../job_category_header/job_category_header';

// material ui
import Grid from '@material-ui/core/Grid';

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

	UNSAFE_componentWillMount() {
		this.props.fetchUserJobs(this.props.currentUser.id);
		console.log(this.props);
	}

	UNSAFE_componentWillReceiveProps(nextProps) {
		this.setState({ jobs: nextProps.jobs });
		console.log(nextProps.jobs);
	}

	rednerCategoryHeaders = () => {};

	renderJobs = () => {
		return this.state.jobs.map((job, index) => (
			<JobCardContainer
				key={index}
				_id={job._id}
				company={job.company}
				position={job.position}
				location={job.location}
				status={job.status}
				postUrl={job.postUrl}
				description={job.description}
				notes={job.notes}
				contacts={job.contacts}
			/>
		));
	};

	renderJobsByStatus = (status) => {
		const statusJobArray = this.state.jobs.filter(
			(job) => job.status === status
		);

		return statusJobArray.map((job, index) => (
			<JobCardContainer
				key={index}
				_id={job._id}
				company={job.company}
				position={job.position}
				location={job.location}
				status={job.status}
				postUrl={job.postUrl}
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
					<JobCategoryHeader title='Applied' />
					{this.renderJobsByStatus('Applied')}
				</Grid>
				<Grid item xs={3}>
					<JobCategoryHeader title='Interview' />
					{this.renderJobsByStatus('Interview')}
				</Grid>
				<Grid item xs={3}>
					<JobCategoryHeader title='Offer' />
					{this.renderJobsByStatus('Offer')}
				</Grid>
				<Grid item xs={3}>
					<JobCategoryHeader title='Rejected' />
					{this.renderJobsByStatus('Rejected')}
				</Grid>
			</Grid>
		);
	}
}

JobBoard.propTypes = {};

export default withStyles(styles)(JobBoard);
