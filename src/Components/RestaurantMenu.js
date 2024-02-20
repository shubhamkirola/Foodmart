// import useRestaurantMenu from "../Utils/useRestaurantMenu";
import { useParams} from "react-router-dom";
import { useEffect, useState } from "react";

const RestaurantMenu = () => {

    const [resinfo, setresinfo] = useState(null)
    const [menuinfo, setmenuinfo] = useState([])
    const {resId } = useParams();

    useEffect(() => {
        fetchMenu();
    }, [resId])

    const fetchMenu = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.65420&lng=77.23730&restaurantId=" + resId);
    const json = await data.json();
    console.log(json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards);
    console.log(json.data.cards[2].card.card.info)

    setresinfo(json.data.cards[2].card.card.info);
    setmenuinfo(json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards);
    }
 

    if(resinfo === null) return (<h1>loaflksadjlkjfdslkaj</h1>)

    return(
        <>
            <h1>{resinfo.name}</h1>
           { menuinfo.map((item) => <li>{item.card.info.name}</li>)}
        </>
    )
};

export default RestaurantMenu; 