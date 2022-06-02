import React from "react";
import ReactDOM from "react-dom/client";
// import { useState } from "react";
import "./Table.css";

export class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      vehicles: [],
    };
  }

  componentDidMount() {
    fetch("https://localhost:7167/api/Vehicle/", {
      "Access-Control-Allow-Origin": "*",
    })
      .then((response) => response.json())
      .then((jsonResponse) => {
        this.setState({ vehicles: jsonResponse });
      });
  }

  async updateStock(vehicle, amount) {
    const vehicleNew = {
      ...vehicle,
      numStock: vehicle.numStock + amount,
    };

    const requestOptions = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Methods": "*",
      },
      body: JSON.stringify(vehicleNew),
    };

    await fetch(
      `https://localhost:7167/api/Vehicle/${vehicle.id}`,
      requestOptions
    );

    const updatedVehicles = this.state.vehicles.map((i) => {
      if (i.id === vehicle.id) {
        i.numStock = vehicleNew.numStock; //TO-DO: Utilise API Response once implemented
      }
      return i;
    });
    console.log(updatedVehicles);
    
    this.setState({vehicles: updatedVehicles});
  }

  render() {
    // Accordion
    // const [selected, setSelected] = useState(null);
    // const toggle = (i) => {
    //   if (selected === i) {
    //     return setSelected(null);
    //   }

    //   setSelected(i)
    // }

    return (
      <section className="wrapper">
        <article className="accordion">
          <div className="title" id="header" /*onClick={ () => toggle(i)}*/>
            <div className="model">
              <p>Model Name</p>
            </div>
            <div className="stock">
              <p>Number in Stock</p>
            </div>
          </div>
          {this.state.vehicles.map((item, i) => (
            <div key={item.id}>
              <div className="title" /*onClick={ () => toggle(i)}*/>
                <div className="model">
                  <p>{item.model}</p>
                </div>
                <div className="stock">
                  <p>{item.numStock}</p>
                </div>
              </div>
              <aside className="details">
                <div className="make">
                  <p>{item.make}</p>
                </div>
                <div className="features">
                  <p>{item.features}</p>
                </div>
                <div className="price">
                  <p>{item.price}</p>
                </div>
                <div className="buttonBox">
                  <button onClick={() => this.updateStock(item, 1)}>+</button>
                  <button onClick={() => this.updateStock(item, -1)}>-</button>
                </div>
              </aside>
            </div>
          ))}
        </article>
      </section>
    );
  }
}

// const data = [
//   {
//     model: "Polo Vivo Hatch",
//     make: "Volkswagen",
//     features: "Diesel",
//     price: "R 235 200,00",
//     stock: 10,
//   },
//   {
//     model: "Polo Sedan",
//     make: "Volkswagen",
//     features: "petrol",
//     price: "R 265 800,00",
//     stock: 5,
//   },
//   {
//     model: "Polo",
//     make: "Volkswagen",
//     features: "Metanol",
//     price: "R 315 000,00",
//     stock: 3,
//   },
//   {
//     model: "Golf",
//     make: "Volkswagen",
//     features: "Diesel",
//     price: "R 689 800,00",
//     stock: 2,
//   },
//   {
//     model: "T-Cross",
//     make: "Volkswagen",
//     features: "Diesel",
//     price: "R 368 900,00",
//     stock: 9,
//   },
//   {
//     model: "Polo Vivo Hatch",
//     make: "Volkswagen",
//     features: "Diesel",
//     price: "R 235 200,00",
//     stock: 10,
//   },
//   {
//     model: "Polo Sedan",
//     make: "Volkswagen",
//     features: "petrol",
//     price: "R 265 800,00",
//     stock: 5,
//   },
//   {
//     model: "Polo",
//     make: "Volkswagen",
//     features: "Metanol",
//     price: "R 315 000,00",
//     stock: 3,
//   },
//   {
//     model: "Golf",
//     make: "Volkswagen",
//     features: "Diesel",
//     price: "R 689 800,00",
//     stock: 2,
//   },
//   {
//     model: "T-Cross",
//     make: "Volkswagen",
//     features: "Diesel",
//     price: "R 368 900,00",
//     stock: 9,
//   },
//   {
//     model: "Polo Vivo Hatch",
//     make: "Volkswagen",
//     features: "Diesel",
//     price: "R 235 200,00",
//     stock: 10,
//   },
//   {
//     model: "Polo Sedan",
//     make: "Volkswagen",
//     features: "petrol",
//     price: "R 265 800,00",
//     stock: 5,
//   },
//   {
//     model: "Polo",
//     make: "Volkswagen",
//     features: "Metanol",
//     price: "R 315 000,00",
//     stock: 3,
//   },
//   {
//     model: "Golf",
//     make: "Volkswagen",
//     features: "Diesel",
//     price: "R 689 800,00",
//     stock: 2,
//   },
//   {
//     model: "T-Cross",
//     make: "Volkswagen",
//     features: "Diesel",
//     price: "R 368 900,00",
//     stock: 9,
//   },
// ];
