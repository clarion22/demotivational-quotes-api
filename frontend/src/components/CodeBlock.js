import SyntaxHighlighter from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
	codeTitle: {
		fontSize: '20px',
	},
}));
function CodeBlock({ codeText, codeOutput }) {
	const classes = useStyles();

	return (
		<Box>
			<Typography className={classes.codeTitle}>
				Example using fetch
			</Typography>
			<SyntaxHighlighter
				language='javascript'
				style={a11yDark}
				customStyle={{
					textAlign: 'left',
					borderRadius: '15px',
					paddingLeft: '45px',
					fontSize: '18px',
				}}
			>
				{codeText}
			</SyntaxHighlighter>
			<Typography className={classes.codeTitle}>
				Example output
			</Typography>
			<SyntaxHighlighter
				language='javascript'
				style={a11yDark}
				customStyle={{
					textAlign: 'left',
					borderRadius: '15px',
					paddingLeft: '45px',
					fontSize: '18px',
				}}
			>
				{codeOutput}
			</SyntaxHighlighter>
		</Box>
	);
}

export default CodeBlock;
