import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUserInformation, getUserRepos, searchRepos } from '../../actions/userActions';
import Header from '../../components/Header/Header';
import UserInfo from '../../components/UserInfo/UserInfo';
import Tab from '../../components/Tab/Tab';
import Filters from '../../components/Filters/Filters';
import Repository from '../../components/Repository/Repository';

import './App.css';

const tabs = ['Overview', 'Repositories', 'Starts', 'Followers', 'Following'];

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			userInformation: {
				userInfo: {},
				userRepos: [],
				filterRepos: [],
			},
		};
	}

	componentDidMount() {
		let username = prompt("Please enter your github username:");
		this.props.getUserInformation(username);
		this.props.getUserRepos(username);
	}

	static getDerivedStateFromProps(nextProps, prevState) {
		return {
			userInformation: nextProps.userInformation,
		};
	}

	searchRepo = value => {
		this.props.searchRepos(value).then(() => {
			let {userInformation} = this.state;
			let newUserInformation = {
				userInfo: userInformation.userInfo,
				userRepos: userInformation.filterRepos,
				filterRepos: userInformation.filterRepos,
			};

			this.setState({
				userInformation: newUserInformation,
			});
		});
	}

  	render() {
		return (
			<div>
				<Header />
				<div className="container">
					<UserInfo userInfo={this.state.userInformation.userInfo} />
					<div className="repositories-section">
						<div className="tab">
							{tabs.map((tab, index) => <Tab key={index} tabContent={tab} />)}
						</div>
						<Filters searchRepo={this.searchRepo} />
						<ul className="user-repositories">
							{this.state.userInformation.filterRepos.map((repo, index) => <Repository key={index} repository={repo} />)}
						</ul>
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		userInformation: state.userInformation,
	};
};

export default connect(
    mapStateToProps,
    { getUserInformation, getUserRepos, searchRepos }
)(App);