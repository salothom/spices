import React from 'react';
import logo from './logo.svg';
import './App.css';
import spice from './spice.png';
import spiceJson from './spicy.json'


function App() {
  // main = <Spicy />;

  return (
    <div className="App">
      <header className="App-header">
        <div className="headerImage">
          <img src={spice} alt="spices" />
        </div>
        <div className="spicyBoys">
          <Spicy />
        </div>
      </header>
    </div>
  );
}

class Spicy extends React.Component {
  // this.state = {
  //   booklist: bookJson.Books,
  //   currentPick: "All",

  //   book: null
  // }

  renderHerb() {
    let spicyDisplay = [];
    for (let i = 0; i < spiceJson.spicy.length; i++) {
      if (spiceJson.spicy[i].type === "Herb") {
        spicyDisplay.push(
          <div  >
           <input type="checkbox" /> <span >
              {spiceJson.spicy[i].name}
            </span>
          </div>
        );
      }

    }
    return spicyDisplay;
  }
  renderSpice() {
    let spicyDisplay = [];
    for (let i = 0; i < spiceJson.spicy.length; i++) {
      if (spiceJson.spicy[i].type === "spice") {
        spicyDisplay.push(
          <div className="spiceHalf" >
            <input type="checkbox" /><span >
              {spiceJson.spicy[i].name}
            </span>
          </div>
        );
      }

    }
    return spicyDisplay;
  }


  render() {
    return (
      <div className="spiceBox">

        <div className="spiceHalf">
          <h2 >Herb</h2>
          {this.renderHerb()} </div>
        <div >
          <h2 className="spiceHead">Spices</h2>
          {this.renderSpice()} </div>
      </div>


    )
  }


}

export default App;
