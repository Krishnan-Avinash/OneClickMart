import { NavLink } from "react-router-dom";
import IndividualName from "./IndividualName";

import { useAuth0 } from "@auth0/auth0-react";

const AllPages = () => {
  const elements = [
    { name: "Home", link: "/", id: 1 },
    { name: "Add", link: "/add", id: 2 },
    { name: "List", link: "/list", id: 3 },
    { name: "Logout", link: "NA", id: 4 },
  ];

  const { isAuthenticated } = useAuth0();

  return (
    <div className="allpages-elements">
      {isAuthenticated ? (
        <ul>
          {elements.map((item) => (
            <li key={item.id}>
              <NavLink
                to={item.link}
                style={({ isActive }) =>
                  isActive
                    ? { textDecoration: "underline" }
                    : { textDecoration: "none" }
                }
              >
                <IndividualName name={item.name} />
              </NavLink>
            </li>
          ))}
        </ul>
      ) : (
        <ul>
          <li>
            <NavLink
              style={({ isActive }) =>
                isActive
                  ? { textDecoration: "underline" }
                  : { textDecoration: "none" }
              }
            >
              <IndividualName name="Login" />
            </NavLink>
          </li>
        </ul>
      )}
    </div>
  );
};

export default AllPages;
