import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import "../styles/foodlist.css";
import Card from 'react-bootstrap/Card';
import Placeholder from 'react-bootstrap/Placeholder';
import NavbarTwo from "../components/Navbar2";

const area = [
  {
    strArea: "American",
  },
  {
    strArea: "British",
  },
  {
    strArea: "Canadian",
  },
  {
    strArea: "Chinese",
  },
  {
    strArea: "Croatian",
  },
  {
    strArea: "Dutch",
  },
  {
    strArea: "Egyptian",
  },
  {
    strArea: "French",
  },
  {
    strArea: "Greek",
  },
  {
    strArea: "Indian",
  },
  {
    strArea: "Irish",
  },
  {
    strArea: "Italian",
  },
  {
    strArea: "Jamaican",
  }
];


export default function Foodlist() {
  const [foodlist, setFoodlist] = useState([]);
  const [loading,setLoading]=useState(false);

  const getData = () => {
    return fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian`
    ).then((res) => res.json());
  };

  useEffect(() => {
    setLoading(true);
    getData().then((res) => {
      setFoodlist(res.meals);
      setTimeout(() => {
        setLoading(false);
      }, 2000);
      
    }).catch(err=>console.log(err));
  }, []);

  return (
    <>
      <NavbarTwo />
      <div style={{ width: "100%", height: "66px" }}></div>
      <div
        style={{
          width: "100%",
          height: "598px",
          margin: "0px 0px",
          padding: "0px 80px 104px",
          fontWeight: "lighter",
          fontFamily: `"Open Sans",Arial,sans-serif"`,
          backgroundImage:
            "url(https://i.postimg.cc/HLBFQ3QL/Annotation-2022-11-02-090636.png)",
          backgroundSize: "cover",
        }}
      >
        <div style={{ paddingLeft: "40px", fontWeight: "lighter" }}>
          <div
            style={{
              width: "785px",
              height: "368px",
              padding: "160px 0px 48px 0px",
              color: "#333",
              fontFamily: `"Open Sans",Arial,sans-serif"`,
              fontWeight: "lighter",
              lineHeight: "1.6",
            }}
          >
            <div
              style={{
                width: "885px",
                height: "112px",
                textAlign: "left",
              }}
            >
              <h1 style={{ fontSize: "40px", fontWeight: "light" }}>
                food and grocery delivery from <span style={{fontWeight:"bolder"}}>กรุงเทพมหานคร</span>'s best restaurants
                and shops
              </h1>
            </div>
            <div
              style={{
                width: "885px",
                height: "30px",
                textAlign: "left",
              }}
            >
              <p style={{ fontSize: "16px" }}>
                food and grocery delivery from กรุงเทพมหานคร's best restaurants
                and shops
              </p>
            </div>
          </div>
          <div
            style={{
              width: "960px",
              height: "96px",
              boxShadow: "0 0.3rem 2rem rgb(0 0 0 / 10%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <InputGroup
              className="mb-3"
              style={{
                width: "960px",
                height: "64px",
                marginTop: "10px",
                padding: "0px 15px",
              }}
            >
              <Form.Control
                style={{
                  width: "533px",
                  height: "64px",
                  color: "lightgray",
                  fontWeight: "lighter",
                  padding: "12px 55px 12px 15px",
                }}
                placeholder="Your street and street number"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <Button
                style={{
                  width: "56px",
                  height: "64px",
                  backgroundColor: "#fff",
                  borderTop: "1px solid lightgray",
                  borderBottom: "1px solid lightgray",
                  borderRight: "1px solid lightgray",
                  borderLeft: "none",
                  marginRight: "10px",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24px"
                  height="24px"
                  fill="#D70F64"
                  viewBox="0 0 512 512"
                >
                  <path d="M256 0c17.7 0 32 14.3 32 32V66.7C368.4 80.1 431.9 143.6 445.3 224H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H445.3C431.9 368.4 368.4 431.9 288 445.3V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V445.3C143.6 431.9 80.1 368.4 66.7 288H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H66.7C80.1 143.6 143.6 80.1 224 66.7V32c0-17.7 14.3-32 32-32zM128 256c0 70.7 57.3 128 128 128s128-57.3 128-128s-57.3-128-128-128s-128 57.3-128 128zm128 80c-44.2 0-80-35.8-80-80s35.8-80 80-80s80 35.8 80 80s-35.8 80-80 80z" />
                </svg>
              </Button>
              <Button
                variant="outline-secondary"
                id="button-addon2"
                style={{
                  fontSize: "14px",
                  width: "248px",
                  height: "64px",
                  padding: "0px 11px",
                  border: "none",
                  backgroundColor: "#D70F64",
                  color: "#fff",
                  borderRadius: "10px",
                }}
              >
                Find restaurants near you
              </Button>
            </InputGroup>
          </div>
        </div>
      </div>

      <div style={{ width: "1265px", height: "auto", margin: "auto" }}>
        <div
          style={{
            width: "1265px",
            height: "40px",
            fontSize: "32px",
            color: "#333333",
            textAlign: "left",
            marginBottom: "20px",
          }}
        >
          Popular dishes from restaurants
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4,298.25px)",
            gridTemplateRows: "repeat(auto,280px)",
            gap: "0px 25px",
          }}
        >  
        {loading?
        [1,2,3,4,5,6,7,8,9,10,11,12].map((el)=>{
          return (
            <div style={{ width: "298.25px", height: "280px" }} >
              <img
                src="https://i.postimg.cc/d0dGP2Lg/foodpanda-loading-image.jpg"
                alt=""
                style={{ width: "298.25px", height: "200px" }}
              />
              <div style={{ textAlign: "left", marginTop: "0px" }}>
                <span
                  style={{
                    width: "298.25px",
                    height: "25px",
                    overflow: "hidden",
                    fontSize: "16px",
                    textAlign: "left",
                    fontWeight: "600",
                    lineHeight: "0",
                  }}
                >
                  <Placeholder xs={10} bg="secondary"/>
                </span>
              </div>

              <div style={{ textAlign: "left", lineHeight: "0" }}>
                <span
                  style={{
                    fontSize: "14px",
                    color: "#276FBF",
                    fontWeight: "bold",
                  }}
                >
                  $$${" "}
                  <span
                    style={{
                      color: "#707070",
                      fontSize: "14px",
                      fontWeight:"lighter",
                      lineHeight: "0",
                    }}
                  >
                    <Placeholder xs={5} bg="secondary"/>
                  </span>
                </span>
              </div>
            </div>
          );
        }):
          foodlist.map((el) => {
            return (
              <div style={{ width: "298.25px", height: "280px" }} className="img-hover-zoom">
                <img
                  src={el.strMealThumb}
                  alt=""
                  style={{ width: "298.25px", height: "200px" }}
                />
                <div style={{ textAlign: "left", marginTop: "0px" }}>
                  <span
                    style={{
                      width: "298.25px",
                      height: "25px",
                      overflow: "hidden",
                      fontSize: "16px",
                      textAlign: "left",
                      fontWeight: "600",
                      lineHeight: "0",
                    }}
                  >
                    {el.strMeal}
                  </span>
                </div>

                <div style={{ textAlign: "left", lineHeight: "0" }}>
                  <span
                    style={{
                      fontSize: "14px",
                      color: "#276FBF",
                      fontWeight: "bold",
                    }}
                  >
                    $$${" "}
                    <span
                      style={{
                        color: "#707070",
                        fontSize: "14px",
                        fontWeight:"lighter",
                        lineHeight: "0",
                      }}
                    >
                      asian
                    </span>
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div style={{width:"1265px",height:"801px",textAlign:"left",margin:"auto"}}>
       <h2 style={{fontSize:"32px",color:"#333333",fontWeight:"bold",margin:"26.56px 0px"}}>Food delivery in name</h2>
       <p style={{fontSize:"14px",fontWeight:"lighter",color:"#707070"}}>
       Bangkok is a foodie’s paradise, the array of available cuisines on offer is remarkable. Traditional and contemporary Thai cuisine conjures up aromatic fragrances and creamy curries with a spicy edge, lightly cooked and beautifully presented. Alongside Thai dining, the city offers food from virtually every country around the globe. From Italy and Europe to China, Korea, India and Japan. American restaurants are very popular, as well as Western and Vegetarian. The city has become renown for its variety and quality and is often referred to as the food capital of the world. Whether you want Middle Eastern food or fancy a Mexican burrito, foodpanda can help you navigate around the numerous options available in the city, it is a one-stop shop for your food delivery.
       </p>

       <h2 style={{fontSize:"32px",color:"#333333",fontWeight:"bold",margin:"26.56px 0px"}}>Why use foodpanda to order food online in Bangkok?</h2>
       <p style={{fontSize:"14px",fontWeight:"lighter",color:"#707070"}}>
       Simply download foodpanda easy-to-use app for the best Bangkok food delivery service available. Look through the descriptive menus at your leisure and place the order online from your home or workplace. Payment can be made on delivery or securely online when placing your order. Our friendly and efficient staff will ensure your meal is delivered straight to your front door or to your office. You can relax while we do the hard work, more time for you to spend with family and friends, or concentrate on your work. Or use the option to order your food in advance for collection directly from the restaurant and enjoy beating the queues. Take advantage of meal deals, free delivery offers and free gifts regularly promoted by the restaurants on foodpanda.
        </p>

       <h2 style={{fontSize:"32px",color:"#333333",fontWeight:"bold",margin:"26.56px 0px"}}>Best Restaurants near me in Bangkok</h2>
       <p style={{fontSize:"14px",fontWeight:"lighter",color:"#707070"}}>
       Authentic Thai food can be found in popular restaurants such as Krua Khan Phak, Krua Nanthapat, SN Sourth Thai Cuisine and Nadd Ma Zabb (Phetchaburi). Colourful tasty dishes such as Thai Som Tum, Lao Mango Som Tu, pad Thai and Thailand's national dish Tom Yam Kung are not to be missed. Tsukemen Jo serves Japanese Bento while Joushitsu Sushi creates stunning traditional sushi. Go European at the Snobbish Restaurant with their Foie Gras Cheeses Burgers or Caesar Salad. Healthy options are on the menu at Greenmine and Lord of Salad where crisp salads are served with fresh seafood. The city is bursting with remarkable restaurants offering delectable snacks and meals for all times of day and for all occasions. Let foodpanda help you decide which of these multiple tempting choices to order.
       </p>

       <h2 style={{fontSize:"32px",color:"#333333",fontWeight:"bold",margin:"26.56px 0px"}}>Tons of popular cuisines to order online in Bangkok</h2>
       <p style={{fontSize:"14px",fontWeight:"lighter",color:"#707070"}}>
       Thriving food culture embraces a heady mix of cuisines from Indian and Vietnamese to Spanish and Halal. Spicy Indian food is available from the many Asian eateries such as Indian Essence Art, Flavours of India and Deven Chef. The fusion of cuisines can be found in many restaurants that offer an exciting mix of Thai, Chinese and Asian dishes. American fast food options are very popular offering burgers, fries, barbecue meat dishes and pizzas. You’ll find foodpanda has all the popular, and also unusual, cuisines in Bangkok covered.
        </p>
      </div>

      <div style={{width:"1265px",height:"116px",borderTop:"1px solid lightgray",borderBottom:"1px solid lightgray",margin:"auto",display:"flex",alignItems:"center",justifyContent:"space-between"}}>
   
   <div>
   <img src="https://i.postimg.cc/WpdcLVgR/blacklogo-foodpanda.jpg" alt="" style={{width:"139px",height:"40px"}} />
   </div>

     <div>
      <img src="https://i.postimg.cc/9MpM6h7w/foodlist-under-fb.jpg" alt="" style={{width:"100px",height:"50px"}} />
     </div>
      </div>

      <div style={{width:"1265px",margin:"auto",marginTop:"30px",height:"24px",display:"flex",alignItems:"center",justifyContent:"space-between"}}>
        <span style={{color:"lightgray"}}>|</span>{
          area.map((el)=>{
            return(
              <>
            <div style={{fontSize:"16px",color:"#666666"}}> {el.strArea}</div>
             <div style={{color:"lightgray",fontWeight:"lighter"}}>|</div>
            </>
            )
          })
        }
      </div>
     <div style={{width:"100%",height:"100px"}}>

     </div>
    </>
  );
}
