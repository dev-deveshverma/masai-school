import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Users = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    axios
      .get("https://reqres.in/api/users/")
      .then(({ data }) => {
        console.log("Users", data);
        setList([...data.data]);
      });
  }, []);
   
  return(
      <div className="users">
          {list.map((e)=>(
              <Link to={`/users/${e.id}`} key={e.id}>
                  {e.id}.{e.first_name}
              </Link>
          ))}
      </div>
  )
};
