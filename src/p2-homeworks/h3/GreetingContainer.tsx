import React, { ChangeEvent, useState } from 'react';
import Greeting from './Greeting';
import { UserType } from './HW3';

type GreetingContainerPropsType = {
	users: Array<UserType>; // need to fix any
	addUserCallback: (name: string) => void; // need to fix any
};

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({
	users,
	addUserCallback,
}) => {
	// деструктуризация пропсов
	const [name, setName] = useState<string>(''); // need to fix any
	const [error, setError] = useState<string>(''); // need to fix any
	const [inpError, setinpError] = useState<boolean>(false);
	const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
		const outSpace = e.target.value.trim( );
		if (outSpace) {
			setName(outSpace);
			setError('');
			setinpError(false);
		} else {
			setError('Type value');
			setinpError(true);
		} // need to fix
	};
	//
	let totalUsers = users.length;
	// need to fix
	//
	const addUser = () => {
		if (name) {
			alert(`${'hello'} ${name}`);
			setName(''); // need to fix
			addUserCallback(name);
		} else {
			return;
		}
	};

	return (
		<Greeting
			name={name}
			setNameCallback={setNameCallback}
			addUser={addUser}
			error={error}
			totalUsers={totalUsers}
			inpError={inpError}
		/>
	);
};

export default GreetingContainer;
