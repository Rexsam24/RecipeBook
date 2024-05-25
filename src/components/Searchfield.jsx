import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Searchfield = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  // navigate(`/search?query=${encodeURIComponent(query)}`);
  const handleSearch = () => {
    if (query.trim()) {
      navigate(`/products?query=${query}`);
    }
  };
  const handlechange = (e) => {
    e.preventDefault();
    setQuery(e.target.value);
  };
  return (
    <div className="flex mb-6 justify-center p-4">
      <div className="join">
        <div>
          <div>
            <input
              className="input bg-white shadow-lg  md:w-96 input-bordered join-item"
              placeholder="Search"
              name="search"
              value={query}
              onChange={handlechange}
            />
          </div>
        </div>

        <div className="indicator">
          <button onClick={handleSearch} className="btn join-item">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};
export default Searchfield;
