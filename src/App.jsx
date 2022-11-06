import 'dracula-ui/styles/dracula-ui.css';
import './styles/index.css';
import { Box } from 'dracula-ui';
import Header from './components/Header';
import AddItem from './components/AddItem';
import ItemList from './components/ItemList';
import Footer from './components/Footer';
import { useState } from 'react';


export default function App() {
  const [items, setItems] = useState([
    {
      id: 1,
      checked: false,
      item: "Ginger Ale sparking water"
    },
    {
      id: 2,
      checked: false,
      item: "Black Diamond cheese sticks"
    },
    {
      id: 3,
      checked: false,
      item: "Olive Tempanade hummus"
    }
  ]);

  const handleCheck = (id) => {
    const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item);
    setItems(listItems);
    localStorage.setItem("shoppinglist", JSON.stringify(listItems));
  }

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
    localStorage.setItem("shoppinglist", JSON.stringify(listItems));
  }

  return (
    <Box color='blackSecondary' m='lg' p='md' rounded='lg' width='md'>
      <Header />
      <AddItem />
      <ItemList
        items={items}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer length={items.length}/>
    </Box>
  );
}