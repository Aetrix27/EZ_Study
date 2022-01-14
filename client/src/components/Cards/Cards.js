import { React, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import './Cards.css';

import AuthService from '../../services/auth-service';
import cardsService from '../../services/cards-service';
import UserService from '../../services/user-service';

function Cards() {
	const user = AuthService.getCurrentUser()
	var [count, setCount] = useState(0);

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
		return data.map(e => {
	
		  return(
			<div className = 'blurbs'>
			  <div className='cardHead'>
				<h1>{e.title}</h1>			
			  </div>
			  <p>{e.content}</p>
			  <div>
			  <input type="button" value="Delete" onClick={() => cardsService.deleteCard(e._id, AuthService.getCurrentUser().accessToken)}></input>
			  </div>
	   
			</div>
		  )
		})
	
	  }

	return (
		<div className="cards">
		  <h1>Cards</h1>
			  
		  Like this Card Stack? 
				<div>
					{count < 1 && <button onClick={() => setCount((count + 1))}>
						+
					</button>}
					<span>{count}</span>
					{count >= -1 && <button onClick={() => setCount((count - 1))}>
						-
					</button>}
				</div>
	
		  {/* Create Post button | Accessed via log-in*/}
		  {user &&
			<button>
			  <NavLink className="createCard" to="/createCard"> + Card</NavLink>
			</button>
		  }
		  
		  {/* DisplaysPosts */}
		  <div className="displayCards">
			{data ? generateCards() : 'loading'}
		  </div>
		  
	
		</div>
	 )
}

export default Cards;