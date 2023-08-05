import axios from 'axios';

// const searchImages = async (term) => {
//   const response = await axios.get('https://api.unsplash.com/search/photos', {
//     headers: {
//       Authorization: 'Client-ID GghCo4HrNoesjHyGkvyEy8gyEgWbuoMkcbVwCABrAas',
//     },
//     params: {
//       query: term,
//     },
//   });

//   return response.data.results;
// };

const searchImages =  async (term) =>{
        
  const response = await fetch(`https://api.unsplash.com/search/photos?page=1&query=${term}`, {
      headers: {
          Authorization: 'Client-ID GghCo4HrNoesjHyGkvyEy8gyEgWbuoMkcbVwCABrAas'
      }
  });
  const data = await response.json();
  
  return data.results;
}
export default searchImages;
