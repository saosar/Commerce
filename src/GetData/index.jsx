// import { ShopContext } from '../ShopContext';

// const {} = React.useContext(ShopContext);

const getApiData = async() =>{
    try {
        const response = await fetch ("https://products-api-production-6137.up.railway.app/api/products");
        const info =  await response.json();
        return (info);
    } catch (error){
        console.error(error);
    }
};

const API_KEY = 'hbFtwsmpNZ8DfO8ilkluRJaP4NrDV4zg'
async function exChangeRate() {
  try {
    const url = `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/USD`
    const rateUSD = await fetch(url)
    .then( res => res.json())
    console.log(rateUSD)
    return rateUSD
  } catch (error) {
    console.log(error)
  }
}


// const getApiId = async() =>{
//     try {
//         const response = await fetch ("http://products-api-production-6137.up.railway.app/api/products/api/{id}");
//         const infoId =  await response.json();
//         return (infoId);
//     } catch (error){
//         console.error(error);
//     }
// };

export { getApiData, exChangeRate };