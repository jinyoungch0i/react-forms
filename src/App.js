import React from "react"

import Output from "./components/Output"

//class-based component vs functional component to utilise state:
class App extends React.Component {
  //constructor to define state:
  constructor() {
    super()
    this.state = {
      firstName : "",
      lastName : "",
      age : "",
      gender : "",
      destination : "",
      kosher : false,
      vegetarian : false,
      lactoseFree : false
    }

    //binding the handleChange method in order to use this.setState:
    this.handleChange = this.handleChange.bind(this)
  }

  //class method that is to be invoked upon onChange on input elements
  //takes in the event parameter by default
  handleChange(event) {
    const { name, value, type, checked } = event.target
    if (type === "checkbox") {
      this.setState(
        {
          [name] : checked
        }
      )
      console.log(checked)
    }
    else {
      this.setState(
        {
          [name] : value
        }
      )

    }
  }

  render() {

    return(
      <div>
        <form>
          <input
            type="text"
            name="firstName"
            onChange={this.handleChange}
            placeholder="First Name"
          />
          <br />

          <input
            type="text"
            name="lastName"
            onChange={this.handleChange}
            placeholder="Last Name"
          />
          <br />

          <input
            type="text"
            name="age"
            onChange={this.handleChange}
            placeholder="Age"
          />
          <br />

          <label>Gender: </label>
          <input
            type="radio"
            name="gender"
            value="Male"
            onChange={this.handleChange}
          />
          <label>Male</label>
          <input
            type="radio"
            name="gender"
            value="Female"
            onChange={this.handleChange}
          />
          <label>Female</label>
          <br />

          <label>Destination: </label>
          <select
            name="destination"
            onChange={this.handleChange}
          >
            <option value="New York">NYC</option>
            <option value="Miami">MIA</option>
            <option value="San Francisco">SF</option>
          </select>

          <br />

          <label>Dietary Restrictions: </label>
          <br />

          <input
            type="checkbox"
            name="kosher"
            checked={this.state.kosher}
            onChange={this.handleChange}
          />
          <label>Kosher</label>
          <br />

          <input
            type="checkbox"
            name="vegetarian"
            checked={this.state.vegetarian}
            onChange={this.handleChange}
          />
          <label>Vegetarian</label>
          <br />

          <input
            type="checkbox"
            name="lactoseFree"
            checked={this.state.lactoseFree}
            onChange={this.handleChange}
          />
          <label>Lactose Free</label>
          <br />

          <br />
          <button>Submit</button>
        </form>

        {/* displaying dynamically updated states: */}
        <Output
          firstName={this.state.firstName}
          lastName={this.state.lastName}
          age={this.state.age}
          gender={this.state.gender}
          destination={this.state.destination}
          kosher={this.state.kosher}
          vegetarian={this.state.vegetarian}
          lactoseFree={this.state.lactoseFree}
        />
     </div>
      )
  }
}

export default App
