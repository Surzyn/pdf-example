import React, { Component } from "react";
import { renderToString } from "react-dom/server";
import jsPDF from "jspdf";

import DisplayList from "../displayList";
export default class People extends Component {
  constructor(props) {
    super(props);

    this.state = {
      employees: [
        { id: 1, name: "Bob" },
        { id: 2, name: "ALa" },
        { id: 3, name: "Franek" },
        { id: 4, name: "Liza" },
      ],
    };
  }

  generateRowData = () => {
    const { employees } = this.state;
    var doc = new jsPDF();

    employees.forEach((employee, index) => {
      doc.text(`${employee.id} ${employee.name}`, 10, 10 * (index + 1));
    });
    doc.save("a4.pdf");
  };

  generateFromHTML = () => {
    const test = <DisplayList employees={this.state.employees} />;
    var doc = new jsPDF();
    doc.fromHTML(renderToString(test));
    doc.save("a4.pdf");
  };

  render() {
    return (
      <div>
        <h3>aaaa</h3>
        <button onClick={this.generateRowData}>generateRowData</button>
        or
        <button onClick={this.generateFromHTML}>generateFromComponent</button>
      </div>
    );
  }
}
