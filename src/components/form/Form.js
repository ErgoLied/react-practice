import {useEffect, useState} from "react";
import Car from "../car/Car";
import {delCar, editCar, getCars, setCar} from "../../services/cars.service";

export default function Form() {

    //get and show cars
    const [cars, setCars] = useState([]);
    useEffect(() => {
        getCars().then(value => setCars([...value]));
    }, [cars]);

    //edit form
    const [formState, setFormState] = useState({model: '', price: '', year: ''});
    const onFormInputChange = (ev) => {
        setFormState({...formState, [ev.target.name]: ev.target.value});
    }

    //set car from form to DB
    const save = (ev) => {
        ev.preventDefault();
        if (formState.id) {
            editCar(formState.id, formState);
            setFormState({model: '', price: '', year: ''});
        } else {
            setCar(formState);
            setFormState({model: '', price: '', year: ''});
        }
    }

    //steal car from DB :P
    const steal = (id) => {
        delCar(id);
        let filterCars = cars.filter(value => value.id !== id)
        setCars([...filterCars])
    }
    const edit = (item) => {
        window.scrollTo(0, 0);
        setFormState({...formState, model: item.model, price: item.price, year: item.year, id: item.id});
    }


    return (
        <div>
            <form>
                <input type="text" name={'model'} value={formState.model} onChange={onFormInputChange} maxLength={20}/>
                <input type="number" name={'price'} value={formState.price} onChange={onFormInputChange} min={1}/>
                <input type="number" name={'year'} value={formState.year} onChange={onFormInputChange} min={1990}
                       max={2021}/>
                <button onClick={save}>save car</button>
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