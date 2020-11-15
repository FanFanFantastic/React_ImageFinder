import logo from './logo.svg';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import NavBar from './components/navbar/NavBar';
import SearchBar from './components/searchbar/SearchBar';

function App() {
  return (
    <MuiThemeProvider>

      <div className="App">
            <NavBar/>
            <SearchBar/>
      </div>
    </MuiThemeProvider>    
  );
}

export default App;
