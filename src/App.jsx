import { useState, useRef } from "react";
import "./App.css";

function App() {
  /*
  const socialMediaOptions = [
    {
      id: 1,
      name: "Facebook",
      value: 0.46,
    },
    {
      id: 2,
      name: "Twitter",
      value: 2,
    },
    {
      id: 3,
      name: "Reddit",
      value: 10,
    },
    {
      id: 4,
      name: "awdd",
      value: 5,
    },
  ]; */
  const [socialMedia, setSocialMedia] = useState([]);
  const inputField = useRef(null);
  const tester = useRef(null);
  tester.value = parseInt();

  const testerTo = useRef(null);
  testerTo.value = parseInt();

  function handleCalc(e) {
    setSocialMedia(e.target.value, 10);
  }
  function submit(e) {
    e.preventDefault();
    console.log(inputField.current.value * tester.current.value);
    console.log(inputField.current.value * testerTo.current.value);
  }

  /*
  function isTwitter() {
    testerTo.value = 2;
  }
  function isFacebook() {
    tester.value = 0.46;
  } */

  return (
    <div className="App">
      <form>
        <div className="form-control">
          <label htmlFor="social-media">Sociale Medie</label>
          <select onChange={handleCalc}>
            <option value="0.46" ref={tester}>
              Facebook
            </option>
            <option value="2" ref={testerTo}>
              Twitter
            </option>
            <option value="reddit">Reddit</option>
          </select>
        </div>
        <div className="form-control">
          <label htmlFor="input-number">Antal timer</label>
          <input
            required
            type="number"
            name="number"
            id="input-number"
            ref={inputField}
          />
          <button onClick={submit}>Udregn</button>
        </div>
      </form>
    </div>
  );
}

/* 
  <form>
        <div className="form-control">
          <label htmlFor="social-media">Sociale Medie</label>
          <select onChange={handleCalc}>
            <option value="0.46">Facebook</option>
            <option value="2">Twitter</option>
            <option value="reddit">Reddit</option>
          </select>
        </div>
        <div className="form-control">
          <label htmlFor="input-number">Antal timer</label>
          <input
            required
            type="number"
            name="number"
            id="input-number"
            ref={inputField}
          />
          <button onClick={submit}>Udregn</button>
        </div>
      </form>*/
export default App;

/*  <div className="form-control">
          <label htmlFor="social-media">Sociale Medie</label>
          <select onChange={handleCalc}>
            {socialMediaOptions.map((socialMedia) => (
              <option
                ref={tester}
                key={socialMedia.value}
                value={socialMedia.value}
              >
                {socialMedia.name}
              </option>
            ))}
          </select>
        </div> */
