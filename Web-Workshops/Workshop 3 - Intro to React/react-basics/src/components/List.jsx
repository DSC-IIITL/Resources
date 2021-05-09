import React, { Component } from 'react'
import ListItem from './ListItem'

export default class List extends Component {
    state = {
        "vegetables" : [ 'Potato' , "Tomato" , "Brinjal"  ],
        "fruits" : [ 'Apple' , 'Grapes' , 'Banana' ]
    }
    render() {
        // var vegetables = this.state.vegetables;
        // var fruits = this.state.fruits;

        var { vegetables , fruits } = this.state;
        
        return (
            <div>
                <ul>
                    <header> Vegetables </header>
                    <ListItem items={vegetables} />
                </ul>
                <ul>
                    <header> Fruits </header>
                    <ListItem items={fruits} />
                </ul>
            </div>
        )
    }
}
