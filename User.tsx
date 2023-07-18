
import { useContext } from "react"
import { UserContext} from "./UserContext"

export   let userName=""
export let passWord=""
 
export const handleEmail=(event: React.ChangeEvent<HTMLInputElement>)=>
{
  userName=(event.target.value);  
}
    // globalThis.userName=userName;
    // globalThis.pwd=pwd;
  const handlePassword=(event: React.ChangeEvent<HTMLInputElement>)=>
  {
 passWord=(event.target.value);
 console.log("log",{passWord});
  }
      
export const User = () => 
{
    const userContext = useContext(UserContext)
    const HandleLogin = () => {  
        console.log('username=',{userName});
        console.log("pwd",{passWord});
            userContext.setUser({
                name: userName,         
                email: passWord,             
            })
             const us=JSON.stringify(userName);
            const pw=JSON.stringify(passWord);
            console.log("usertype",typeof(us));
            console.log("pwdtype",typeof(pw));
            console.log("username",{us});
             console.log("pwd",{pw});  
             if (!(us.length === 0) || (!(pw.length === 0))) {
              // alert("Logged Successfully")     
              }
              else
                // alert("Fields are required");
                console.log("User",`${us}`)
                
  }
    const onClear = () => 
  {       
            userContext.setUser(null);
        
  }
    return(       
      
    <div>
    
        <label htmlFor ="UserName">UserName</label> 
    
        <input  placeholder="Enter your Name" type="text" onChange={(e:any)=> handleEmail(e)}/>
      
        <label htmlFor ="Password">PassWord</label> 

        <input className="password" placeholder="Enter your password"
               type="password" onChange={(e:any)=> handlePassword(e)}/>        
     <div>       
            
          <button onClick={()=>{HandleLogin()}}>Login</button>

          <button type="button" onClick={onClear}>clear</button>
      
  {/* <div>User "{userContext.UserSt?.name }" logged Successfully...</div> */}
 
      </div>
      </div>
          
    )
}