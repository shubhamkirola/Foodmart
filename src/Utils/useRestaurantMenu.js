import { useEffect, useState } from "react";
import { useParams} from "react-router-dom";

const useRestaurantMenu = () => {

const [menuinfo, setmenuinfo] = useState([])
const {resId } = useParams();

useEffect(() => {
    fetchMenu();
}, [resId])

const fetchMenu = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.65420&lng=77.23730&restaurantId=" + resId);
    const json = await data.json();
    console.log(json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards);

    setmenuinfo(json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards)

    
}


return menuinfo;
}


export default useRestaurantMenu;