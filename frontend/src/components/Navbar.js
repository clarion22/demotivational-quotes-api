import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Box from '@material-ui/core/Box';
import GitHubIcon from '@material-ui/icons/GitHub';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	title: {
		flexGrow: 1,
		marginLeft: '20vw',
	},
	gitHub: {
		color: 'white',
		marginRight: '20vw',
	}
}));

function Navbar() {
	const classes = useStyles();

	const handleRedirect = () => {
		window.location.href="https://github.com/clarion22/demotivational-quotes-api";
	}

	return (
		<div className={classes.root}>
			<AppBar position='static'>
				<Toolbar>
					<Typography variant='h6' className={classes.title}>
						Home
					</Typography>
					<IconButton aria-label="github" className={classes.gitHub} onClick={handleRedirect}>
					    Github <GitHubIcon style={{marginLeft: '8px'}} />
					</IconButton>
				</Toolbar>
			</AppBar>
		</div>
	);
}

export default Navbar;
