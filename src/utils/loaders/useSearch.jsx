import { useLocation } from "react-router-dom";

const useSearch = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get("query");
  return query;
};

export default useSearch;
