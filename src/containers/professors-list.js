import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { selectProfessor } from "../actions/index";

class ProfessorList extends Component {
	renderList() {
		return this.props.professors.map((professor) => {
			let className =
				this.props.selectedProfessor &&
				this.props.selectedProfessor.name === professor.name
					? "list-group-item selected-item-mine"
					: "list-group-item";
			return (
				<li
					onClick={() => this.props.selectProfessor(professor)}
					key={professor.name}
					className={className}
				>
					<h5>{professor.name}</h5>
					<div>Credit Hours: {professor.numberOfCreditHours}</div>
					<div>Number Of Courses: {professor.numberOfCourses}</div>
				</li>
			);
		});
	}

	render() {
		return <ul className="list-group">{this.renderList()}</ul>;
	}
}

function mapStateToProps(state) {
	return {
		professors: state.professors,
		selectedProfessor: state.selectedProfessor,
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ selectProfessor: selectProfessor }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfessorList);
