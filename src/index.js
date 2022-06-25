import React from 'react';
import ReactDOM from 'react-dom';
import StudentCard from './StudentCard';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = { currentUser: null, data:null, superCoolData: [] };
    }
    render() {
        return (
        <>
        <div>Hello World!</div>
        <StudentCard />
        </>
        )
        }
};

ReactDOM.render(<App />, document.querySelector('#root'));




