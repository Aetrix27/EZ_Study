import axios from "axios";

const API_URL = "/card";

// handles features for posts (submitting, updating, deleting, retrieving posts)
class cardsService {

    // makes a POST req to backend to submit post into the database
    // takes in title and body of post as well as the author 
    submitCard(title, content, accessToken) {
        axios
        .post(`${API_URL}/create`, {
            title,
            content
        },
        {
            headers: {
                'x-access-token': accessToken
            }
        })
        .then( response => {
            if (response.status == '200') {
                console.log('Card was successfully submitted')
            }
        })
        .catch(function(error) {
            console.log(error);
        });
    }

    deleteCard(cardid, accessToken) {
        axios.delete(API_URL + '/delete/'+ cardid, {
            headers: {
            'x-access-token': accessToken
            },
            data: cardid
        });
    }

    getCards() {
        return axios.get(API_URL)
        //.then(function(posts){
          //  console.log(posts)
        //}
        //);
    }


}

export default new cardsService();