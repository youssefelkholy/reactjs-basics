import { ChangeEvent, useState } from "react";
import { IUserData } from "../../Interfaces";
import './index.scss';
import { formInputList } from "../../data";



interface IProps {
    setIsLoggedIn: ( val: boolean ) => void;
    userData: IUserData;
    setUserData: ( user: IUserData ) => void;
}

const LoginForm = ( { setIsLoggedIn, userData, setUserData }: IProps ) => {
    // Handlers
    const onChangeHandler = ( event: ChangeEvent<HTMLInputElement> ) => {
        const { name, value } = event.target;
        setUserData( { ...userData, [ name ]: value } );
    };
    const [ inputArr, setInputArr ] = useState( formInputList );
    console.log( inputArr );

    // renders
    const formInputRender = inputArr.map( ( input, index ) => (
        <div key={ input.id } style={ { display: "flex", alignItems: "center", justifyContent: "flex-start" } }>
            <div className="input-wrapper">
                <label htmlFor={ input.id }>{ input.label } : </label>
                <input type={ input.type } name={ input.name } id={ input.id } value={ userData[ input.name ] } onChange={ onChangeHandler } />
            </div>
            <button onClick={ () => {
                const filtered = inputArr.filter( input => input.id !== formInputList[ index ][ "name" ] );
                setInputArr( filtered );

            } } className="btn-remove">x</button>
        </div >
    ) );

    return (
        <form onSubmit={ ( e ) => e.preventDefault() }>
            { formInputRender }
            <button className="btn" onClick={ () => setIsLoggedIn( true ) }>LOGIN</button>
        </form>
    );
};

export default LoginForm;
