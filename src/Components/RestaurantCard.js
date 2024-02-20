import '../App.css';

const RestaurantCard = ({cloudinaryImageId, name, cuisines, avgRating}) => {
    return (
      <div className='res-card h-[250px] w-[200px] border-[1px] border-[solid] border-[black] p-[6px] ml-[0] mr-[20px] my-[0]'>
        <img src={'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/' + cloudinaryImageId} alt='res-logo' className='h-[120px] w-[185px]'></img>
        <h3>{name}</h3>
        <h4>{cuisines.join(', ')}</h4>
        <h4>{avgRating} Stars</h4>
      </div>
    )
  }

  export default RestaurantCard;