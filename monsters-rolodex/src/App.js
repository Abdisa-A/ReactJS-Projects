import { Component } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';

class App extends Component {
  constructor () {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    }

  }

  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((users) => this.setState(() => {
      return {monsters: users}
    }))
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState(() => {
        return (
            this.setState(() => {
                return {searchField}
            })
        )
    })
}
  
  render () {
    const {monsters, searchField} = this.state;
    const filteredMonsters = monsters.filter((mon) => {
      return mon.name.toLocaleLowerCase().includes(searchField)
    })
    return (
      <div className='App'>
        {/* {
          filteredMonsters.map((monster) => {
            return (<div key={monster.id}>
              <h1>{monster.name}</h1>
            </div>)
          })
        } */}
        <SearchBox onChangeHandler={this.onSearchChange} className="search-box" placeholder="search monster"/>
        <CardList monsters={filteredMonsters}/>
      </div>
    )
  }
}
export default App;


