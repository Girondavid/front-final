import { FormEvent, useState} from "react";
import {appies} from '../config';
type pros = {
    email: { value: string },
    password_user: { value: string };
}
type Propy ={
    message: string;
    name_user: string;
}
const AppUser = () => {
    const [data, setData] = useState<Propy>()
    const Handlsubmit = async (event: FormEvent<HTMLFormElement>)=> {
        event.preventDefault();
        const { email, password_user } = event.target as typeof event.target & pros;
        const GetUser = async ():Promise<Propy> => await (await fetch(appies.URLLOGIN.toString(), {
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'POST',
                body: JSON.stringify({
                    email: email.value,
                    password: password_user.value
                })
            })).json();
     setData(await GetUser.call(""));
    }
    return (
        <div className="container">
            <div className="row justify-content-center align-items-center">
                <div className="col-4">
                    <div className="card">
                        <div className="card-body">
                            <form onSubmit={event => {Handlsubmit(event)}} autoComplete="off">
                                <div className="form-group">
                                    <label htmlFor="email" className="form-group">Email</label>
                                </div>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="email"
                                        id="email"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password_user" className="form-group">Contraseña</label>
                                </div>
                                <div className="form-group">
                                    <input
                                        type="password"
                                        className="form-control"
                                        name="password_user" 
                                        id="password_user"
                                        />
                                </div>
                                <button type="submit" id="sendlogin" className="btn btn-primary">Ingresar</button>
                                <span>{data?.message}</span>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AppUser;