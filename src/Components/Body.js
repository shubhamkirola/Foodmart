import '../App.css';
import RestaurantCard from './RestaurantCard';
import { useState, useEffect } from 'react';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
import useOnline from '../Utils/useOnline';

const Body = () => {

    const [restaurantList, setrestaurantList] = useState([]);
    const [searchTxt, setsearchTxt] = useState();
    const [filteredRestaurant, setfilteredRestaurant] = useState([]);

    const isOnline = useOnline();

    function filterTop () {
            const topRated = restaurantList.filter(
                (rest) => { return rest.info.avgRating > 4 }
            );
            setfilteredRestaurant(topRated);
    }

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65420&lng=77.23730&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        console.log(json)
        
        setrestaurantList(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
        setfilteredRestaurant(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
       
    }

    useEffect(() => {
        fetchData();
    },[])
    
    if(isOnline === false) 
    return (
      <h1>sdjfalkjsflkajsdlkfjlsd</h1>
      )

    return restaurantList.length === 0 ? ( <Shimmer/> ) : (
    <div className='body mt-[10px] bg-[cadetblue] h-screen w-screen flex items-center flex-col'>
      <div className='search-Bar'>
        <input type='text' 
            placeholder='Type Restaurant Name..' 
            value={searchTxt} 
            onChange={(e) => {setsearchTxt(e.target.value);
              const filterRestaurant = restaurantList.filter(
                (rest) => rest.info.name.toLowerCase().includes(e.target.value.toLowerCase()));
      
                setfilteredRestaurant(filterRestaurant)}}
            >
            </input>
        <button onClick={filterTop}> TOP RATED </button>
      </div>
      <div className='cards-container h-screen w-screen p-[20px] flex flex-row flex-wrap'>
        {filteredRestaurant.map((rest) => {
          return (
            <Link 
            key={rest?.info?.id}
            to = {"/restaurants/" + rest?.info?.id} ><RestaurantCard {...rest.info} ></RestaurantCard></Link>
          )
        })}
        
      </div>
    </div>
    )
  };

  export default Body;