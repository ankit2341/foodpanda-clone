import NavbarTwo from "../components/Navbar2";
import "../styles/description.css";

export default function Description() {
  return (
    <>
      <NavbarTwo />
      <div style={{ width: "100%", height: "66px" }}></div>
      <div className="main_description">
        <div className="image_of_dish">
          <img
            src="https://www.themealdb.com/images/media/meals/yqqqwu1511816912.jpg"
            alt=""
          />
        </div>

        <div className="title_of_dish">
          <div
            style={{
              width: "1063px",
              height: "57px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <h1 style={{ fontSize: "24px", fontWeight: "bold" }}>
              Title title tiedhf
            </h1>

            <div>
              <button
                className="title_btn"
                style={{
                  fontSize: "14px",
                  color: "#E21B70",
                  fontWeight: "bold",
                  backgroundColor: "#fff",
                  borderRadius: "5px",
                  width: "182px",
                  height: "52px",
                  border: "1px solid #D70F64",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 512"
                  width="20"
                  height="20"
                  fill="#E21B70"
                >
                  <path d="M352 128c0 70.7-57.3 128-128 128s-128-57.3-128-128S153.3 0 224 0s128 57.3 128 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM609.3 512H471.4c5.4-9.4 8.6-20.3 8.6-32v-8c0-60.7-27.1-115.2-69.8-151.8c2.4-.1 4.7-.2 7.1-.2h61.4C567.8 320 640 392.2 640 481.3c0 17-13.8 30.7-30.7 30.7zM432 256c-31 0-59-12.6-79.3-32.9C372.4 196.5 384 163.6 384 128c0-26.8-6.6-52.1-18.3-74.3C384.3 40.1 407.2 32 432 32c61.9 0 112 50.1 112 112s-50.1 112-112 112z" />
                </svg>
                <span style={{ marginLeft: "5px" }}>Start group order</span>
              </button>
              <span
                style={{
                  color: "#E21B70",
                  fontSize: "14px",
                  marginLeft: "15px",
                }}
              >
                Reviews & more
              </span>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "left",
              width: "100%",
              height: "20px",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
              width="15"
              height="15"
              fill="#FFB413"
            >
              <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
            </svg>
            <span
              style={{
                marginleft: "5px",
                fontSize: "12px",
                color: "#333333",
                fontWeight: "bold",
              }}
            >
              4.1/5
            </span>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "left",
              width: "100%",
              height: "20px",
              marginTop: "10px",
              fontSize: "14px",
              color: "gray",
            }}
          >
            <span style={{ color: "#FFB413", fontWeight: "bold" }}>
              BBB .
              <span style={{ color: "gray", fontWeight: "normal" }}>
                {" "}
                japanese .
              </span>
              <span style={{ color: "gray", fontWeight: "normal" }}>
                {" "}
                Asian
              </span>{" "}
            </span>
          </div>
        </div>
      </div>

      <div className="side_fixed"></div>
    </>
  );
}
