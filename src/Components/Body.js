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
                (rest) => { return rest.info.avgRating > 4.3 }
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
      <>
    <div className='body bg-[cadetblue] w-auto flex items-center justify-center flex-col'>
      <div className='cards-container flex w-full justify-around px-[4rem] pt-6 flex-wrap'>
        <div className='search-Bar w-1/3 flex flex-row justify-between mt-[0.5rem]'> 
          <input type='text'
            className='border-[1px] border-[solid] border-[black] rounded h-8 w-2/3' 
            placeholder='Type Restaurant Name..' 
            value={searchTxt} 
            onChange={(e) => {setsearchTxt(e.target.value);
              const filterRestaurant = restaurantList.filter(
                (rest) => rest.info.name.toLowerCase().includes(e.target.value.toLowerCase()));
      
                setfilteredRestaurant(filterRestaurant)}}
            >
            </input>
            <button onClick={filterTop} className='border-[1px] border-[solid] border-[black] ml-4 rounded p-[0.23rem] w-[9rem]'><p className='font-bold'>TOP RATED</p></button>
        </div>
        <div className='cards-container flex w-full justify-around px-[3rem] pt-6 flex-wrap'>
          {filteredRestaurant.map((rest) => {
            return (
              <Link 
              key={rest?.info?.id}
              to = {"/restaurants/" + rest?.info?.id} ><RestaurantCard {...rest.info} ></RestaurantCard></Link>
            )
          })}
        </div>
      </div>
    </div>
  </>
    )
  };

  export default Body;