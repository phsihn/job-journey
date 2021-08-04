import React from 'react';
import JobFormContainer from '../job_form/job_form_container';

// material ui
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import VisibilityIcon from '@material-ui/icons/Visibility';

const styles = (theme) => ({
	root: {},
	card: {
		//backgroundColor: theme.palette.secondary.light,
		backgroundColor: 'rgba(229, 115, 115, .4)',
		marginTop: theme.spacing(1),
		marginBottom: theme.spacing(1),
	},
	companyName: {
		...theme.typography.button,
		//backgroundColor: 'rgba(229, 115, 115, .2)',
		//padding: theme.spacing(1),
		fontWeight: 800,
	},
	pos: {
		fontWeight: 600,
		marginBottom: 12,
	},
	textBackground: {
		...theme.typography.button,
		backgroundColor: theme.palette.background.paper,
		padding: theme.spacing(1),
	},
	deleteButton: {
		marginLeft: 'auto',
	},
});

class JobCard extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			open: false,
		};
	}

	setModalOpen = () => {
		this.setState({ open: true });
		console.log(this.props);
	};

	setModalClose = () => {
		this.setState({ open: false });
	};
	deleteJob = () => {
		console.log(this.props.id);
		this.props.removeJob(this.props.id);
	};

	render() {
		const { classes } = this.props;

		return (
			<Card raised className={classes.card} variant='outlined'>
				<CardHeader
					avatar={
						<Avatar aria-label='Company'>{this.props.company.charAt(0)}</Avatar>
					}
					title={this.props.company}
					subheader={this.props.position}
				></CardHeader>
				<CardActions disableSpacing>
					<IconButton onClick={this.setModalOpen}>
						<VisibilityIcon fontSize='small' />
					</IconButton>
					<IconButton onClick={this.setModalOpen}>
						<EditIcon fontSize='small' />
					</IconButton>
					<IconButton onClick={this.deleteJob} className={classes.deleteButton}>
						<DeleteIcon fontSize='small' />
					</IconButton>
				</CardActions>

				<JobFormContainer
					open={this.state.open}
					setModalClose={this.setModalClose}
					id={this.props.id}
					company={this.props.company}
					position={this.props.position}
					location={this.props.location}
					status={this.props.status}
					postUrl={this.props.postUrl}
					description={this.props.description}
					notes={this.props.notes}
					contacts={this.props.contacts}
					addOrEdit='edit'
				/>
			</Card>
		);
	}
}

export default withStyles(styles)(JobCard);
