import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Popup.css';
import getClassname from 'classnames';

export default class Popup extends Component {
    static propTypes = {
        filterItem: PropTypes.object,
        filterToggle: PropTypes.string
    };

    render() {
        const { filterItem, filterToggle } = this.props;
        return (
            <div
                className={getClassname('popup', {
                    'popupDisplay': (filterToggle === true),
                    'popupDisplayNone': (filterToggle === false),
                })}
            >
                <div className="popupHeader">
                    <span className="title">Select type:</span>
                </div>
                {filterItem.map((item, index) => 
                    <div className="items" key={index} onClick={() => this.props.handleClick(item)}>
                        <span>{item.title}</span>
                    </div>
                )}
            </div>
        );
    }
}