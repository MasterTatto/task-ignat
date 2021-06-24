import React from 'react';
import s from './Message.module.css';
type MessagesTypeProps = {
	avatar: string;
	name: string;
	message: string;
	time: string;
};

function Message(props: MessagesTypeProps) {
	return (
		<div className={s.fullBoxMes}>
			<div className={s.imgBox}>
				<img src={props.avatar} alt='avatar' className={s.img} />
			</div>

			<div className={s.boxMes}>
				<div className={s.infoMesBox}>
					<h3>{props.name}</h3>
					<p>{props.message}</p>
				</div>
				<div className={s.timeMes}>{props.time}</div>
			</div>
		</div>
	);
}

export default Message;
