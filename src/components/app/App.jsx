import { React, Component } from "react";
import Searchbar from "../searchbar/Searchbar";
import css from './App.module.css'


export class App extends Component {

  render() {
    return (
      <div className={css.App} >

        <Searchbar />

        React homework template hhhhhh
      </div>
    );

  }

};



export default App;