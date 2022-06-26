import React from 'react';


class BookOfTheWeek extends React.Component {
    constructor(props) {
        super(props);

        this.state = { currentUser: null, bookData:{}, superCoolData: []};

    };

    componentDidMount = () => {

        const url = 'https://random-data-api.com/api/coffee/random_coffee'

        const getAllBooks = async () => {
            const bookInfo = await fetch(url);
            const bookJson = await bookInfo.json();
            console.log(bookJson);
            this.setState({ bookData: bookJson});
        };

        getAllBooks();

    }

    render() {
        console.log(this.state.bookData);
        return (
            <>
            <div>Book goes here!</div>
            <div>{this.state.bookData.blend_name}</div>
            </>
            
        )
    }
};

export default BookOfTheWeek;