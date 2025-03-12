import { Store, BarChart2, Package, LineChart } from "lucide-react"
import { useState } from "react"
import { Link } from "react-router";



export default function Sidebar() {
  const [activeItem, setActiveItem] = useState("store")

  const menuItems = [
    { id: "store", label: "Store", icon: Store, path: "" },
    { id: "sku", label: "SKU", icon: Package, path: "/sku" },
    { id: "planning", label: "Planning", icon: BarChart2, path: "/planning" },
    { id: "charts", label: "Charts", icon: LineChart, path: "/charts" },
  ]

  return (
    <div className="flex flex-col w-64 h-[calc(100vh-120px)] py-4">
      <nav className="">
        <ul className="space-y-1">
          {menuItems.map((item) => (
            <li key={item.id}>
              <Link
                to={item.path}
                className={`flex items-center gap-3 px-3 py-2 transition-colors ${activeItem === item.id
                    ? "bg-stone-200 text-gray-900"
                    : "text-gray-700"
                  }`}
                onClick={() => setActiveItem(item.id)}
              >
                <item.icon className="h-5 w-5" />
                <span>{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

