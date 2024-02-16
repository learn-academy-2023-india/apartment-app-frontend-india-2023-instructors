import {Routes, Route } from "react-router-dom"
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import { useState } from 'react'
import mockUsers from './mockUsers'
import mockApartments from './mockApartments'
import Home from "./pages/Home"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"
import ApartmentIndex from "./pages/ApartmentIndex"
import ApartmentProtectedIndex from "./pages/ApartmentProtectedIndex"
import ApartmentShow from "./pages/ApartmentShow"
import ApartmentEdit from "./pages/ApartmentEdit"
import NotFound from "./pages/NotFound"
import ApartmentNew from "./pages/ApartmentNew"


const App = () => {
  const [currentUser, setCurrentUser] = useState(mockUsers[0])
  const [apartments, setApartments] = useState(mockApartments)

  return (
    <>
      <Header currentUser={currentUser}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/apartmentindex" element={<ApartmentIndex apartments={apartments}/>} />
        <Route path="/myapartments" element={<ApartmentProtectedIndex />} />
        <Route path="/apartmentshow/:id" element={<ApartmentShow apartments={apartments}/>} />
        <Route path="/apartmentnew" element={<ApartmentNew currentUser={currentUser} />} />
        <Route path="/apartmentedit/:id" element={<ApartmentEdit currentUser={currentUser} apartments={apartments} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
