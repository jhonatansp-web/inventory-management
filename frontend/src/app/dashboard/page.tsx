"use client";
import {
  CheckCircle,
  Package,
  Tag,
  TrendingDown,
  TrendingUp,
} from "lucide-react";

import {CardPopularProducts} from "./CardPopularProducts";
import {CardPurchaseSummary} from "./CardPurchaseSummary";
import {CardSalesSummary} from "./CardSalesSummary";
import { CardExpenseSummary } from "./CardExpenseSummary";
import { StatCard } from "./StatCar";




export const Dashboard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xl:overflow-auto gap-10 pb-4 custom-grid-rows">
      <CardPopularProducts />
      <CardSalesSummary />
      <CardPurchaseSummary />
      <CardExpenseSummary/>
      <StatCard
      title="Categoria 0"
      primaryIcon={<Package className="text-blue-600 w-6 h-6"/>}
      dateRange="22-29 de Noviembre 2024"
      details={[
        {title:"Venta de laptops",
        amount:"150.00",
        changePercentage:130,
        IconComponent: TrendingUp,
        },
        {title:"Venta de Computadoras",
          amount:"180.00",
          changePercentage:30,
          IconComponent: TrendingDown,
          },
      ]}/>
       <StatCard
      title="Categoria 1"
      primaryIcon={<Package className="text-blue-600 w-6 h-6"/>}
      dateRange="22-29 de Noviembre 2024"
      details={[
        {title:"Venta de laptops",
        amount:"150.00",
        changePercentage:130,
        IconComponent: TrendingUp,
        },
        {title:"Venta de Computadoras",
          amount:"180.00",
          changePercentage:30,
          IconComponent: TrendingDown,
          },
      ]}/>
       <StatCard
      title="Categoria 2"
      primaryIcon={<Tag className="text-blue-600 w-6 h-6"/>}
      dateRange="22-29 de Noviembre 2024"
      details={[
        {title:"Venta de laptops",
        amount:"150.00",
        changePercentage:130,
        IconComponent: TrendingUp,
        },
        {title:"Venta de Computadoras",
          amount:"180.00",
          changePercentage:30,
          IconComponent: TrendingDown,
          },
      ]}/>
       <StatCard
      title="Categoria 3"
      primaryIcon={<CheckCircle className="text-blue-600 w-6 h-6"/>}
      dateRange="22-29 de Noviembre 2024"
      details={[
        {title:"Venta de laptops",
        amount:"150.00",
        changePercentage:130,
        IconComponent: TrendingUp,
        },
        {title:"Venta de Computadoras",
          amount:"180.00",
          changePercentage:30,
          IconComponent: TrendingDown,
          },
      ]}/>
  
    </div>
  );
};


