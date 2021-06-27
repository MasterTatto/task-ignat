import React, { ChangeEvent, MouseEventHandler, useState } from 'react';
import s from './Greeting.module.css';

type GreetingPropsType = {
	name: string; // need to fix any
	setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void; // need to fix any
	addUser: () => void; // need to fix any
	error: string; // need to fix any
	totalUsers: number; // need to fix any
	inpError: boolean;
};

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
	{ name, setNameCallback, addUser, error, totalUsers, inpError } // деструктуризация пропсов
) => {
	let errorInput = inpError ? s.error : '';
	// need to fix with (?:)

	return (
		<div>
			<input value={name} onChange={setNameCallback} className={errorInput} />
			<button onClick={addUser}>add</button>
			<span className={s.counter}>{totalUsers}</span>
			<div className={name === '' ? s.er : ''}>{error}</div>
		</div>
	);
};

export default Greeting;
