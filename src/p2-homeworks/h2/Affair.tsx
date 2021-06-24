import React from 'react';
import s from './Affairs.module.css';
import { AffairType } from './HW2';
type AffairPropsType = {
	// key не нужно типизировать
	affair: AffairType; // need to fix any
	deleteAffairCallback: (id: number) => void; // need to fix any
};

function Affair(props: AffairPropsType) {
	const deleteCallback = () => {
		props.deleteAffairCallback(props.affair._id);
	};
	//
	return (
		<div className={s.box}>
			<span
				className={`${s.text} ${props.affair.priority === 'high' ? s.h : ''} ${
					props.affair.priority === 'low' ? s.l : ''
				} ${props.affair.priority === 'middle' ? s.m : ''}`}
			>
				{props.affair.priority}
			</span>

			<button onClick={deleteCallback} className={s.remove}>
				X
			</button>
		</div>
	);
}

export default Affair;
