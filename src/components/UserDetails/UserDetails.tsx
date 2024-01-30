import { IUserData } from "../../Interfaces";

interface Iprops {
    user: IUserData;
}
const UserDetails = ( { user }: Iprops ) => {
    return (
        <div style={ { margin: "30px 165px" } }>
            <h3>UserName : { user.username }</h3>
            <h3>Email : { user.email }</h3>
            <h3>Address : { user.address }</h3>
            <h3>Phone : { user.phone }</h3>
        </div>
    );
};

export default UserDetails;
