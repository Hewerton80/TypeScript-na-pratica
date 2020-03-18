import {Request,Response} from "express";
import EmailService from "../services/EmailService"

const users = [
    {
        name:"Hewerton Adão",
        email:"hewerton80@gmail.com"
    }
]
class UserController {
    index(req: Request,res: Response){
        return res.json(users);
    }
    async create(req: Request,res: Response){
        const emailservice = new EmailService();
        emailservice.sendEmail({
            to:{
                name:"Hewerton",
                email:"hewerton"
            },
            message:{
                subject:"Bem-vindo o sistem",
                body:"Seja bem-vindo"
            }
        })
        return res.send();
    }
}
 
export default new UserController();
