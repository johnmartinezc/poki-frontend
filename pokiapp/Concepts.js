import { useState } from "react";
import ReactDOM from "react-dom/client";

const UserContect = createContect()

function Component1(){
    const [user, setUser] = useState("Jesse Hall");
    const [city, setCity] = useState("New York");
    
    return (
        <>
        <h1>{`Hello ${user}!`}</h1>
        <Component2 user={user} city={city} />
        </>
    );
}

function Component2({ user }) {
    return (
      <>
        <h1>Component 2</h1>
        <Component3 user={user} />
      </>
    );
  }
  
  function Component3({ user }) {
    return (
      <>
        <h1>Component 3</h1>
        <Component4 user={user} />
      </>
    );
  }
  
  function Component4({ user }) {
    return (
      <>
        <h1>Component 4</h1>
        <Component5 user={user} />
      </>
    );
  }
  
  function Component5({ user }) {
    return (
      <>
        <h1>Component 5</h1>
        <h2>{`Hello ${user} again!`}</h2>
      </>
    );
  }
  
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<Component1 />);