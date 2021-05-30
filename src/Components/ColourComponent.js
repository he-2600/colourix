import { useState } from "react";
import { colourData } from "./colourData";
import Button from "./Button";

import "./ColourComponent.css";

const ColourComponent = () => {
    const [colours, setColours] = useState(colourData);

    const styles = {
        backgroundColor: "#EECC51",
    };

    const productItem = colours.map((el) => (
        <div key={el.id} className="colourItemContainer">
            <div
                className="productImg"
                style={{ background: "#" + el.colour }}
            ></div>
            <div className="dataContainer">
                <h3 className="productTitle">{el.name}</h3>

                <div className="unitsContainer">
                    <p>{el.volume} ml</p>
                    <p>€ {el.price}</p>
                </div>
            </div>
            <select className="selectMenu">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
            </select>

            <Button style={styles} text="Add to cart" />
        </div>
    ));

    return <>{productItem}</>;
};

export default ColourComponent;