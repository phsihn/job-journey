import React from 'react';
import { Link } from 'react-router-dom';

// material ui
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import WorkIcon from '@material-ui/icons/Work';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
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
});

class MainPage extends React.Component {
	render() {
		const { classes } = this.props;
		const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
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
								Keep track of your job search all in one place. From scheduled
								interviews to offers, even rejections. All in one place.
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
								<Grid item key={card} xs={12} sm={6} md={4}>
									<Card className={classes.card}>
										<CardMedia
											className={classes.cardMedia}
											image='https://source.unsplash.com/random'
											title='Image title'
										/>
										<CardContent className={classes.cardContent}>
											<Typography gutterBottom variant='h5' component='h2'>
												Heading
											</Typography>
											<Typography>
												This is a media card. You can use this section to
												describe the content.
											</Typography>
										</CardContent>
										<CardActions>
											<Button size='small' color='primary'>
												View
											</Button>
											<Button size='small' color='primary'>
												Edit
											</Button>
										</CardActions>
									</Card>
								</Grid>
							))}
						</Grid>
					</Container>
				</main>
				{/* Footer */}
				<footer className={classes.footer}>
					<Typography variant='h6' align='center' gutterBottom>
						Footer
					</Typography>
					<Typography
						variant='subtitle1'
						align='center'
						color='textSecondary'
						component='p'
					>
						Something here to give the footer a purpose!
					</Typography>
				</footer>
				{/* End footer */}
			</React.Fragment>
		);
	}
}

export default withStyles(styles)(MainPage);
