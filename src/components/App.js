import React from 'react'
import FruitBasket from './FruitBasket'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      currentFilter: null,
      filters: [],
      fruit: [],
    }
  }

  componentWillMount() {
    this.fetchFilters()
    this.fetchFruit()
  }

  fetchFilters = () => {
    fetch('/api/fruit_types')
      .then(response => response.json())
      .then(filters => this.setState({ filters }))
  }

  fetchFruit = () => {
    fetch('/api/fruit')
      .then(response => response.json())
      .then(items => this.setState({ items }))
  }

  handleChange = event => {
    console.log('new filter: ', event.target.value);
    this.setState({ selectedFilter: event.target.value });
  }

  render() {
    return (
      <FruitBasket
        handleChange={this.handleChange}
        fruit={this.state.fruit}
        filters={this.state.filter}
        filter={this.fetchFilters}
      />
    )
  }
}

export default App
