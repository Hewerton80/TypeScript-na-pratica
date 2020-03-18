import React,{useEffect,useState} from 'react';
import api from "./services/api"
import User from "./components/User";

interface IUser {
  name:string;
  email:string;
}
const App:React.FC = ()=> {
  const [users,setUsers] = useState<IUser[]>([])
  useEffect(()=>{
    getUsers()
  },[])

  async function getUsers(){
    try{
      const response = await api.get<IUser[]>("/users");
      setUsers(response.data)
    }
    catch(err){
      console.error(err)
    }
  }

  return (
    <div className="app">
      {users.map(user=>
        <User 
          key={user.email}
          user={user}
        />
      )}
    </div>
  )
}

export default App;
