import { useState } from 'react';

import {
	FormControl,
	Input,
	InputGroup,
	InputLeftElement,
} from '@chakra-ui/react';

import { RiSearchLine } from 'react-icons/ri';

const SearchRepo = ({ repos, getRepo }) => {
	const [inputText, setInputText] = useState('');

	const handleChange = (e) => {
		setInputText(e.target.value);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const repo = repos.filter((repo) =>
			repo.name.toLowerCase().startsWith(inputText.toLowerCase())
		);

		getRepo(repo);

		setInputText('');
	};

	return (
		<form onSubmit={handleSubmit}>
			<FormControl w={{ sm: '70vw', md: '100%' }} my={{ base: '20px' }}>
				<InputGroup color='gray.400' size='lg'>
					<InputLeftElement
						pointerEvents='none'
						children={<RiSearchLine size='22' />}
					/>
					<Input
						placeholder='Search a project'
						id='search'
						type='text'
						value={inputText}
						onChange={handleChange}
						variant='flushed'
						border='none'
						_placeholder={{ color: 'gray.600' }}
						_focus={{
							color: 'gray.600',
							borderBottom: '1px solid  #A0AEC0',
						}}
					/>
				</InputGroup>
			</FormControl>
		</form>
	);
};

export default SearchRepo;
