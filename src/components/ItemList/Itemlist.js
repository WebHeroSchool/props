import React from 'react';
import Item from '../Item/Item';


const ItemList = ({ todoItem }) => (<ul>
  <li><Item todoItem={todoItem} /></li>
  <li><Item todoItem={'Заправить машину'} /></li>
  <li><Item todoItem={'Постирать кроссовки'} /></li>
</ul>);

export default ItemList;