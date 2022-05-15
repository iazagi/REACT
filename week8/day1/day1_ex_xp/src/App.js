import logo from './logo.svg';
import './App.css';
import UserFavoriteColors from './UserFavoriteColors';
import User from './User.js';
import Exercize4 from './Exercize4';
import './Exercize4.css';
function App() {

const myelement = <h1>i love jsx! </h1>;
let sum = 5+5;
const user = {
  first_name: 'Bob',
  last_name: 'Dylan',
  fav_animals : ['Horse','Turtle','Elephant','Monkey']
};
const mycolors = ['blue','green','red','yellow'];

  return (
    <div className="App">
      <header className="App-header">
      <div>{myelement}</div>
      <div>"React is {sum} times better with JSX"</div>
        <img src={logo} className="App-logo" alt="logo" />

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <User first_name={"israel"} last_name={"azagi"} />
        <h3>name:{user.first_name} and last name: {user.last_name}</h3>
        {
         user.fav_animals.map((item, i)=>{
          return (
          <UserFavoriteColors key={i}  fav_colors={item} />
          )
         })
        }

        <Exercize4/>
      </header>
    </div>
  );
}

export default App;
