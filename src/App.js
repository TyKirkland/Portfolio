import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import { useNavigate, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';

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

        <Route path='/about' element={<AboutPage />}/>

        <Route path='/projects' element={<ProjectsPage />}/>

        <Route path='/contact' element={<ContactPage />}/>

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
