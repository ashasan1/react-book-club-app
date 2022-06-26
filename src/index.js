import React from 'react';
import ReactDOM from 'react-dom';
import StudentCard from './StudentCard';
import './index.css';
import BookOfTheWeek from './BookOfTheWeek';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = { currentUser: null, bookData:null, superCoolData: [] };
    }
    render() {
        return (
        <>
        <div>Hello World!</div>
        <div class="container backdrop">
            <div class="row">
                <div class="col md">
                    <h1 style= {{ color: 'white' }}>Book Club</h1>
                </div>
            </div>  
        </div>
            <BookOfTheWeek />
            <StudentCard />
        </>
        )
        }
};

ReactDOM.render(<App />, document.querySelector('#root'));




