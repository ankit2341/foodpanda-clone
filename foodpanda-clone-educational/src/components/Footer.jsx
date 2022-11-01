import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div
      style={{
        width: "100%",
        height: "130.85px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        padding: "32px 0px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: "669px",
            height: "43px",
            display: "flex",
            alignItems: "center",
            justifyContent: "left",
          }}
        >
          <img
            style={{ width: "178px", height: "40px" }}
            src="https://www.foodpanda.com/wp-content/uploads/2019/12/food-panda-logo-vector.png"
            alt="FoodPanda"
          />
        </div>

        <div
          style={{
            width: "669px",
            height: "43px",
            display: "flex",
            alignItems: "center",
            justifyContent: "right",
          }}
        >
          <a href="https://www.facebook.com/foodpandaMalaysia/">
            {" "}
            <img
              style={{ width: "33px", height: "33px" }}
              src="https://www.foodpanda.com/wp-content/uploads/2016/11/ic_social_facebook.svg"
              alt="FoodPanda"
            />
          </a>
          <a href="https://sg.linkedin.com/company/foodpanda">
            <img
              style={{ width: "33px", height: "33px", marginLeft: "5px" }}
              src="https://www.foodpanda.com/wp-content/uploads/2016/11/ic_social_linkedin.svg"
              alt="FoodPanda"
            />
          </a>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: "1122px",
            height: "22.85px",
            fontSize: "16px",
            color: "#333333",
            display: "flex",
            color: "gray",
            alignItems: "center",
            justifyContent: "left",
          }}
        >
          © 2022
        </div>

        <div
          style={{
            width: "216px",
            textDecoration: "none",
            height: "22.85px",
            fontSize: "16px",
            color: "#333333",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Link
            style={{
              cursor: "pointer",
              textDecoration: "none",
              color: "gray",
              marginRight: "20px",
            }}
            to="/"
          >
            Imprint
          </Link>
          <Link
            to="/"
            style={{
              cursor: "pointer",
              textDecoration: "none",
              color: "gray",
              marginRight: "20px",
            }}
          >
            Security
          </Link>
          <Link
            to="/"
            style={{ cursor: "pointer", textDecoration: "none", color: "gray" }}
          >
            Privacy
          </Link>
        </div>
      </div>
    </div>
  );
}
