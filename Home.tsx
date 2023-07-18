import { useNavigate } from "react-router-dom";


export function Home(){
 const navigate = useNavigate();

 const Login = () => {


    navigate('/User'); 
  };
 
const Contact = () => {

 
  navigate('/Contact'); 
};


return (
  <div className="App">
    <header className="App-header">
      <p>Welcome to Starter HomePage</p>
      
      <button onClick={Login}>Login</button>
      <br></br>
      <button onClick={Contact}>Contact</button>
      
    </header>
  </div>
  
);
}

export default Home;