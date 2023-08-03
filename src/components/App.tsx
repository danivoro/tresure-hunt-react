import { MyComponent } from "./MyComponent";
import "./App.css";
import { createMap } from "./createMap";
// import { useState } from "react";

function App() {
    const treasureMap = createMap();

    // const [currentSquare, setCurrentSquare] = useState(11);

    return (
        <div className="App">
            <MyComponent />
            <div className="map-container">
                <div className="grid-container">
                    {treasureMap.map((num, index) => (
                        <div key={index} className="grid-item">
                            {num}
                        </div>
                    ))}
                </div>
            </div>
            <button>Next</button>
        </div>
    );
}

export default App;
