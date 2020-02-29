import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from "axios";

const Food = props => (
  <tr>
    <td>{props.food.name}</td>
    <td>
      <Link to={"/edit/" + props.food.name}>Edit</Link>
    </td>
  </tr>
);

export default class FoodList extends Component {
  constructor(props) {
    super(props);
    this.state = { food: [] };
  }

  componentDidMount() {
    axios
      .get("/api/food")
      .then(response => {
        console.log(response);
        this.setState({ food: response.data });
      })
      .catch(err => err);
  }

  foodList() {
    return this.state.food.map(function(currentFood, i) {
      return <Food food={currentFood} key={i} />;
    });
  }

  render() {
    return (
      <div class="row">
        <table className="table table-striped" style={{ marginTop: 20 }}>
          <thead>
            <tr>
              <th>Food</th>
              <th></th>
            </tr>
          </thead>
          <tbody>{this.foodList()}</tbody>
        </table>
      </div>
    );
  }
}
