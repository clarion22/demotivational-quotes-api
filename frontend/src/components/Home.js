import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import CodeBlock from './CodeBlock';
import Divider from '@material-ui/core/Divider';
import Footer from './Footer.js';

const useStyles = makeStyles((theme) => ({
	title: {
		fontSize: '50px',
		fontWeight: 'bold',
	},
	mainContainer: {
		paddingTop: '10em',
	},
	boxContainer: {
		textAlign: 'center',
		marginBottom: '80px',
	},
	apiBox: {
		backgroundColor: 'rgba(111, 185, 236, 0.46)',
		color: theme.palette.primary.main,
		fontSize: '2em',
	},
	apiSubtitle: {
		...theme.typography.codeSubtitle,
		marginTop: '40px',
		fontWeight: 600,
	},
}));

const codeText = `fetch('https://demotivational-quotes-api.herokuapp.com/api/quotes/random')
    .then(response => response.json())
    .then(quote => console.log(quote))`;

const codeOutput = `{
	"quote": "Trying is the first step toward failure.",
	"author": "Homer Simpson",
}`;

const codeText1 = `fetch('https://demotivational-quotes-api.herokuapp.com/api/quotes/all')
    .then(response => response.json())
    .then(quote => console.log(quote))`;

const codeOutput1 = `[{"quote": "...", "author": "...."}, {}...]`;

function Home() {
	const classes = useStyles();

	return (
		<React.Fragment>
			<CssBaseline />
			<Container maxWidth='md' className={classes.mainContainer}>
				<Box className={classes.boxContainer}>
					<Typography variant='h1' style={{ marginBottom: '25px' }}>
						Demotivational Quotes API
					</Typography>
					<Typography variant='h5'>
						free RESTful API service powered by{' '}
						<a href='https://expressjs.com/'>Express.js</a>,{' '}
						<a href='https://www.mongodb.com/2'>MongoDB</a>
					</Typography>
				</Box>
				<Typography variant='h4'>API Endpoints</Typography>
				<Divider />
				<Typography className={classes.apiSubtitle}>
					Get one random quote
				</Typography>
				<Box className={classes.apiBox}>
					https://demotivational-quotes-api.herokuapp.com/api/quotes/random
				</Box>
				<CodeBlock codeText={codeText} codeOutput={codeOutput} />
				<Typography className={classes.apiSubtitle}>
					Get all quotes
				</Typography>
				<Box className={classes.apiBox}>
					https://demotivational-quotes-api.herokuapp.com/api/quotes/all
				</Box>
				<CodeBlock codeText={codeText1} codeOutput={codeOutput1} />
			</Container>
			<Footer />
		</React.Fragment>
	);
}

export default Home;
