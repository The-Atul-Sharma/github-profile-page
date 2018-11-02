import React, { Component } from 'react';
import './Tab.css';

export default class Tab extends Component {
    render() {
        return (
            <div className ="tab-content" title={this.props.tabContent}>
                {this.props.tabContent}
            </div>
        )
    }
}
