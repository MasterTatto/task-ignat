import React, { useState } from 'react';
import s from './Greeting.module.css';

type GreetingPropsType = {
	name: any; // need to fix any
	setNameCallback: any; // need to fix any
	addUser: any; // need to fix any
	error: any; // need to fix any
	totalUsers: any; // need to fix any
	zero: boolean;
};

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
	{ name, setNameCallback, addUser, error, totalUsers, zero } // деструктуризация пропсов
) => {
	const inputClass = zero ? s.error : ''; // need to fix with (?:)

	return (
		<div>
			<input value={name} onChange={setNameCallback} className={inputClass} />
			<span>{error}</span>
			<button onClick={addUser}>add</button>
			<span className={s.counter}>{totalUsers}</span>
		</div>
	);
};

export default Greeting;
