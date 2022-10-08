import {useState} from 'react';
const UserOne = () => {
        type AuthUserOne = {
            name:string
            email:string
        }
    const [userOne, setUserOne] = useState<AuthUserOne | null>(null);

    const handleLogin = ()=>{
        setUserOne({
            name:'Hasan',
            email:'hasan@webluna.az'
        })
    }
    const handleLogout = ()=>{
        setUserOne(null)
    }
  return (
    <div>
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleLogout}>Logout</button>
        <div>UserOne name is{userOne?.name}</div>
        <div>UserOne email is{userOne?.email}</div>
    </div>
  )
}

export default UserOne