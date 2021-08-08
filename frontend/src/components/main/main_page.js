import React from 'react';
import { Link } from 'react-router-dom';
import JobBoardImage from '../../assets/job_board_main.png';
import JobFormImage from '../../assets/job_form.png';
import JobViewImage from '../../assets/job_view.png';

// material ui
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import WorkIcon from '@material-ui/icons/Work';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

// material ui style
const styles = (theme) => ({
	icon: {
		marginRight: theme.spacing(2),
	},
	heroContent: {
		backgroundImage: `url('https://source.unsplash.com/kigHD-rVJzA/3000x2000')`,
		height: '500px',
		margin: 0,
		backgroundPosition: 'center',
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
		position: 'relative',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		color: '#fff',
		fontSize: '4rem',
		[theme.breakpoints.down('sm')]: {
			height: 300,
			fontSize: '3em',
		},
		padding: theme.spacing(8, 0, 6),
	},
	heroButtons: {
		marginTop: theme.spacing(4),
	},
	cardGrid: {
		paddingTop: theme.spacing(8),
		paddingBottom: theme.spacing(8),
	},
	card: {
		height: '100%',
		display: 'flex',
		flexDirection: 'column',
	},
	cardMedia: {
		paddingTop: '56.25%', // 16:9
	},
	cardContent: {
		flexGrow: 1,
	},
	footer: {
		backgroundColor: theme.palette.background.paper,
		padding: theme.spacing(6),
	},
	link: {
		textDecoration: 'none',
	},
});

class MainPage extends React.Component {
	renderCardTextDetails = (card) => {
		if (card === JobBoardImage) {
			return (
				<React.Fragment>
					<Typography gutterBottom variant='h5' component='h2'>
						The Job Board
					</Typography>
					<Typography>
						The job board allows you to keep track of all your applications in
						one place. With a nice color coded scheme, add your job applications
						and organize them by their status. Never forget where your job
						applications are again.
					</Typography>
				</React.Fragment>
			);
		} else if (card === JobFormImage) {
			return (
				<React.Fragment>
					<Typography gutterBottom variant='h5' component='h2'>
						The Job Form
					</Typography>
					<Typography>
						Include all different types of information about the job application
						you submitted. From the basics like company name and the position,
						add special notes or even keep track of your contacts from that
						company.
					</Typography>
				</React.Fragment>
			);
		} else if (card === JobViewImage) {
			return (
				<React.Fragment>
					<Typography gutterBottom variant='h5' component='h2'>
						The Job View
					</Typography>
					<Typography>
						Comfortably view all the information tied with your job application.
						Easily refer to the notes you might have left yourself for that
						application or maybe just give yourself a refresher on the
						description of the role.
					</Typography>
				</React.Fragment>
			);
		}
	};

	render() {
		const { classes } = this.props;
		const cards = [JobBoardImage, JobFormImage, JobViewImage];
		return (
			<React.Fragment>
				<CssBaseline />
				<AppBar position='relative'>
					<Toolbar>
						<WorkIcon className={classes.icon} />
						<Typography variant='h6' color='inherit' noWrap>
							Job Journey
						</Typography>
					</Toolbar>
				</AppBar>
				<main>
					{/* Hero unit */}
					<div className={classes.heroContent}>
						<Container maxWidth='sm'>
							<Typography
								component='h1'
								variant='h2'
								align='center'
								color='textPrimary'
								gutterBottom
							>
								The Search Begins
							</Typography>
							<Typography
								variant='h5'
								align='center'
								color='textSecondary'
								paragraph
							>
								Keep track of your job search from interviews to offers, even
								rejections. All in one place.
							</Typography>
							<div className={classes.heroButtons}>
								<Grid container spacing={2} justifyContent='center'>
									<Grid item>
										<Button
											component={Link}
											to='/login'
											variant='contained'
											color='primary'
										>
											&nbsp;Login&nbsp;
										</Button>
									</Grid>
									<Grid item>
										<Button
											component={Link}
											to='/signup'
											variant='outlined'
											color='primary'
										>
											Sign up
										</Button>
									</Grid>
								</Grid>
							</div>
						</Container>
					</div>
					<Container className={classes.cardGrid} maxWidth='md'>
						{/* End hero unit */}
						<Grid container spacing={4}>
							{cards.map((card) => (
								<Grid item key={card} xs={12}>
									<Card raised className={classes.card}>
										<CardMedia
											className={classes.cardMedia}
											image={card}
											title='Image title'
										/>
										<CardContent className={classes.cardContent}>
											{this.renderCardTextDetails(card)}
										</CardContent>
									</Card>
								</Grid>
							))}
						</Grid>
					</Container>
				</main>
				{/* Footer */}
				<footer className={classes.footer}>
					<Typography variant='h6' align='center' gutterBottom>
						Get started!
					</Typography>
					<Typography
						variant='subtitle1'
						align='center'
						color='textSecondary'
						component='p'
					>
						<Link to='/login' className={classes.link}>
							Login
						</Link>{' '}
						or{' '}
						<Link to='/signup' className={classes.link}>
							Sign up
						</Link>
					</Typography>
				</footer>
				{/* End footer */}
			</React.Fragment>
		);
	}
}

export default withStyles(styles)(MainPage);
