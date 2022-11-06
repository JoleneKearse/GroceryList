import 'dracula-ui/styles/dracula-ui.css';
import './styles/index.css';
import { Box } from 'dracula-ui';
import Header from './components/Header';
import AddItem from './components/AddItem';
import SearchItem from './components/SearchItem';
import ItemList from './components/ItemList';
import Footer from './components/Footer';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';


export default function App() {
  const [items, setItems] = useState(JSON.parse(localStorage.getItem("shoppinglist")));
  const [newItem, setNewItem] = useState("");
  const [search, setSearch] = useState("");

  const setAndSaveItems = (newItems) => {
    setItems(newItems);
    localStorage.setItem("shoppinglist", JSON.stringify(newItems));
  }

  const addItem = (item) => {
    // increment item id or set it as 1
    const id = uuidv4();
    console.log(id)
    // create new item object
    const nextNewItem = { id: id, checked: false, item };
    // create new array to update state
    const listItems = [...items, nextNewItem];
    setAndSaveItems(listItems);
  }

  const handleCheck = (id) => {
    const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item);
    setAndSaveItems(listItems);
  }

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setAndSaveItems(listItems);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // check that there is something to submit
    if (!newItem) return;
    // addItem
    addItem(newItem);
    // set state back to empty
    setNewItem("");
  }

  return (
    <Box color='blackSecondary' m='lg' p='md' rounded='lg' width='md'>
      <Header />
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <SearchItem
        search={search}
        setSearch={setSearch}
      />
      <ItemList
        items={items.filter(item => ((item.item).toLowerCase()).includes(search.toLowerCase()))}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer length={items.length} />
    </Box>
  );
}