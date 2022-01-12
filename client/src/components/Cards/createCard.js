import React, { Component } from "react";

// importing authService in order to use function that gets info of currently authenticated user
import authService from "../../services/auth-service";
import cardsService from "../../services/cards-service";

// form for submitting a post
class CardsComponent extends React.Component {
    constructor(props) {
        super(props); 

        // refs for title and body of post
        this.cardTitle = React.createRef(); 
        this.cardBody = React.createRef(); 
        
        // function for submitting post
        this.submitCard = this.submitCard.bind(this);

    }

    //submits posts with title, body, and currently authenticated user's accessToken
    submitCard() {
        const title = this.cardTitle.current.value
        const content = this.cardBody.current.value
        const accessToken = authService.getCurrentUser().accessToken
        cardsService.submitCard(title, content, accessToken)
    }
    
    render() {
        return (
            <div>
                <h1> Card submission </h1>
                <form>
                    <label for="cardTitle"> Title: </label><br />
                    <input type="text" ref={this.cardTitle}></input><br />
                    <label for="cardBody"> Body: </label><br />
                    <textarea rows="4" cols="50" ref={this.cardBody}></textarea><br />
                    <input type="button" value="Submit" onClick={this.submitCard}></input>
                </form>
            </div>
        )
    }
}

export default CardsComponent

