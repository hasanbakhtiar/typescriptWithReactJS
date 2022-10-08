import {useState} from 'react';
const User = () => {
        type AuthUser = {
            name:string
            email:string
        }
    const [user, setUser] = useState<AuthUser>({} as AuthUser);

    const handleLogin = ()=>{
        setUser({
            name:'Hasan',
            email:'hasan@webluna.az'
        })
    }
 
  return (
    <div>
        <button onClick={handleLogin}>Login</button>
        <div>User name is{user.name}</div>
        <div>User email is{user.email}</div>
    </div>
  )
}

export default User