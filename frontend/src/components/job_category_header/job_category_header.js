import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import JobFormContainer from '../job_form/job_form_container';

// material ui
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import Typography from '@material-ui/core/Typography';

const styles = (theme) => ({
	root: {
		display: 'flex',
	},
	card: { marginTop: theme.spacing(1), marginBottom: theme.spacing(1) },
	cardContent: {
		textAlign: 'center',
	},
});

class JobCategoryHeader extends Component {
	constructor(props) {
		super(props);

		this.state = {
			open: false,
		};
	}

	setModalOpen = () => {
		this.setState({ open: true });
	};

	setModalClose = () => {
		this.setState({ open: false });
	};

	getJobCountByCategory = (category) => {
		return this.props.jobs.filter((job) => job.status === category).length;
	};

	render() {
		const { classes } = this.props;
		return (
			<Card
				className={classes.card}
				style={{ borderColor: this.props.cardBorderColor }}
				variant='outlined'
			>
				<CardHeader
					avatar={this.props.avatar}
					title={
						<Typography>
							{this.props.title} ({this.getJobCountByCategory(this.props.title)}
							)
						</Typography>
					}
					action={
						<IconButton onClick={this.setModalOpen}>
							<AddIcon />
						</IconButton>
					}
				/>
				<JobFormContainer
					open={this.state.open}
					setModalClose={this.setModalClose}
					addOrEditOrView='add'
					_id=''
					company=''
					position=''
					location=''
					status={this.props.status}
					postUrl=''
					description=''
					notes=''
					contacts=''
				/>
			</Card>
		);
	}
}

JobCategoryHeader.propTypes = {};

export default withStyles(styles)(JobCategoryHeader);
