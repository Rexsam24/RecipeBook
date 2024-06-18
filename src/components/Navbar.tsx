import NavLinks from "./NavLinks";
import logo from "../assets/recipe.svg";
import profile from "../assets/profile.jpg";

const Navbar = () => {
  return (
    <>
      <div className="navbar bg-base-200 px-16">
        <div className="navbar-start ">
          <div className="w-8">
            <img src={logo} alt="logo" />
          </div>
          <a className="btn btn-ghost text-lg  lg:text-xl hidden sm:flex  ">
            Recipe-Book
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal flex gap-4">
            <NavLinks />
          </ul>
        </div>

        <div className="navbar-end ">
          <div className="dropdown lg:hidden  dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost rounded-btn"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52 mt-4"
            >
              <NavLinks />
            </ul>
          </div>
          <div className="avatar hidden lg:flex ">
            <div className="w-12 rounded-full">
              <img src={profile} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Navbar;
