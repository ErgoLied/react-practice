import {useEffect, useState} from "react";
import Car from "../car/Car";
import {delCar, editCar, getCars, setCar} from "../../services/cars.service";

export default function Form() {
    //edit form
    let [formState, setFormState] = useState({model: '', price: '', year: ''});
    let onFormInputChange = (ev) => {
        setFormState({...formState, [ev.target.name]: ev.target.value});
    }

    //set car from form to DB
    let save = () => {
        setCar(formState);
    }

    //steal car from DB :P
    let steal = (id) => {
        delCar(id);
        let filterCars = cars.filter(value => value.id !== id)
        setCars([...filterCars])
    }
    let edit = (item) => {
        setFormState({...formState, model: item.model, price: item.price, year: item.year, id: item.id});
    }
    let saveEdit = () => {
        editCar(formState.id, formState);
    }

    //get and show cars
    let [cars, setCars] = useState([]);
    useEffect(() => {
        getCars().then(value => setCars([...value]));
    },[]);

  return (
    <div>
        <form>
            <input type="text"   name={'model'}  value={formState.model} onChange={onFormInputChange} maxLength={20}/>
            <input type="number" name={'price'}  value={formState.price} onChange={onFormInputChange} min={1}/>
            <input type="number" name={'year'}   value={formState.year}  onChange={onFormInputChange} min={1990} max={2021}/>
            <button onClick={save}>add car</button>
            <button onClick={saveEdit}>save edit</button>
        </form>

        <div>
            <br/>
            <div className={'title-cars'}>
                <div>id -></div>
                <div className={'model'}>model -></div>
                <div>price -></div>
                <div>year</div>
            </div>
            {cars.map(value => <Car key={value.id} item={value} edit={edit} steal={steal}/>)}
        </div>
    </div>
  );
}