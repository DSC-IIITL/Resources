import React, { Component } from 'react'

export default class ListItem extends Component {
    render() {
        // props = proprties
        var items = this.props.items;
        return (
            <div>
                { items.map( i => <li key={i} >{i}</li> ) }
            </div>
        )
    }
}
