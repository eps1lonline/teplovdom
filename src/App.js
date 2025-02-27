import React, {useState} from "react"
import { fullItems } from "./constants"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Items from "./components/Items"
import Categories from "./components/Categories"
import ShowFullItem from "./components/ShowFullItem"

const App = () => {
  const [state, setState] = useState({
    orders: [],
    currentItems: fullItems,
    showFullItem: false,
    fullItem: null
  })

  const deleteOrder = (id) => {
    setState((prevState) => ({...prevState, orders: prevState.orders.filter(el => el.id !== id)}))
  }

  const addToOrder = (item) => {
    let isInArray = false
    state.orders.forEach(el => {     
      if(el.id === item.id)
        isInArray = true
    })
    if(!isInArray)
      setState(prevState => ({...prevState, orders: [...state.orders, item]}))
  }

  const chooseCategory = (category) => {
    if (category === 'all') {
      setState((prevState) => ({...prevState, currentItems: fullItems}))
      return
    }

    setState((prevState) => ({...prevState,
      currentItems: fullItems.filter(el => el.category === category)
    }))
  }

  const onShowItem = (item) => {
    setState((prevState) => ({...prevState, fullItem: item}))
    setState((prevState) => ({...prevState, showFullItem: !state.showFullItem}))
  }

  return (
    <div className="wrapper">
      <Header orders={state.orders} onDelete={deleteOrder} />
      <Categories chooseCategory={chooseCategory} />
      <Items onShowItem={onShowItem} items={state.currentItems} onAdd={addToOrder} />

      {state.showFullItem && <ShowFullItem onAdd={addToOrder} onShowItem={onShowItem} item={state.fullItem} />}
      <Footer />
    </div>
  )
}

export default App;
