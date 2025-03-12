
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import {
  ColDef,
  ColGroupDef,
  ValueFormatterParams,
  CellStyle,
  CellClassParams
} from "ag-grid-community";
import PlanningDatajs from "../../../MockData/Planning.json"
import calendarDatajs from "../../../MockData/Calender.json"
import calculationDatajs from "../../../MockData/Calculations.json"
import { CalendarData, PlanningData, CalculationData } from "./interfaces";


interface GridRowData {
  Store: string;
  SKU: string;
  [key: string]: any; // For dynamic columns
}

const DynamicAgGrid = () => {
  const gridRef = useRef<AgGridReact>(null);
  const [rowData, setRowData] = useState<GridRowData[]>([]);
  const [columnDefs, setColumnDefs] = useState<(ColDef | ColGroupDef)[]>([]);
  
  const fetchData = useCallback(async () => {
    const calendarData: CalendarData[] = calendarDatajs;
    
    const planningData: PlanningData[] = PlanningDatajs;
    
    const calculationData: CalculationData[] = calculationDatajs;
    
    // Process data and create dynamic columns
    processData(calendarData, planningData, calculationData);
  }, []);
  
  // Function to process data and generate dynamic columns
  const processData = (
    calendarData: CalendarData[],
    planningData: PlanningData[],
    calculationData: CalculationData[]
  ) => {
    const baseColumns: ColDef[] = [
      { 
        headerName: "Store",
        field: "Store", 
        width: 200,
        filter: true,
        pinned: 'left'
      },
      { 
        headerName: "SKU", 
        field: "SKU", 
        width: 200,
        filter: true,
        pinned: 'left'
      }
    ];
    
    const monthGroups = calendarData.reduce<{[key: string]: CalendarData[]}>((acc, item) => {
      const monthLabel = item["Month Label"];
      if (!acc[monthLabel]) {
        acc[monthLabel] = [];
      }
      acc[monthLabel].push(item);
      return acc;
    }, {});
    
    // Create dynamic column structure
    const dynamicColumns: ColGroupDef[] = [];
    
    Object.entries(monthGroups).forEach(([monthLabel, weeks]) => {
      const weekColumns: ColGroupDef[] = [];
      
      weeks.forEach(week => {
        const subColumns: ColDef[] = [
          { 
            headerName: "Sales Units",
            field: `${week.Week}_SalesUnits`,
            width: 120,
            filter: "agNumberColumnFilter"
          } as ColDef,
          { 
            headerName: "Sales Dollars",
            field: `${week.Week}_SalesDollars`,
            width: 120,
            filter: "agNumberColumnFilter",
            valueFormatter: (params: ValueFormatterParams) => {
              return params.value ? params.value : '$0.00';
            }
          } as ColDef,
          { 
            headerName: "GM Dollars",
            field: `${week.Week}_GMDollars`,
            width: 120, 
            filter: "agNumberColumnFilter",
            valueFormatter: (params: ValueFormatterParams) => {
              return params.value ? params.value : '$0.00';
            }
          } as ColDef,
          { 
            headerName: "GM %",
            field: `${week.Week}_GMPercent`,
            width: 120,
            filter: "agNumberColumnFilter",
            cellStyle: (params: CellClassParams): CellStyle => {
              // Dynamically style cells based on values
              if (!params.value) return {};
              
              const value = parseFloat(params.value);
              if (value >= 40) return { backgroundColor: '#4CAF50', color: 'white' }; // Green for ≥ 40%
              if (value >= 10) return { backgroundColor: '#FFEB3B' }; // Yellow for ≥ 10% but < 40%
              if (value > 5) return { backgroundColor: '#FF9800' }; // Orange for > 5% but < 10%
              return { backgroundColor: '#F44336', color: 'white' }; // Red for ≤ 5%
            },
            valueFormatter: (params: ValueFormatterParams) => {
              return params.value ? `${params.value}%` : '0.00%';
            }
          } as ColDef
        ];
        
        weekColumns.push({
          headerName: week["Week Label"],
          groupId: `group_${week.Week}`,
          marryChildren: true,
          children: subColumns
        } as ColGroupDef);
      });
      
      // Add month group with its week subgroups
      dynamicColumns.push({
        headerName: monthLabel,
        groupId: `month_${monthLabel}`,
        marryChildren: true,
        children: weekColumns
      } as ColGroupDef);
    });
    
    //  Combine base columns with dynamic columns
    setColumnDefs([...baseColumns, ...dynamicColumns]);
    
    const storeSkuMap = new Map<string, any>();
    
    // Create base row structure
    planningData.forEach(item => {
      const key = `${item.Store}_${item.SKU}`;
      if (!storeSkuMap.has(key)) {
        storeSkuMap.set(key, {
          Store: item.Store,
          SKU: item.SKU
        });
      }
    });
    
    
    planningData.forEach(item => {
      const key = `${item.Store}_${item.SKU}`;
      const row = storeSkuMap.get(key);
      row[`${item.Week}_SalesUnits`] = item["Sales Units"];
    });
    
    
    calculationData.forEach(item => {
      const key = `${item.Store}_${item.SKU}`;
      const row = storeSkuMap.get(key);
      
      if (row) {
        row[`${item.Week}_SalesUnits`] = item["Sales Units"];
        row[`${item.Week}_SalesDollars`] = item["Sales Dollars"];
        row[`${item.Week}_GMDollars`] = item["GM Dollars"];
        row[`${item.Week}_GMPercent`] = item["GM %"] ? 
          parseFloat(item["GM %"].replace('%', '')) : null;
      }
    });
    
    // Convert map to array for grid
    setRowData(Array.from(storeSkuMap.values()));
  };
  
  const defaultColDef = useMemo<ColDef>(() => {
    return {
      sortable: true,
      resizable: true,
      filter: true,
      minWidth: 100,
      flex: 1
    };
  }, []);
  
  const onGridReady = useCallback(() => {
    fetchData();
  }, [fetchData]);
  
  useEffect(() => {
    if (rowData.length > 0 && gridRef.current && gridRef.current.api) {
      setTimeout(() => {
        gridRef.current?.api.sizeColumnsToFit();
      }, 100);
    }
  }, [rowData]);
  
  return (
    <div className="ag-theme-alpine" style={{ height: '100%', width: '100%' }}> 
      <AgGridReact
        ref={gridRef}
        rowData={rowData}
        columnDefs={columnDefs}
        defaultColDef={defaultColDef}
        animateRows={true}
        rowSelection="multiple"
        suppressColumnVirtualisation={true}
        onGridReady={onGridReady}
      />
    </div>
  );
};

export default DynamicAgGrid;