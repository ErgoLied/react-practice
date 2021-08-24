// GET http://<IP>/api/v1/cars
const url='http://91.201.233.14/api/v1/cars';
const getCars = () => {
    return fetch(url)
        .then((response) => response.json());
}
const setCar = (car) => {
    fetch(url, {
        method: 'POST',
        body: JSON.stringify(car),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
}
const editCar = (id, car) => {
    fetch((url+'/'+id), {
        method: 'PUT',
        body: JSON.stringify(car),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    }).then((response) => response.json())
}
const delCar = (id) => {
    fetch((url+'/'+id),{
        method: 'DELETE'
    }).then();
}

export {getCars, setCar, editCar, delCar};