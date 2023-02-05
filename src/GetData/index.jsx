// import { ShopContext } from '../ShopContext';

// const {} = React.useContext(ShopContext);

const getApiData = async() =>{

    const url = "https://products-api-production-6137.up.railway.app/api/products"
    const data =  await fetch(url)
    .then (res =>res.json())
    .then(data =>data)
    return (data);
}

export { getApiData };