import React from 'react';
import axios from 'axios';
import { Component } from 'react';

class StudentCard extends Component {
    constructor(props) {
        super(props);

        this.state = { currentUser: null, data:null, superCoolData: [] };

    };
 
    componentDidMount = () => {
        
        this.setState({ superCoolData: [
            {
                id: 1,
                name: "John",
                age: "15",
                school: "SCAD"
            },
            {
                id: 2,
                name: "Deb",
                age: "20",
                school: "Georgia State"
            },
            {
                id: 3,
                name: "Annie",
                age: "30",
                school: "Grosse Pointe North"
            }
        ] });
        
        console.log(this.state);
    };

render() {
return (
        <>
        <div>
            {this.state.superCoolData.map( (person) => {
                return (
                    <>
                    <img style= {{ maxWidth: '100px' }} src="https://almcharities.com/wp-content/uploads/2019/05/placeholder-circle.png"></img>
                    <li>{person.name}</li>
                    <li>{person.age}</li> 
                    <li>{person.school}</li>
                    </>
                )
            })}
            
        </div>
        </>
    )
}
    
}

export default StudentCard;