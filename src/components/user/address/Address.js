import Geo from "../geo/Geo";

function Address({street,suite,city,zipcode,geo}) {
    return (

        <div className={'address'}>
            <p>street: {street}</p>
            <p>suite: {suite}</p>
            <p>city: {city}</p>
            <p>zipcode: {zipcode}</p>
            <p>geo:
                <Geo {...geo}/>
            </p>
        </div>
    );
}

export default Address;