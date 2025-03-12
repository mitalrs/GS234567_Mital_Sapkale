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
import data from "../../../MockData/Store.json";
import ActionButton from "./ActionButton";
import { StoreData } from "./interfaces";
ModuleRegistry.registerModules([
  ClientSideRowModelModule,
  ValidationModule /* Development Only */,
]);


const StoreTable = () => {
  const containerStyle = useMemo(() => ({ width: "100%", height: "100%" }), []);
  const gridStyle = useMemo(() => ({ height: "100%", width: "100%" }), []);
  const [rowData, setRowData] = useState<StoreData[]>();
  const [columnDefs] = useState<(ColDef | ColGroupDef)[]>([

    { headerName: "", cellRenderer: ActionButton, maxWidth: 70, pinned: "left" },
    { headerName: "S.No", field: "seqno", maxWidth: 80, pinned: "left" },
    { headerName: "Store", field: "label", pinned: "left" },
    { headerName: "City", field: "city" },
    { headerName: "State", field: "state" },
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
        <AgGridReact<StoreData>
          rowData={rowData}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
        />
      </div>
    </div>
  );
};

export default StoreTable;

