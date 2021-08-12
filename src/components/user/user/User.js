import Address from "../address/Address";
import Company from "../company/Company";

function User({id, name, username, email, address, phone, website, company}) {
    return (
        <div className={'user'}>
            <p>id: {id}</p>
            <p>name: {name}</p>
            <p>username: {username}</p>
            <p>email: {email}</p>
            <p>address:
                <Address {...address}/>
            </p>
            <p>phone: {phone}</p>
            <p>website: {website}</p>
            <p>company:
                <Company {...company}/>
            </p>
            <hr/>
        </div>
    );
}

export default User;