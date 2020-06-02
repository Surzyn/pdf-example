import React, { Component } from "react";

export default class DisplayList extends Component {
  render() {
    const emplyeesLis = this.props.employees.map((emp) => (
      <li key={`${emp.id}-emp-key`}>
        <span style={{ color: "red" }}>{emp.id}</span>
        <span>{emp.name}</span>
      </li>
    ));

    return <ul>{emplyeesLis}</ul>;
  }
}
