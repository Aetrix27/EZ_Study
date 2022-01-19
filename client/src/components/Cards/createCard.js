import { React, useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

// importing authService in order to use function that gets info of currently authenticated user
import authService from "../../services/auth-service";
import cardsService from "../../services/cards-service";

// form for submitting a post


function CardsComponent() {
    //constructor(props) {
    //    super(props); 

    // refs for title and body of post
    //var cardTitle = React.createRef(); 
    //var cardBody = React.createRef(); 
    const [cardTitle, setCardTitle] = useState('');
	const [cardBody, setBody] = useState('');

    var history = useHistory();
    
    // function for submitting post
    //this.submitCard = this.submitCard.bind(this);
   

    //}

    //submits posts with title, body, and currently authenticated user's accessToken
    const submitCard = () => {
        history.push('/cards');

        const title = cardTitle
        const content = cardBody
        const accessToken = authService.getCurrentUser().accessToken
        cardsService.submitCard(title, content, accessToken)
        
    }
    
    
    return (
        <div>
            <h1> Card Submission </h1>
            <form>
            <label for="cardTitle"> Title: </label>
				<br />

				<input
					type="text"
					onChange={(e) => {
						setCardTitle(e.target.value);
					}}
				></input>
				<br />
				<label for="cardBody"> Body: </label>
				<br />
				<textarea
					rows="4"
					cols="50"
					onChange={(e) => {
						setBody(e.target.value);
					}}
				></textarea>
				<br />

                <input type="button" value="Submit" onClick={() => submitCard(cardTitle, cardBody)}></input>
            </form>
        </div>
    )
    
}

export default CardsComponent

