
import ItemCards from "./ItemCards";


const RestCategory = ({data, showItems, setshowIndex}) => {
    console.log(data)
    
    function handleclick () {
        setshowIndex();
    }
return(
    <>
    <div className="w-6/12 mx-auto my-4 bg-gray-100 shadow-lg p-4">
        <div className="flex justify-between">
            <span className="font-bold text-lg">
            {data.title} ({data.itemCards.length})
            </span>
            <span onClick={handleclick}>+</span>
        </div>
        <div className="flex p-4">
           {showItems && <ItemCards items={data.itemCards}/>}
        </div> 
    </div>
    </>
)
}

export default RestCategory;