import {useEffect, useState} from "react";
import {getCars} from "../../services/cars.api";

export default function EditCar() {

    //steal cars from db to form and set into another form
    const [cars, setCars] = useState([]);
    const [carOfId, setCarOfId] = useState(null);
    const [formState, setFormState] = useState({model: '', price: '', year: ''});

    useEffect(() => {
        getCars().then(value => setCars([...value]));
    },[]);

    const selectedCarById = ({target}) => {
        setCarOfId(target.value);
        console.log(target.value);

    }

    const editCar = (ev) => {
        ev.preventDefault();
        console.log('PUT request');
        //PUT cars from form
    }

  return (
    <div>
        <form>
            <select onChange={selectedCarById}>
                {cars.map(value =>
                    <option key={value.id} value={value.id}>
                        {value.id} - {value.model}
                    </option>
                )}
            </select>
        </form>
        {carOfId &&
        <form>
            <input type="text" name={'model'}   value={carOfId.model} placeholder={'model'} maxLength={20}/>
            <input type="number" name={'price'} value={carOfId.price} placeholder={'price'} min={1}/>
            <input type="number" name={'year'}  value={carOfId.year}  placeholder={'year'}  min={1990} max={2021}/>
            <button onClick={editCar}>save changes</button>
        </form>
        }
    </div>
  );
}