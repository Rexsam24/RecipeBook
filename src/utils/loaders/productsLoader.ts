import axios from "axios";
import { LoaderParams } from "../lib/types";

export const loader = async ({ searchQuery }:LoaderParams ) => {
  const response = await axios(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchQuery}`
  );
  const data = await response.data.meals;
  return data;
};



// import axios from "axios";
// import { mockdata } from "../mockdata";

// export const loader = async (url) => {
 
//   return new Promise((resolve, reject) => {
//     // Simulate network delay
//     setTimeout(() => {
//       if (url === '/api/users') {
//         resolve({
//           json: () => Promise.resolve(mockdata.users)
//         });
//       } else {
//         reject(new Error('Not found'));
//       }
//     }, 500);
//   });
// };

// mockdata
// const mockFetch = (url) => {
  
// };

