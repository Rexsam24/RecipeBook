import { NavLink } from "react-router-dom";

const links = [
  { id: 1, url: "/", text: "recipes" },
  { id: 2, url: "create", text: "create recipes" },
  { id: 3, url: "bookmark", text: "book mark" },
];

const NavLinks = () => {
  return (
    <>
      {links.map((link) => {
        const { id, url, text } = link;

        return (
          <li key={id}>
            <NavLink className="capitalize" to={url}>
              {text}
            </NavLink>
          </li>
        );
      })}
    </>
  );
};
export default NavLinks;
