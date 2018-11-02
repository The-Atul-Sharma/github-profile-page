import React, { Component } from 'react';
import './Filters.css';

export default class Filters extends Component {
    render() {
        return (
            <div className="filters">
                <input onChange={(evt) => this.props.searchRepo(evt.target.value)} placeholder="Find a repository..." />
                <button onClick={() => this.props.openFilter()} className="button">
                    <i>Type: </i>
                    <span>All</span>
                </button>
                <button className="button">
                    <i>Language: </i>
                    <span>ALL</span>
                </button>
                <button className="button">
                    New
                </button>
            </div>
        )
    }
}
