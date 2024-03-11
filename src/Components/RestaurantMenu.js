
import { useParams} from "react-router-dom";
import { useEffect, useState } from "react";
import RestCategory from "./RestCategory";
import MenuShimmer from "./MenuShimmer";

const RestaurantMenu = () => {

    const [resinfo, setresinfo] = useState(null)
    const [catogeries, setcategories] = useState([])
    const {resId } = useParams();
    const [showIndex, setshowIndex] = useState(null);

    useEffect(() => {
        fetchMenu();
    })

    const fetchMenu = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.65420&lng=77.23730&restaurantId=" + resId);
    const json = await data.json();
    console.log(json.data.cards)

    setresinfo(json.data.cards[0].card.card.info);

    const categories = json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards.filter((c) => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")

    setcategories(categories);

    console.log(categories)
    }
 
    if(resinfo === null) return ( <MenuShimmer/>)

    return(
        <>
        <div className="max-w-screen-md min-h-[90%] mt-0 mx-auto my-auto mb-0">
            <div className="">
                <div className="flex justify-between px-4 py-4 pt-9 pb-9 border-solid border-b-2">
                    <div className="">
                        <h1 className="font-bold text-2xl">{resinfo.name}</h1>

                        <p className="text-sm">{resinfo.cuisines.join(", ")}</p>
                        <p className="text-sm">
                        {resinfo.areaName}, {resinfo.sla.lastMileTravel} km
                        </p>
                    </div>
                    <div className="border-slate-200 border rounded p-1 text-xs text-center h-14 mt-auto mb-auto flex-col">
                        <div className="border-b-2 p-1">{resinfo.avgRating} ⭐</div>
                        <div className="p-1">{resinfo.totalRatingsString}</div>
                    </div>
                </div>
            </div>
            <div className="px-4 py-4 pt-9 pb-9">
                <h1 className="text-2xl font-bold border-solid border-b-2 pb-9">Menu</h1>
                <div>
                    {catogeries.map((category, index) => <RestCategory data = {category?.card?.card}
                    showItems = {index === showIndex ? true : false}
                    setshowIndex = {() => {setshowIndex(index)}}
                    />)}
                </div>
            </div>
        </div>
        </>
    )
};

export default RestaurantMenu; 