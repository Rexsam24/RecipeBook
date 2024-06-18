import fetch from 'node-fetch';
import { promises as fs } from 'fs';

const API_URL = 'https://www.themealdb.com/api/json/v1/1/search.php?f=b';
const OUTPUT_FILE = './mockData.js';

const fetchAndSaveData = async () => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.statusText}`);
    }
    const data = await response.json();

    const fileContent = `
export const mockData = {
  users: ${JSON.stringify(data, null, 2)}
};
`;

    await fs.writeFile(OUTPUT_FILE, fileContent);
    console.log(`Data successfully saved to ${OUTPUT_FILE}`);
  } catch (error) {
    console.error('Error fetching and saving data:', error);
  }
};

fetchAndSaveData();
