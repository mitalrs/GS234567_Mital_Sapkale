import {
    ClientSideRowModelModule,
    ColDef,
    ColGroupDef,
    ModuleRegistry,
    ValidationModule
} from "ag-grid-community";
import { AgGridReact } from "ag-grid-react";
import {
    useEffect,
    useMemo,
    useState
} from "react";
import data from "../../../MockData/sku.json";
import ActionButton from "./ActionButton";
import { SkuData } from "./interfaces";
ModuleRegistry.registerModules([
    ClientSideRowModelModule,
    ValidationModule /* Development Only */,
]);


const SkuTable = () => {
    const containerStyle = useMemo(() => ({ width: "100%", height: "100%" }), []);
    const gridStyle = useMemo(() => ({ height: "100%", width: "100%" }), []);
    const [rowData, setRowData] = useState<SkuData[]>();
    const [columnDefs] = useState<(ColDef | ColGroupDef)[]>([

        { headerName: "", cellRenderer: ActionButton, maxWidth: 70, pinned: "left" },
        { headerName: "SKU", field: "Label", pinned: "left" },
        { headerName: "Price", field: "Price" },
        { headerName: "Cost", field: "Cost" },
    ]);
    const defaultColDef = useMemo<ColDef>(() => {
        return {
            width: 200,
        };
    }, []);

    useEffect(() => {
        setRowData(data)
    }
        , [])

    return (
        <div style={containerStyle}>
            <div style={gridStyle}>
                <AgGridReact<SkuData>
                    rowData={rowData}
                    columnDefs={columnDefs}
                    defaultColDef={defaultColDef}
                />
            </div>
        </div>
    );
};

export default SkuTable;

