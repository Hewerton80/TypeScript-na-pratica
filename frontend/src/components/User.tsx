import React from "react";

interface IUser {
    name:string;
    email:string;
}
interface Props {
    user:IUser;
}
const User:React.FC<Props> = ({user,children})=>{

    return(
        <div >
            <p>
                <strong>Nome: </strong>{user.email}<br/>
                <strong>Email: </strong>{user.email}<br/>
            </p>
        </div>
    )
}
export default User