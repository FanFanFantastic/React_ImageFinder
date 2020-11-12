import logo from './logo.svg';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import NavBar from './components/navbar/NavBar';
import SearchBar from './components/searchbar/SearchBar';


function App() {
  return (
    <div className="App">
      <MuiThemeProvider>
          <NavBar/>
          <SearchBar/>
      </MuiThemeProvider>    
    </div>


  );
}

export default App;
