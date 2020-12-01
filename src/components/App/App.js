import React from 'react';
import ItemList from '../ItemList/Itemlist';
import InputItem from '../InputItem/InputItem';
import Footer from '../Footer/Footer';

const todoItem = 'Купить продукты';

const App = () => (<div>
  <h1>Todos</h1>
  <InputItem />
  <ItemList todoItem={todoItem} />
  <Footer count={3} />
</div>);

export default App;