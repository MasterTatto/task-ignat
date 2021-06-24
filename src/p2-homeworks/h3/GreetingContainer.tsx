import React, { ChangeEvent, useState } from 'react';
import Greeting from './Greeting';

type GreetingContainerPropsType = {
	users: any; // need to fix any
	addUserCallback: any; // need to fix any
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
	const [error, setError] = useState<any>(''); // need to fix any
	const outSpace = name;
	let [zero, setZero] = useState<boolean>(false);
	const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
		if (name === '') {
			setZero(true);
		} else {
			setZero(false);
		}
		setName(e.target.value); // need to fix
	};
	const addUser = () => {
		alert(name);
		setName(''); // need to fix
	};

	const totalUsers = 0; // need to fix

	return (
		<Greeting
			name={outSpace}
			setNameCallback={setNameCallback}
			addUser={addUser}
			error={error}
			totalUsers={totalUsers}
			zero={zero}
		/>
	);
};

export default GreetingContainer;
