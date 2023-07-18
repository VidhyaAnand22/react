

import { Link } from 'react-router-dom';
import {  userName ,passWord} from '../context/User';



  export const Login = () => {
    
  const us=JSON.stringify(userName);
  const pw=JSON.stringify(passWord);
  console.log("user",{userName});
  console.log("user",{us});
  console.log("user",{pw});
 


   const Check = () => {
    // if (us=== "" || pw === "") {
    //   alert("Fields are required");
    //   return;
    // }
    // else
    //   navigate('/DashBoard')
    //   console.log("dgsdgdg",`${userName}`)
    //   return;
 
     }
  
  return (
    <div className="Login">
      
 
 

        <div className="logstyle">
       <p>Login</p>
      
        
       

       
        </div>
        <Link to="/">Back</Link>
    </div>
  );
  }
  
export default Login;