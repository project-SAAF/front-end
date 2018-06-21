import { Telephone } from "./telephone";
import { Address } from "./address";


export class Applicant {
    name:String;
    dtNasc: String;
    rg:String;
    cpf:String;
    dtCad:String;
    email:String;
    telephones: Array<Telephone>;
    address: Array<Address>;
}