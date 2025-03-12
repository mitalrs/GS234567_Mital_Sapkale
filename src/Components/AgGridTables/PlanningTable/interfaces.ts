
export interface CalendarData {
    "Seq No.": number;
    "Week": string;
    "Week Label": string;
    "Month": string;
    "Month Label": string;
  }
  
 export  interface PlanningData {
    Store: string;
    SKU: string;
    Week: string;
    "Sales Units": string;
  }
  
 export  interface CalculationData {
    Store: string;
    SKU: string;
    Week: string;
    "Sales Units": string;
    "Sales Dollars": string;
    "GM Dollars": string;
    "GM %": string;
  }