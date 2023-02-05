// import { ShopContext } from '../ShopContext';

// const {} = React.useContext(ShopContext);

const getApiData = async() =>{
    try {
        const response = await fetch ("https://products-api-production-6137.up.railway.app/api/products");
        const data =  await response.json();
        return (data);
    } catch (error){
        console.error(error);
    }
};

export { getApiData };