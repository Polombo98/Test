import { Box, Button, Container, Typography } from "@material-ui/core"
import AppBar from '@material-ui/core/AppBar';

const Header = () => {
	return (
		<AppBar>
			<Container>
				<Box marginY="1rem" display="flex" alignItems="center" justifyContent="space-between">
					<Typography>
						Booker
					</Typography>
					<Button variant="contained" color="default">
						<Typography >
							Add a new book
						</Typography>
					</Button>
				</Box>
			</Container>
		</AppBar>
	)
}

export default Header;
