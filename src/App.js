import React, { Component } from 'react';
import Movies from './components/movies';
import Counters from "./components/counters";
import Navbar from './components/navbar';
// import Counter from "./components/counter"
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Like from './components/common/like';



class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };
  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
    console.log(counter);
  }
  handleDecrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value--;
    this.setState({ counters });
    console.log(counter);
  }
  handleReset = () => {
    let resetValue = this.state.counters.map(c => { return c.value = 0 });
    this.setState({ resetValue });
  }
  handleDelete = (counterId) => {
    const counters = this.state.counters.filter(c => c.id !== counterId)
    this.setState({ counters });
  }
  render() {
    return (
      <React.Fragment>
        {/* <Navbar totalCounter={this.state.counters.filter(c => c.value >= 0).length} /> */}
        <Navbar totalCounter={this.state.counters.reduce((acc, obj) => {
          return acc + obj.value
        }, 0)}
          totalItems={this.state.counters.filter(c => c.value >= 0).length}
        />
        <main className='container'>
          {<Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete} />}
          {<Movies />}
          {/* {<Like />} */}
          {/* <Names /> */}
        </main>
      </React.Fragment>
    );
  }
}


export default App;
