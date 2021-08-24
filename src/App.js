import './App.css';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import Cars from "./components/cars/Cars";
import NewCar from "./components/newCar/NewCar";
import EditCar from "./components/editCar/EditCar";

function App() {
    return (
        <Router>
            <div className={'wrap'}>
                <Link to={'/cars'}>cars list</Link>
                <Link to={'/create-car'}>add new car</Link>
                <Link to={'/update-car'}>edit car</Link>
            </div>

            <Route path={'/cars'} component={Cars} />
            <Route path={'/create-car'} component={NewCar} />
            <Route path={'/update-car'} component={EditCar} />
        </Router>
    );
}

export default App;
