import { React, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import './Cards.css';

import AuthService from '../../services/auth-service';
import cardsService from '../../services/cards-service';
import UserService from '../../services/user-service';

function Cards() {
	const { user } = useSelector((state) => state.logged);
	// const curruser = JSON.parse(window.localStorage.getItem('USER_STATE'));
	// const newcurruser = JSON.parse(curruser.logged.user);

	// returns access token
	const currUserFun = () => {
		if (user) {
			const currUser = JSON.parse(window.localStorage.getItem('USER_STATE'));
			const currUserInfo = JSON.parse(currUser.logged.user);
			const accessToken = currUserInfo.accessToken;
			return accessToken;
		}
	};

	const [data, setData] = useState(null);
	useEffect(() => {
		cardsService.getCards().then((cards) => {
			var cardData = cards.data;
			const usernamePromise = cardData.map((element) => {
				const username = UserService.getUserID(element.author);

				return username.then((elem) => {
					element.username = elem.data.username;
				});
			});
			Promise.all(usernamePromise).then(() => setData(cardData));
		});
	});
	// Gets post from database and returns parsed jsx elements
	//          <input type="button" value="Submit" onClick={deletePost(e._id)}></input>

	const generateCards = () => {
		return data.map((e) => {
		
			return (
				<div className="cards">
					<div className="card">
						<div className="postName">
							<p>{e.username}</p>
							<h4>{e.title}</h4>
						</div>
					
						<div className="postBody">
							<p>{e.content}</p>
						</div>
					
						<input
							className="button"
							type="button"
							value="Delete"
							onClick={() => cardsService.deleteCard(e._id, currUserFun())}
						></input>
					</div>
				</div>
			);
		});
	};


	return (
		<div className="cards">
			<h1>CARDS</h1>

			{/* Create Post button | Accessed via log-in*/}
			{currUserFun() && (
				<button>
					<NavLink className="createCard" to="/createCard">
						{' '}
						New Card
					</NavLink>
				</button>
			)}

			{/* DisplaysPosts */}
			<div className="displayCards">{data ? generateCards() : 'loading'}</div>

	
		</div>
	);
}

export default Cards;