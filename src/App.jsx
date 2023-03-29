import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import NavBar from './components/NavBar';
import Cart from './components/Cart';
import { ShoppingCartProvider } from './components/contexts/ShoppingCartContext';


function App() {
  return (

   <ShoppingCartProvider>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/catalogo" element={<ItemListContainer />} />
        <Route exact path="/category/:category" element={<ItemListContainer />} />
        <Route exact path="/item/:id" element={<ItemDetailContainer />} />
        <Route exact path="/catalogo/item/:id" element={<ItemDetailContainer />}/>

        <Route path="/category/:category/item/:id" element={<ItemDetailContainer />} />
        <Route exact path ="/cart" element={<Cart/>}/>
      </Routes>
    </BrowserRouter>
    </ShoppingCartProvider>

    

  );

}


export default App;

