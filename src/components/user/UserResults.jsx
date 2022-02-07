import { useContext } from 'react';
import GithubContext from '../../context/GithubContext';
import UserItem from './UserItem';
import { Grid, GridItem } from '@chakra-ui/react';

const UserResults = () => {
	const { users, loading } = useContext(GithubContext);

	if (!loading) {
		return (
			<Grid gridTemplateColumns='repeat(auto-fill, 350px)' justifyContent='center'>
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
			<div>
				<p>loading...</p>
			</div>
		);
	}
};

export default UserResults;
