import { Link } from "react-router-dom";

const links = [
  // Fix this links array, it's an array of objects {to: "", title: ""}
  {to:"/",title:" Go To Home"},
  {to:"/products",title:" Go To Products"},
  
];

export const Navbar = () => {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" ,border:"2px solid red"}}>
        {links.map((el) => {
          return (
            <Link key={el.to} style={{ padding: "10px" }} to={el.to}>
              {el.title}
            </Link>
          );
        })}
      </div>
    </>
  );
};
