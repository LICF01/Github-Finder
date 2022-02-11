import { useContext } from 'react';
import GithubContext from '../../context/GithubContext';
import UserItem from './UserCard';
import { Grid, GridItem, Flex } from '@chakra-ui/react';
import PuffLoader from 'react-spinners/PuffLoader';

const UserResults = () => {
	const { users, loading } = useContext(GithubContext);

	if (!loading) {
		return (
			<Grid
				gridTemplateColumns='repeat(auto-fill, 350px)'
				justifyContent='center'
			>
				{users.map((user) => {
					return (
						<GridItem maxW={'400px'}>
							<UserItem key={user.id} user={user} />
						</GridItem>
					);
				})}
			</Grid>
		);
	} else {
		return (
			<Flex justifyContent='center' align='center' h='80vh'>
				<PuffLoader size={80} />
			</Flex>
		);
	}
};

export default UserResults;
