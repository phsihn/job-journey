import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import JobCardContainer from '../job_card/job_card_container';
import JobCategoryHeaderContainer from '../job_category_header/job_category_header_container';

// material ui
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import DoneIcon from '@material-ui/icons/Done';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import CancelPresentationIcon from '@material-ui/icons/CancelPresentation';

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
	scrollableColumn: {
		maxHeight: '80vh',
		overflow: 'auto',
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
	}

	UNSAFE_componentWillReceiveProps(nextProps) {
		this.setState({ jobs: nextProps.jobs }, () => {
			console.log(this.state);
		});
	}

	renderJobsByStatus = (status) => {
		const statusJobArray = this.state.jobs.filter(
			(job) => job.status === status
		);

		let cardColor = '';

		if (status === 'Applied') {
			cardColor = 'rgba(30, 136, 229, .8)';
		} else if (status === 'Interview') {
			cardColor = 'rgba(57, 73, 171, .9)';
		} else if (status === 'Offer') {
			cardColor = 'rgba(67, 160, 71, .9)';
		} else if (status === 'Rejected') {
			cardColor = 'rgba(229, 57, 53, .85)';
		}

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
				cardColor={cardColor}
			/>
		));
	};

	render() {
		const { classes } = this.props;
		return (
			<Grid container spacing={2} className={classes.root}>
				<Grid item xs={3}>
					<JobCategoryHeaderContainer
						title='Applied'
						cardBorderColor='rgba(30, 136, 229)'
						avatar={<DoneIcon />}
						status='Applied'
					/>
					<Box className={classes.scrollableColumn}>
						{this.renderJobsByStatus('Applied')}
					</Box>
				</Grid>
				<Grid item xs={3}>
					<JobCategoryHeaderContainer
						title='Interview'
						cardBorderColor='rgba(57, 73, 171)'
						avatar={<EventAvailableIcon />}
						status='Interview'
					/>
					<Box className={classes.scrollableColumn}>
						{this.renderJobsByStatus('Interview')}
					</Box>
				</Grid>
				<Grid item xs={3}>
					<JobCategoryHeaderContainer
						title='Offer'
						cardBorderColor='rgba(67, 160, 71)'
						avatar={<MailOutlineIcon />}
						status='Offer'
					/>
					<Box className={classes.scrollableColumn}>
						{this.renderJobsByStatus('Offer')}
					</Box>
				</Grid>
				<Grid item xs={3}>
					<JobCategoryHeaderContainer
						title='Rejected'
						cardBorderColor='rgba(229, 57, 53)'
						avatar={<CancelPresentationIcon />}
						status='Rejected'
					/>
					<Box className={classes.scrollableColumn}>
						{this.renderJobsByStatus('Rejected')}
					</Box>
				</Grid>
			</Grid>
		);
	}
}

JobBoard.propTypes = {};

export default withStyles(styles)(JobBoard);
