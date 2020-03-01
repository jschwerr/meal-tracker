import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from "axios";


const Food = props => (
  <tr>
    <td>{props.food.food_name}</td>
    <td>{props.food.food_serving_size}</td>
    <td>{props.food.food_serving_measure}</td>
    <td>{props.food.food_calories_per_serving}</td>
    <td>
      <Link to={"/edit/" + props.food._id}>Edit</Link>
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
      <div className="row">
        <table className="table table-striped" style={{ marginTop: 20 }}>
          <thead>
            <tr>
              <th>Food</th>
              <th>Serving Size</th>
              <th>Serving Measure</th>
              <th>Calories Per Serving</th>
              <th></th>
            </tr>
          </thead>
          <tbody>{this.foodList()}</tbody>
        </table>
      </div>
    );
  }
}
