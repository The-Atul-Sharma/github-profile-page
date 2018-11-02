import React, { Component } from 'react';
import './Filters.css';

export default class Filters extends Component {
    render() {
        return (
            <div className="filters">
                <input onChange={(evt) => this.props.searchRepo(evt.target.value)} placeholder="Find a repository..." />
                <button className="button">Type: All</button>
                <button className="button">Language: All</button>
                <button className="button">
                    New
                </button>
            </div>
        )
    }
}
