import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addItem } from '../Utils/CartSlice';

const ItemCards = ({items}) => {
    console.log(items)

    const [button, setbutton] = useState([]);

    const dispatch = useDispatch();

    const handleCartSlice = (item) => {
        dispatch(addItem(item));
        let changebutton = button.slice();
        changebutton[item.card.info.id] = true;
        setbutton(changebutton);
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
                                : item.card.info.defaultPrice/ 100}
                        </span>
                    </div>
                    <p className='text-xs'>{item.card.info.description
                                            ? item.card.info.description
                                            : <h2>we are currently working on it !! </h2>}
                    </p>
                </div>
                <div className='w-3/12 p-4 flex flex-col items-center'>
                        <img src={ 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/' + item.card.info.imageId} alt='s' className='w-full'></img>
                    <div>
                        <button
                            onClick={() => handleCartSlice(item)}
                            className="w-20 h-8 border border-slate-400 rounded text-green-600 mt-1"
                        >
                            {button[item.card.info.id] ? "Added" : "Add" }
                        </button>
                    </div>

                </div>
            </div>
            ))}
    </div>
    </>
  )
}

export default ItemCards;