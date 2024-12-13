import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api/cocktails';

export const fetchRandomCocktail = async () =>{
   try {
     const response = await axios.get(`${API_BASE_URL}/random`);
     return response.data;
   } catch (error) {
    console.error('Error fetching random cocktail:', error.message);
    throw error;
   }
}
