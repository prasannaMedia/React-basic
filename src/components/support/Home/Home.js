import { Link } from 'react-router-dom';
import '../../../App.css';
import Support from '../Support'

function Home() {
const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
  return (
  <div className="App">
    Home page
   <Link to="/support">
     <button className="btn">Customer support
     </button></Link> 
     <p>{person.firstName}</p>
     <p>{person.lastName}</p>
     <p>{person.age}</p>
     <Support data={person.firstName}/>
  </div>
  );
}

export default Home;
