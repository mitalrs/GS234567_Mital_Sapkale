import PlanningTable from "../../Components/AgGridTables/PlanningTable/PlanningTable";

const Planning = () => {
    return ( <div className="flex-1 p-4 flex flex-col">
        <div className="bg-white flex-1">
            <PlanningTable />
        </div>
    </div> );
}
 
export default Planning;