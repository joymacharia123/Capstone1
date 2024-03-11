import { useEffect, useState } from "react";
import "./index.css";
import { Link } from "react-router-dom";

function App() {
  const [cuisines, setCuisine] = useState([]);
  const [selectedCuisine, setSelected] = useState("");
  const API_KEY = "bcdfc835076f4ba496619db374b88bda";
  const fetchCuisines = async () => {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&cuisine=${selectedCuisine}`
    );
    const data = await response.json();
    setCuisine(data.results);
    console.log(data.results);
  };

  const handleClick = (e) => {
    const cuisineChosen = e.target.innerText;
    setSelected(cuisineChosen);
  };

  useEffect(() => {
    fetchCuisines();
  }, [selectedCuisine]);

  return (
    <>
      <div className="main-edit2">
        <div className="menu-edit">
          <div className="menu-1">
            <div className="menu-2">Menu_________________________</div>
            <div className="menu-3">Check Our Tasty Menu</div>
          </div>
          <div>
            <Link to="/">
              <button className="menu-button">Home</button>
            </Link>
          </div>
        </div>
        <div className="main-edit">
          {selectedCuisine === "" ? (
            <>
              <div className="button-edit">
                <div className="mbutton-1">
                  <button onClick={handleClick}>African</button>
                  <button onClick={handleClick}>Italian</button>
                  <button onClick={handleClick}>Chinese</button>
                  <button onClick={handleClick}>French</button>
                  <button onClick={handleClick}>Asian</button>
                  <button onClick={handleClick}>American</button>
                  <button onClick={handleClick}>British</button>
                  <button onClick={handleClick}>Cajun</button>
                  <button onClick={handleClick}>Caribbean</button>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
                <div className="mbutton-2">
                  <button onClick={handleClick}>European</button>
                  <button onClick={handleClick}>Eastern European</button>
                  <button onClick={handleClick}>German</button>
                  <button onClick={handleClick}>Greek</button>
                  <button onClick={handleClick}>Indian</button>
                  <button onClick={handleClick}>Irish</button>
                  <button onClick={handleClick}>Japanese</button>
                  <button onClick={handleClick}>Jewish</button>
                  <button onClick={handleClick}>Korean</button>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
                <div className="mbutton-3">
                  <button onClick={handleClick}>Latin American</button>
                  <button onClick={handleClick}>Mediterranean</button>
                  <button onClick={handleClick}>Mexican</button>
                  <button onClick={handleClick}>Middle Eastern</button>
                  <button onClick={handleClick}>Nordic</button>
                  <button onClick={handleClick}>Southern</button>
                  <button onClick={handleClick}>Spanish</button>
                  <button onClick={handleClick}>Thai</button>
                  <button onClick={handleClick}>Vietnamese</button>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="button-edit">
                <div className="mbutton-1-results">
                  <button onClick={handleClick}>African</button>
                  <button onClick={handleClick}>Italian</button>
                  <button onClick={handleClick}>Chinese</button>
                  <button onClick={handleClick}>French</button>
                  <button onClick={handleClick}>Asian</button>
                  <button onClick={handleClick}>American</button>
                  <button onClick={handleClick}>British</button>
                  <button onClick={handleClick}>Cajun</button>
                  <button onClick={handleClick}>Caribbean</button>
                  <div>Load More</div>
                  <div></div>
                  <div></div>
                </div>
                <button onClick={()=>setSelected("")}>See more</button>
              </div>

              <div className="cuisines-edit">
                {cuisines.map((cuisine) => {
                  return (
                    <div key={cuisine.id}>
                      <div>
                        <img className="cuisine-image" src={cuisine.image} />
                      </div>
                      <h3 className="cuisine-text">{cuisine.title}</h3>
                    </div>
                  );
                })}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
