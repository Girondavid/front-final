
interface appis{
    readonly URLCART: string,
    readonly URLLOGIN: string,
    readonly URLREGIST: string;
}

class Appis implements appis{
    public readonly URLCART: string;
    public readonly  URLLOGIN: string;
    public readonly  URLREGIST: string;

    constructor(){
    this.URLCART='http://localhost:4000/';
    this.URLLOGIN='http://localhost:4000/sing_user';
    this.URLREGIST='http://localhost:4000/user';
    }
}
export const appies = new Appis();
