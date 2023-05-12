import './App.css';
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DashboardComponent from './Components/DashboardComponent';
import UserComponent from './Components/UserComponent';
import order_slice from './redux/order_slice';
import SingleUserComponent from './Components/SingleUserComponent';



const store = configureStore({
  reducer: {
    orders : order_slice
  }
})

function App() {
  return (
    <Provider store = {store}>
        <BrowserRouter>
          <Routes>
            <Route exact path='/' element={<DashboardComponent/>}/>
            <Route exact path='/user' element={<UserComponent/>}/>
            <Route exact path='/user/:id' element={<SingleUserComponent/>}/>
          </Routes>
        </BrowserRouter>
    </Provider>
  );
}

export default App;
