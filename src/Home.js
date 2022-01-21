
import { useState } from 'react';

function Home() {
  const [home, setHome] = useState({
    
    about: '',
    clicked: false
  });

  const handleChange = event => {
   
    setHome({ ...home, [event.target.id]: event.target.value });
  }

  const handleSubmit = event => {
    event.preventDefault();
    console.log(home);
  };

  return (
    <form onSubmit={handleSubmit} className=" home" true>
      <label htmlFor="about">about:</label>
      <input
        id="about"
        onChange={handleChange}
        value={home.about}
        type="about"
      />

      <button>click here</button>

    </form>
  );
}

 export default Home;