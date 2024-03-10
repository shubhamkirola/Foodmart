import useRestaurantMenu from "../Utils/useRestaurantMenu";
import { useParams} from "react-router-dom";
import { useEffect, useState } from "react";
import RestCategory from "./RestCategory";

const RestaurantMenu = () => {

    const [resinfo, setresinfo] = useState(null)
    const [catogeries, setcategories] = useState([])
    const {resId } = useParams();
    const menuinfo = useRestaurantMenu();
    const [showIndex, setshowIndex] = useState(null);

    useEffect(() => {
        fetchMenu();
    }, [resId])

    const fetchMenu = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.65420&lng=77.23730&restaurantId=" + resId);
    const json = await data.json();
    console.log(json.data.cards)

    setresinfo(json.data.cards[0].card.card.info);

    const categories = json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards.filter((c) => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")

    setcategories(categories);

    console.log(categories)
    }
 
    if(resinfo === null) return (<h1>loaflksadjlkjfdslkaj</h1>)

    return(
        <>
            <h1 className="w-6/12 mx-auto my-4 bg-black text-white text-2xl p-3 text-center font-semibold">{resinfo.name}</h1>
           {catogeries.map((category, index) => <RestCategory data = {category?.card?.card}
           showItems = {index === showIndex ? true : false}
           setshowIndex = {() => {setshowIndex(index)}}
           />)}
        </>
    )
};

export default RestaurantMenu; 