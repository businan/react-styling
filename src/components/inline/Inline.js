import { styleObject } from "./styles";

const myStyles = {
    color: "red",
    backgroundColor: "#e0e0e0",
    fontWeight: "lighter",
};

/* const styleObject = {
    parag: {
        color: "blue",
        fontSize: "20px",
        fontWeight: "bolder",
    },
    div: {
        backgroundColor: "#b0b0b0",
    },
}; */

const Inline = () => {
    return (
        <div>
            <h1
                style={{
                    color: "purple",
                    backgroundColor: "#e0e0e0",
                    fontWeight: "lighter",
                }}
            >
                Hello From inline component
            </h1>

            <h2 style={myStyles}> Inline comp with Contant Object </h2>

            <div style={styleObject.div}>
                <h2>Inline usage with third option</h2>
                <p style={styleObject.parag}>Styling with third option</p>
            </div>
        </div>
    );
};

export default Inline;
