import React from 'react'
import { useDispatch } from 'react-redux'
import { addItem } from '../Utils/CartSlice';

const ItemCards = ({items}) => {
    console.log(items)

    const dispatch = useDispatch();

    const handleCartSlice = (item) => {
        dispatch(addItem(item))
    }

  return (
    <>
    <div>
            {items.map((item) => (
            <div key={item.card.info.id}
            className="p-2 m-2 border-gray-500 border-b-2 text-left flex justify-between">
                <div className='w-9/12'>
                    <div className='py-2'>
                        <span>{item.card.info.name}</span>
                        <span> - ₹ {item.card.info.price
                                ? item.card.info.price/ 100 
                                : item.card.info.defaultPrice}
                        </span>
                    </div>
                    <p className='text-xs'>{item.card.info.description
                                            ? item.card.info.description
                                            : <h2>we are currently working on it !! </h2>}
                    </p>
                </div>
                <div className='w-3/12 p-4'>
                    <div className='absolute'>
                        <button className='p-1 rounded-lg bg-black shadow-lg mx-6 text-white top-0.5'onClick={() => handleCartSlice(item)}>Add +</button>
                    </div>
                    <img src={ 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/' + item.card.info.imageId} alt='s' className='w-full'></img>
                </div>
            </div>
            ))}
    </div>
    </>
  )
}

export default ItemCards