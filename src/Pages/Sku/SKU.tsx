import SkuTable from "../../Components/AgGridTables/SkuTable/SkuTable";
import NewButton from "../../Components/NewButton/NewButton";

const SKU = () => {
    return ( <div className="flex-1 p-4 flex flex-col">
        <div className="bg-white flex-1">
            <SkuTable />
        </div>
        <div className='h-28 flex items-center'>
            <NewButton btntext={"new sku"} />
        </div>
    </div> );
}
 
export default SKU;