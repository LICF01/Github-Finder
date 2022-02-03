import {
	FormControl,
	Input,
	InputGroup,
	InputLeftElement,
} from '@chakra-ui/react';

import { FiSearch } from 'react-icons/fi';

const SearchInput = () => {
	return (
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
					/>
				</InputGroup>
			</FormControl>
	)
}

export default SearchInput
