import { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor () {
    super();

    this.state = {
      monsters: [],
      searchValue: ''
    }
  }

  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((users) => this.setState(() => {
      return {monsters: users}
    }))
  }



  render() {
    const filteredMonsters = this.state.monsters.filter((mon) => {
      return mon.name.toLocaleLowerCase().includes(this.state.searchValue)
    })
    return (
      <div className='App'>
        <input
          className='search-box'
          type='text'
          placeholder='search box'
          onChange={
            (event) => {
              const searchValue = event.target.value.toLocaleLowerCase();
              this.setState({searchValue})
            }
          }
        />
        {
          filteredMonsters.map((monster) => {
            return (<div key={monster.id}>
              <h1>{monster.name}</h1>
            </div>)
          })
        }
      </div>
    )
  }
}
export default App;


