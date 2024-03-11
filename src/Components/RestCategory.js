
import ItemCards from "./ItemCards";
import { BsCaretDown } from "react-icons/bs";
import { IconContext } from "react-icons";


    const RestCategory = ({ data, showItems, setshowIndex }) => {
        
        function handleclick () {
            setshowIndex();
        }

return(
    <>
      <div className="border-b-2">
          <div className="flex justify-between m-3">
              <span className="font-bold text-lg">
              {data.title} ({data.itemCards.length})
              </span>
              <button onClick={handleclick}>
              <IconContext.Provider value={{ size: "1.5em" }}>
                  <div className="mr-2">
                    <BsCaretDown />
                  </div>
                </IconContext.Provider>
                </button>
          </div>
          <div className="flex p-4">
            {showItems && <ItemCards items={data.itemCards}/>}
          </div> 
    </div>
    </>
)
}

export default RestCategory;