import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import GitHubIcon from '@material-ui/icons/GitHub';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme) => ({
	footer: {
		borderTop: '1px solid rgba(1, 1, 1, 0.2)',
		height: '80px',
		marginTop: '5rem',
	  textAlign: 'center'
	},
}))

function Footer() {
	const classes = useStyles();

	const handleRedirect = () => {
		window.location.href="https://github.com/clarion22/";
	}

	return <div className={classes.footer}>
    <Typography>Currently v1.0.0</Typography>
		<Typography>Demotivational Quotes API 2021 </Typography>
		<IconButton aria-label="github" className={classes.gitHub} onClick={handleRedirect}>
					    <GitHubIcon style={{marginLeft: '8px'}} />
					</IconButton>
	</div>;
}

export default Footer;
