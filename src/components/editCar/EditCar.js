import {useEffect, useState} from "react";
import {editCar, getCars} from "../../services/cars.api";

export default function EditCar() {

    //steal cars from db to form and set into another form
    const [cars, setCars] = useState([]);
    const [car, setCar] = useState({});
    const [carOfId, setCarOfId] = useState(null);

    useEffect(() => {
        getCars().then(value => setCars([...value]));
    },[]);

    const selectedCarById = ({target}) => {
        setCarOfId(target.value);
        setCar(cars.find(item => item.id == target.value));
    }

    const onFormInputChange = (ev) => {
        setCar({...car, [ev.target.name]: ev.target.value});
    }

    function editCarInfo() {
        editCar(car, carOfId).then();
    }

    return (
    <div>
        <form>
            <select onChange={selectedCarById}>
                <option selected disabled>select car</option>
                {cars.map(value =>
                    <option key={value.id} value={value.id}>
                        {value.id} - {value.model}
                    </option>
                )}
            </select>
        </form>
        {carOfId &&
        <form onSubmit={editCarInfo}>
            <input type="text"   name={'model'} value={car.model} onChange={onFormInputChange} placeholder={'model'} maxLength={20}/>
            <input type="number" name={'price'} value={car.price} onChange={onFormInputChange} placeholder={'price'} min={1}/>
            <input type="number" name={'year'}  value={car.year}  onChange={onFormInputChange} placeholder={'year'}  min={1990} max={2021}/>
            <input type="submit" value={'save changes'}/>
        </form>
        }
    </div>
  );
}