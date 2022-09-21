import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import HomeComponent from "./Component/Home/home"

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/" element={<HomeComponent />}></Route>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
