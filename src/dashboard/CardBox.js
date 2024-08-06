import React from "react";
import {  ShoppingBagIcon, ShoppingCartIcon } from '@heroicons/react/24/solid'

function CardBox() {
  const cardList = [
    {
      id: '1',
      title: 'Total Orders',
      icon:  <ShoppingCartIcon  />,
      total: '75',
      metrics: '3%',
      iconColor: 'cancel'
    },
    {
      id: '2',
      title: 'Total Orders',
      icon:  <ShoppingCartIcon  />,
      total: '75',
      metrics: '3%',
      iconColor: 'delivered'
    },
    {
      id: '3',
      title: 'Total Orders',
      icon:  <ShoppingCartIcon  />,
      total: '75',
      metrics: '3%',
      iconColor: 'delivered'
    },
    {
      id: '4',
      title: 'Total Orders',
      icon:  <ShoppingCartIcon  />,
      total: '75',
      metrics: '3%',
      iconColor: 'cancel'
    }
  ]
  return (
    <div>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 ">
      {
        cardList.map((card)=>{
          return (   <div class="bg-primary p-3 rounded-lg shadow w-full">
          <div className={`bg-${card.iconColor} p-1 w-11 rounded-md mb-3 shadow md:w-10 mb-1`}>
           {card.icon}
          </div>
          <h2 class="text-textcolor font-normal text-xs">{card.title}</h2>
          <div className="flex justify-between">
            <p class="text-textcolor text-2xl font-bold mt-2 md:text-lg">
              {card.total}
            </p>
            <p class={`text-${card.iconColor} mt-4 text-right md:text-sm`}>{card.metrics}</p>
          </div>
        </div>)
        })
      }   
      </div>
    </div>
  );
}

export default CardBox;
