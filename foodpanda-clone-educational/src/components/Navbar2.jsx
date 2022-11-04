import {Link } from "react-router-dom";
import {useState} from "react";
import "../styles/navbar2.css";

export default function NavbarTwo(){
    const [colorChange, setColorchange] = useState(false);

    const changeNavbarColor = () => {
      if (window.scrollY > 0) {
        setColorchange(true);
      } else {
        setColorchange(false);
      }
    };
    window.addEventListener("scroll", changeNavbarColor);

    return(
      
        <div
        className={colorChange?"truechange":"falsechange"}
        style={{
          backgroundColor: "white",
          width: "100%",
          padding: "8px 0px",
          height: "66px",
          position: "fixed",
          display: "flex",
          alignitems: "center",
          justifyContent: "space-between",
          color: "#D70F64",
          fontFamily: `"museo-sans", sans-serif`,
          fontSize: "16px",
          fontWeight: "lighter",
        }}
      >
        <div
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div className="logo" style={{marginLeft:"20px"}}>
            <img
              className="logoimg" style={{width:"172.64px",height:"40px"}}
              src="https://www.foodpanda.com/wp-content/uploads/2019/12/food-panda-logo-vector.png"
              alt="FoodPanda"
            />
          </div>
  
          <div className="side_nav2 nav2">
            <div style={{ width: "89px",height:"30px",borderLeft:"1px solid lightgray",borderRight:"1px solid lightgray" }}>
              <Link
                style={{
                  color: "#707070",
                  fontWeight: "lighter",
                  textDecoration: "none",
                  fontSize:"12px"
                }}
              >
                Lo|En
              </Link>
            </div>
            <div style={{ width: "100px" }}>
              <Link style={{ color: "#333333",textDecoration:"none" }}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="#D70F64" width="24" height="24" viewBox="0 0 512 512"><path d="M399 384.2C376.9 345.8 335.4 320 288 320H224c-47.4 0-88.9 25.8-111 64.2c35.2 39.2 86.2 63.8 143 63.8s107.8-24.7 143-63.8zM512 256c0 141.4-114.6 256-256 256S0 397.4 0 256S114.6 0 256 0S512 114.6 512 256zM256 272c39.8 0 72-32.2 72-72s-32.2-72-72-72s-72 32.2-72 72s32.2 72 72 72z"/></svg> <span style={{fontSize:"12px",fontWeight:'bold',color:"#000",textDecoration:"none"}}>LOGIN</span>
              </Link>
            </div>
            <div style={{ width: "60px",height:"30px",borderLeft:"1px solid lightgray" }}>
              <Link style={{ color: "#D70F64" }}>
              <svg xmlns="http://www.w3.org/2000/svg" class="svg-stroke-container" fill="#D70F64" width="24" height="24" aria-hidden="true" focusable="false">
    <path fill="#70707 0"d="M12 2.75a4.75 4.75 0 014.744 4.5h3.103a1 1 0 01.99 1.141l-1.714 12a1 1 0 01-.99.859H5.867a1 1 0 01-.99-.859l-1.714-12a1 1 0 01.99-1.141h3.103A4.75 4.75 0 0112 2.75zm5.559 14.75H6.44a.4.4 0 00-.396.457l.208 1.45a.4.4 0 00.396.343H17.35a.4.4 0 00.396-.343l.208-1.45a.4.4 0 00-.396-.457zm1.25-8.75H5.19a.4.4 0 00-.396.457l.922 6.45a.4.4 0 00.396.343h11.775a.4.4 0 00.396-.343l.922-6.45a.4.4 0 00-.396-.457zM12 4.25a3.251 3.251 0 00-3.193 2.638.305.305 0 00.3.362h5.796a.297.297 0 00.292-.35A3.251 3.251 0 0012 4.25z"></path>
</svg>
              </Link>
            </div>
           
          </div>
        </div>
      </div>
    )
}