import '../App.css';
// import demoContext from './demo';
// import { useContext } from 'react';

const RestaurantCard = ({cloudinaryImageId, name, cuisines, avgRating}) => {

  // const {value} = useContext(demoContext)
    return (
      <div className='res-card h-[23rem] w-[14rem] p-[8px] ml-[0] mr-[1rem] my-[0] mb-[0.37rem] rounded hover:shadow-2xl'>
        <img src={'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/' + cloudinaryImageId} alt='res-logo' className='h-1/2 w-full mb-2 rounded'></img>
        <h2 className='font-bold text-lg'>{name}</h2>
        <h4 className='text-sm font-semibold pt-1.5 pb-1'>{cuisines.join(', ')}</h4>
        <h4 className='text-sm font-bold'>{avgRating} ⭐</h4>
        {/* <h4>{value}</h4> */}
      </div>
    )
  }

  export default RestaurantCard;