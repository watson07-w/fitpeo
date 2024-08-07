import React from "react";
import { ShoppingBagIcon, ShoppingCartIcon } from "@heroicons/react/24/solid";

function CardBox() {
  const cardList = [
    {
      id: "1",
      title: "Total Orders",
      icon: <ShoppingCartIcon />,
      total: "75",
      metrics: "▲ 3%",
      iconColor: "order",
    },
    {
      id: "2",
      title: "Total Orders",
      icon: <ShoppingBagIcon />,
      total: "70",
      metrics: "▼3%",
      iconColor: "revenue",
    },
    {
      id: "3",
      title: "Total Orders",
      icon: <ShoppingCartIcon />,
      total: "05",
      metrics: "▲3%",
      iconColor: "cancel",
    },
    {
      id: "4",
      title: "Total Orders",
      icon: <ShoppingCartIcon />,
      total: "12k",
      metrics: "▼3%",
      iconColor: "revenue",
    },
  ];
  return (
    <div>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 ">
        {cardList.map((card) => {
          return (
            <div class="bg-primary p-3 rounded-lg shadow w-full">
              <div
                className={`bg-${card.iconColor} p-1 w-10 rounded-md mb-3 shadow md:w-10 mb-1 `}
              >
                {card.icon}
              </div>
              <h2 class="text-textcolor font-normal text-xs">{card.title}</h2>
              <div className="flex justify-between">
                <p class="text-heading text-2xl font-bold mt-2">{card.total}</p>
                <p class={`text-textcolor mt-4 text-right md:text-sm`}>
                  {card.metrics}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CardBox;
