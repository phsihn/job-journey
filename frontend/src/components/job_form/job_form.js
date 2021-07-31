import React, { Component } from 'react';
import PropTypes from 'prop-types';

// material ui
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import LockOpen from '@material-ui/icons/LockOpen';
import TextField from '@material-ui/core/TextField';

// material ui style
const styles = (theme) => ({
	root: {
		display: 'flex',
		flexWrap: 'wrap',
	},
});

class JobForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			open: false,
		};
	}

	componentWillMount() {}

	componentDidMount() {}

	componentWillReceiveProps(nextProps) {}

	componentWillUpdate(nextProps, nextState) {}

	componentDidUpdate(prevProps, prevState) {}

	componentWillUnmount() {}

	setOpen = (open) => {
		this.setState({ open: open });
	};

	handleClickOpen = () => {
		this.setOpen(true);
	};

	handleClose = () => {
		this.setOpen(false);
	};

	render() {
		return (
			<div>
				<IconButton onClick={this.handleClickOpen}>
					<AddIcon />
				</IconButton>
				<Dialog open={this.state.open} onClose={this.handleClose}>
					<DialogTitle>Dialog title</DialogTitle>
					<DialogContentText>
						<TextField
							id='outlined-required'
							label='Required'
							variant='outlined'
						/>
						<TextField
							id='outlined-required'
							label='Required'
							variant='outlined'
						/>
						<TextField
							id='outlined-required'
							label='Required'
							variant='outlined'
						/>
					</DialogContentText>
					<DialogActions>
						<Button onClick={this.handleClose} color='primary'>
							Cancel
						</Button>
						<Button onClick={this.handleClose} color='primary'>
							Subscribe
						</Button>
					</DialogActions>
				</Dialog>
			</div>
		);
	}
}

JobForm.propTypes = {};

export default JobForm;
