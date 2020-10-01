import React, { Component } from "react";

import { Cards, Chart, CountryPicker } from "./components";
import styles from "./App.module.css";
import { fetchData } from "./api";

import coronaImage from "./images/image.png";

export default class App extends Component {
  state = {
    data: {},
    country: ""
  }
  async componentDidMount() {
    //to make a function async, u usually put async 
    // before the (), but componentDidMount is kinda special
    // so u gotta put it at the beginning
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData })
  }

  handleCountryChange = async country => {
    const fetchedData = await fetchData(country);
    this.setState({ data: fetchedData, country: country})
  }

  render() {
    const { data, country } = this.state;

    return (
       <div className={styles.container}>
         <img className={styles.image} src={coronaImage} alt="COVID-19"/>
         <Cards data={data} />
         <CountryPicker handleCountryChange={this.handleCountryChange} />
         <Chart data={data} country={country} />
       </div>
    )
  } 
}