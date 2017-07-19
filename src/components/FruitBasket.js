import React, { Component }  from 'react'

import Filter from './Filter'
import FilteredFruitList from './FilteredFruitList.js'

const FruitBasket = props => {
  return (
    <div className="fruit-basket"></div>
  )
}

FruitBasket.defaultProps = {
  fruit: [],
  filters: [],
  currentFilter: null,
  updateFilterCallback: null,
}

export default FruitBasket
