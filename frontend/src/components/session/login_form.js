import React from 'react';
import { withRouter } from 'react-router-dom';

//material ui
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

// material ui style
const styles = (theme) => ({
	root: {
		flexGrow: 1,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		padding: theme.spacing(2),
	},
	submitButton: {
		padding: theme.spacing(1),
		marginTop: theme.spacing(2),
	},
	signupPaper: {
		textAlign: 'center',
		margin: theme.spacing(12),
		[theme.breakpoints.down('sm')]: {
			marginLeft: theme.spacing(2),
			marginRight: theme.spacing(2),
			marginTop: theme.spacing(10),
		},
	},
	signupTextField: {
		marginTop: theme.spacing(2),
	},
});
class LoginForm extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			email: '',
			password: '',
			errors: {},
		};

		this.handleSubmit = this.handleSubmit.bind(this);
		this.renderErrors = this.renderErrors.bind(this);
	}

	UNSAFE_componentWillReceiveProps(nextProps) {
		if (nextProps.currentUser === true) {
			this.props.history.push('/home');
		}

		this.setState({ errors: nextProps.errors });
	}

	update(field) {
		return (e) =>
			this.setState({
				[field]: e.currentTarget.value,
			});
	}

	handleSubmit(e) {
		e.preventDefault();

		let user = {
			email: this.state.email,
			password: this.state.password,
		};

		this.props.login(user);
	}

	renderErrors() {
		return (
			<ul>
				{Object.keys(this.state.errors).map((error, i) => (
					<li key={`error-${i}`}>{this.state.errors[error]}</li>
				))}
			</ul>
		);
	}

	render() {
		const { classes } = this.props;
		return (
			<Grid
				container
				direction='column'
				alignItems='center'
				justifyContent='center'
			>
				<Grid item xs={12} sm={6} lg={3}>
					<Paper className={classes.signupPaper} elevation={10}>
						<form onSubmit={this.handleSubmit} className={classes.root}>
							<div>
								<LockOpenIcon />
							</div>
							<div>
								<Typography variant='h5'>Login</Typography>
							</div>
							<TextField
								id='outlined-basic'
								label='Email'
								type='text'
								variant='outlined'
								value={this.state.email}
								onChange={this.update('email')}
								fullWidth
								required
								className={classes.signupTextField}
							/>

							<TextField
								id='outlined-basic'
								label='Password'
								type='password'
								variant='outlined'
								value={this.state.password}
								onChange={this.update('password')}
								fullWidth
								required
								className={classes.signupTextField}
							/>

							<Button
								type='submit'
								value='Submit'
								variant='contained'
								color='primary'
								fullWidth
								className={classes.submitButton}
							>
								Login
							</Button>
							{this.renderErrors()}
						</form>
					</Paper>
				</Grid>
			</Grid>
		);
	}
}

export default withRouter(withStyles(styles)(LoginForm));
