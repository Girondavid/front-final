import { FormEvent, useState } from "react";
import {appies} from '../config';
type props = {
    name: {value: string},
    apellido: {value: string},
    email: { value: string },
    password: { value: string };
}
type propy ={
    User: string;
    error: string;
}

const UserSing_in = () =>{
    const [user, setUser] = useState<propy>()
    const handleSubmit = async(event:FormEvent<HTMLFormElement>) =>{
        event.preventDefault();
        const {name, apellido,email,password} = event.target as typeof event.target & props;
        const respons = async():Promise<propy> => await (await fetch(appies.URLREGIST.toString(), {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify({
                name: name.value,
                apellido: apellido.value,
                email: email.value,
                password: password.value
            })
        })).json();
        setUser(await respons.call(""));
    }
    return(
        <div className="container">
        <div className="row justify-content-center align-items-center">
            <div className="col-4">
                <div className="card">
                    <div className="card-body">
                        <form onSubmit={event => {handleSubmit(event)}} autoComplete="off">
                        <div className="form-group">
                                    <label htmlFor="name" className="form-group">Nombre</label>
                                </div>
                            <div className="form-group">
                                <input type="text" name="name" aria-required id="name"className="form-control"/>
                            </div>
                            <div className="form-group">
                                    <label htmlFor="apellido" aria-required className="form-group">Apellido</label>
                                </div>
                            <div className="form-group">
                                <input type="text" name="apellido" aria-required id="apellido" className="form-control"/>
                            </div>
                            <div className="form-group">
                                    <label htmlFor="email" className="form-group">Email</label>
                                </div>
                            <div className="form-group">
                                <input type="email" name="email" aria-required id="email" className="form-control"/>
                            </div>
                            <div className="form-group">
                                    <label htmlFor="password" className="form-group">Contraseña</label>
                                </div>
                            <div className="form-group">
                                <input type="password" id="password" aria-required className="form-control" name="password"/>
                            </div>
                            <button type="submit" id="sendlogin" className="btn btn-primary">Registrar</button>
                            <span>{user?.error||user?.User}</span>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}
export default UserSing_in;