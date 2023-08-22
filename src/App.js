import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import { useNavigate, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';

function App() {

  let routes;

  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src='' className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //     </header>
  //   </div>
  // );

  routes = (
    <>

      <Routes>

        <Route path='/' element={<HomePage />}/>

      </Routes>

    </>
  )

  return (
    <div className="App">
      
      <header className="">
        <NavBar/>
      </header>

      <main>
        {routes}
      </main>

    </div>
  );
}

export default App;
