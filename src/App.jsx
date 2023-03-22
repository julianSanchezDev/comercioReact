import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import NavBar from './components/NavBar';
import Cart from './components/Cart';
<<<<<<< HEAD
import { ShoppingCartProvider } from './components/contexts/ShoppingCartContext';
=======
>>>>>>> c850d7706d86fe399eb917a947e6e3f3508d8c37

function App() {
  return (

<<<<<<< HEAD
   <ShoppingCartProvider>
=======
>>>>>>> c850d7706d86fe399eb917a947e6e3f3508d8c37
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/catalogo" element={<ItemListContainer />} />
        <Route exact path="/category/:category" element={<ItemListContainer />} />
        <Route exact path="/item/:id" element={<ItemDetailContainer />} />
        <Route exact path="/catalogo/item/:id" element={<ItemDetailContainer />}/>
<<<<<<< HEAD
        <Route path="/category/:category/item/:id" element={<ItemDetailContainer />} />
        <Route exact path ="/cart" element={<Cart/>}/>
      </Routes>
    </BrowserRouter>
    </ShoppingCartProvider>
=======
        <Route exact path ="/cart" element={<Cart/>}/>
      </Routes>
    </BrowserRouter>
>>>>>>> c850d7706d86fe399eb917a947e6e3f3508d8c37
  );

}


export default App;

