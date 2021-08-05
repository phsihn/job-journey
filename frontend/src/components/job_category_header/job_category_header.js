import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import JobFormContainer from '../job_form/job_form_container';

// material ui
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';

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

	render() {
		const { classes } = this.props;
		return (
			<Card className={classes.cardCategoryTitle}>
				<CardHeader
					title={this.props.title}
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
					status=''
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
