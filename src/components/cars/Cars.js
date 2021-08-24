import {useEffect, useState} from "react";
import Car from "../car/Car";
import {getCars} from "../../services/cars.api";

export default function Cars() {

    const [cars, setCars] = useState([]);
    useEffect(() => {
        getCars().then(value => setCars([...value]));
    },[]);

  return (
    <div>
        {cars.map(value => <Car key={value.id} item={value}/>)}
    </div>
  );
}

