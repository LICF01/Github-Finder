import { useContext, useReducer, useState } from 'react';

import { searchUsers } from '../context/GithubActions';

import GithubContext from '../context/GithubContext';

import {
	FormControl,
	Input,
	InputGroup,
	InputLeftElement,
	Button,
} from '@chakra-ui/react';

import { FiSearch } from 'react-icons/fi';

const SearchInput = () => {
	const [inputText, setInputText] = useState('');

	const { users, dispatch } = useContext(GithubContext);

	const handleChange = (e) => {
		setInputText(e.target.value);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		const users = await searchUsers(inputText);

		dispatch({ type: 'GET_USERS', payload: users });

		setInputText('')
	};

	return (
		<form onSubmit={handleSubmit}>
			<FormControl w='sm'>
				<InputGroup>
					<InputLeftElement
						pointerEvents='none'
						children={<FiSearch color='gray.300' />}
					/>

					<Input
						placeholder='Search'
						id='search'
						type='text'
						value={inputText}
						onChange={handleChange}
					/>
				</InputGroup>
			</FormControl>
		</form>
	);
};

export default SearchInput;
