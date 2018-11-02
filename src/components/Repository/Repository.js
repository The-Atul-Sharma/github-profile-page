import React, { Component } from 'react';
import './Repository.css';

export default class Repository extends Component {
    render() {
        return (
            <div className="repository-section">
                <h3>
                    <a href={this.props.repository.html_url} rel="noopener noreferrer" target="_blank">{this.props.repository.name}</a>
                </h3>
                {this.props.repository.fork && <span className="repository-fork_url"> Forked from
                    <a href={this.props.repository.forks_url} rel="noopener noreferrer" target="_blank"> {this.props.repository.forks_url}</a>
                </span>}
                <p className="repository-description">{this.props.repository.description}</p>
                <div className="repository-info">
                    {this.props.repository.language && <span>
                        {this.props.repository.language}
                    </span>}
                    <span>
                        <svg aria-label="star" viewBox="0 0 14 16" version="1.1" width="14" height="16" role="img"><path fillRule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"></path></svg>
                        {this.props.repository.stargazers_count}
                    </span>
                    {this.props.repository.fork && <span>
                        <svg aria-label="fork" viewBox="0 0 10 16" version="1.1" width="10" height="16" role="img"><path fillRule="evenodd" d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"></path></svg>
                        {this.props.repository.forks_count}
                    </span>}
                    <span>Updated on {this.props.repository.updated_at.split('T')[0]}</span>
                </div>
            </div>
        )
    }
}
