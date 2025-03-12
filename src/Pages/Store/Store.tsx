import NewButton from "../../Components/NewButton/NewButton";
import StoreTable from "../../Components/AgGridTables/StoreTable/StoreTable";

const Store = () => {
    return (<div className="flex-1 p-4 flex flex-col">
        <div className="bg-white flex-1">
        <StoreTable />
        </div>
        <div className='h-28 flex items-center'>
            <NewButton btntext={"new store"}/>
        </div>
    </div>);
}

export default Store;