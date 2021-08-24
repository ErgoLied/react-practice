const url = 'http://91.201.233.14/api/v1/cars'; // OLD URL: http://195.72.146.25/

const getCars = () => {
    return fetch(url)
        .then((response) => response.json());
}

const addCar = (car) => {
    return fetch(url, {
        method: 'POST',
        body: JSON.stringify(car),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json());
}

const editCar = (car, id) => {
    return fetch(url + '/' + id, {
        method: 'PUT',
        body: JSON.stringify(car),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json());
}

export {getCars, addCar, editCar}