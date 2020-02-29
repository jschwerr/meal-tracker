import React, { Component } from "react";

export default class CreateFood extends Component {
  constructor(props) {
    super(props);

    this.onChangeFoodName = this.onChangeFoodName.bind(this);
    this.onChangeFoodServingSize = this.onChangeFoodServingSize.bind(this);
    this.onChangeFoodServingMeasure = this.onChangeFoodServingMeasure.bind(
      this
    );
    this.onChangeFoodCaloriesPerServing = this.onChangeFoodCaloriesPerServing.bind(
      this
    );
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      food_name: "",
      food_serving_size: "",
      food_serving_measure: "",
      food_calories_per_serving: ""
    };
  }

  onChangeFoodName(e) {
    this.setState({
      food_name: e.target.value
    });
  }

  onChangeFoodServingSize(e) {
    this.setState({
      food_serving_size: e.target.value
    });
  }

  onChangeFoodServingMeasure(e) {
    this.setState({
      food_serving_measure: e.target.value
    });
  }

  onChangeFoodCaloriesPerServing(e) {
    this.setState({
      food_calories_per_serving: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();

    console.log(`Form submitted:`);

    this.setState({
      food_name: "",
      food_serving_size: "",
      food_serving_measure: "",
      food_calories_per_serving: ""
    });
  }

  render() {
    return (
      <div class="container">
        <div class="row">
          <h1>Create food</h1>
        </div>
        <div class="row">
          <div class="col-md-6">
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label> Name: </label>{" "}
                <input
                  type="text"
                  className="form-control"
                  value={this.state.food_name}
                  onChange={this.onChangeFoodName}
                />{" "}
              </div>{" "}
              <div className="form-group">
                <label> Serving Size: </label>{" "}
                <input
                  type="text"
                  className="form-control"
                  value={this.state.food_serving_size}
                  onChange={this.onChangeFoodServingSize}
                />{" "}
              </div>{" "}
              <div className="form-group">
                <label> Serving Measure: </label>{" "}
                <input
                  type="text"
                  className="form-control"
                  value={this.state.food_serving_measure}
                  onChange={this.onChangeFoodServingMeasure}
                />{" "}
              </div>
              <div className="form-group">
                <label> Calories Per Serving: </label>{" "}
                <input
                  type="text"
                  className="form-control"
                  value={this.state.food_calories_per_serving}
                  onChange={this.onChangeFoodCaloriesPerServing}
                />{" "}
              </div>
              <div className="form-group">
                <input
                  type="submit"
                  value="Create Food"
                  className="btn btn-primary"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
