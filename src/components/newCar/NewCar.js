import {useState} from "react";
import {addCar} from "../../services/cars.api";

export default function NewCar() {

    const [formState, setFormState] = useState({model: '', price: '', year: ''});
    const onFormInputChange = (ev) => {
        setFormState({...formState, [ev.target.name]: ev.target.value});
    }

    const saveCar = () => {
        addCar(formState).then();

    }

  return (
    <div>
        <form>
            <input type="text" name={'model'}   value={onFormInputChange.model} onChange={onFormInputChange} placeholder={'model'} maxLength={20}/>
            <input type="number" name={'price'} value={onFormInputChange.price} onChange={onFormInputChange} placeholder={'price'} min={1}/>
            <input type="number" name={'year'}  value={onFormInputChange.year}  onChange={onFormInputChange} placeholder={'year'}  min={1990} max={2021}/>
            <button onClick={saveCar}>add new car</button>
        </form>
    </div>
  );
}