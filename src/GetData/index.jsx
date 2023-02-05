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

export { getApiData };