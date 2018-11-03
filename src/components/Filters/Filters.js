import React, { Component } from 'react';
import Popup from '../Popup/Popup';
import './Filters.css';
import { filterType, filterLanguage } from '../Popup/store';

export default class Filters extends Component {
    state = {
        filterTypeOpen: false,
        filterLangOpen: false,
    };

    openTypeFilter() {
        this.setState({
            filterTypeOpen: !this.state.filterTypeOpen,
            filterLangOpen: false,
        });
    }

    openLangFilter() {
        this.setState({
            filterLangOpen: !this.state.filterLangOpen,
            filterTypeOpen: false,
        });
    }

    filterSet(filterType,filterInfo) {
        this.props.filterRepos(filterType, filterInfo);
        this.setState({
            filterLangOpen: false,
            filterTypeOpen: false
        });
    }

    render() {
        return (
            <div>
                <div className="filters">
                    <input onChange={(evt) => this.props.searchRepo(evt.target.value)} placeholder="Find a repository..." />
                    <div>
                        <button onClick={() => { this.openTypeFilter(); }} className="button">
                            <i>Type: </i>
                            <span>All</span>
                        </button>
                        <Popup 
                            filterItem={filterType}
                            filterToggle={this.state.filterTypeOpen}
                            handleClick={(filterInfo) => { this.filterSet('REPO_TYPE', filterInfo); }}
                        />
                    </div>
                    <div>
                        <button onClick={() => { this.openLangFilter(); }} className="button">
                            <i>Language: </i>
                            <span>ALL</span>
                        </button>
                        <Popup 
                            filterItem={filterLanguage}
                            filterToggle={this.state.filterLangOpen}
                            handleClick={(filterInfo) => { this.filterSet('LANGUAGE_TYPE', filterInfo); }}
                        />
                    </div>
                    <button className="button">
                        New
                    </button>
                </div>
                <div className="filterPopup">
                    
                    
                </div>
            </div>
        )
    }
}