import PFP from './assets/pfp.jpg';
const style_img = {
    width: "150px",
    height: "150px",
    borderRadius: "50%",
};
const style_h3 = {
    color: "#",
    marginBottom: '0px',
};
const style_p = {
    fontSize: '14px',
};
const style_div = {
    border: "1px solid black",
    borderRadius: "10px",
    maxWidth: "200px",
    textAlign: "center",
    display: "inline-block",
    padding: "10px",
    marginLeft: "20px",
    marginBottom: "20px",
};

function Card() {
    return (
        <>
            <div style={style_div}>
                <img style={style_img} src={PFP} alt="Placeholder Image"></img>
                <h3 style={style_h3}>Moon</h3>
                <p style={style_p}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit veritatis non aut, dignissimos commodi incidunt officia nostrum doloribus dolor perspiciatis.</p>
            </div>
        </>
    );
}

export default Card;