import chartdata from "../../../MockData/Chart.json"
export function getData() {
    return chartdata.map((item) => ({
      ...item,
      "GM Dollars": parseFloat(item["GM Dollars"].replace(/[ $,]/g, "")),
      "GM %": parseFloat(item["GM %"].replace("%", ""))
    }));;
  }
  