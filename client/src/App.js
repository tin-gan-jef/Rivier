import React, { useContext } from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Rule from './components/rule/Rule';
import About from './pages/about/About';
import { Context } from './pages/admin/components/context/Context';
import Admin from './pages/admin/pages/admin/Admin';
import View from './pages/admin/pages/book/View';
import Bookings from './pages/admin/pages/bookings/Bookings';
import Signin from './pages/admin/pages/signin/Signin';
import Book from './pages/book/Book';
import Home from './pages/home/Home';
import Locate from './pages/locate/Locate';


export default function App() {
  const { user } = useContext(Context)
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/map" element={<Locate />} />
      <Route path="/about" element={<About />} />
      <Route path="/rule" element={<Rule />} />
      <Route path="/book" element={<Book />} />

      <Route path="/signin" element={<Signin />} />
      <Route path="/admin" element={user ? <Admin /> : <Signin />} />
      <Route path="/bookings" element={<Bookings />} />
      <Route path="/bookings/:id" element={<View />} />
    </Routes>
  </BrowserRouter>
  )
}
