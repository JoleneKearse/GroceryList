import 'dracula-ui/styles/dracula-ui.css';
import './styles/index.css';
import { Box } from 'dracula-ui';
import Header from './components/Header';
import AddItem from './components/AddItem';
import ItemList from './components/ItemList';
import Footer from './components/Footer';
import { useState } from 'react';


export default function App() {



  return (
    <Box color='blackSecondary' m='lg' p='md' rounded='lg' width='md'>
      <Header />
      <AddItem />
      <ItemList />
      <Footer />
    </Box>
  );
}