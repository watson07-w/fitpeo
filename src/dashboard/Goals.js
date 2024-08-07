import React from "react";
import { PlusCircleIcon } from "@heroicons/react/24/solid";
import { ChevronRightIcon } from "@heroicons/react/24/solid";

function Goals() {
  const goalList = [
    {
      icon: <PlusCircleIcon />,
      title: "Goals",
      arrowicon: <ChevronRightIcon />,
      goalColor: "cancel",
    },
    {
      icon: <PlusCircleIcon />,
      title: "Popular Dishes",
      arrowicon: <ChevronRightIcon />,
      goalColor: "order",
    },
    {
      icon: <PlusCircleIcon />,
      title: "Menus",
      arrowicon: <ChevronRightIcon />,
      goalColor: "revenue",
    },
  ];
  return (
    <div className="bg-primary shadow rounded-lg pt-5">
      {goalList.map((goal) => {
        return (
          <div className="flex justify-between items-center">
            <div className="flex justify-start items-center">
              <div
                className={`bg-${goal.goalColor} w-14 h-14 rounded-full p-4 mx-4 text-textcolor`}
              >
                {goal.icon}
              </div>
              <div className="my-6 md:mr-0">
                <p className="text-textcolor text-xl font-bold pt-1">
                  {goal.title}
                </p>
              </div>
            </div>
            <div className=" bg-iconsBackground w-7 rounded-full mx-4 my-4 text-textcolor">
              {goal.arrowicon}
            </div>
          </div>
        );
      })}
      {/* <div className="flex justify-between items-center">
        <div className="flex justify-start items-center">
          <div className="bg-cancel w-14 h-14 rounded-full p-4 mx-4 my-4">
            <PlusCircleIcon />
          </div>
          <div className="my-6 md:mr-0">
            <p className="text-textcolor text-xl font-bold pt-1">Goals</p>
          </div>
        </div>
        <div className=" bg-iconsBackground w-7 rounded-full mx-4 my-4 ">
          <ChevronRightIcon />
        </div>
      </div>

      <div className="flex justify-between items-center">
        <div className="flex justify-start items-center">
          <div className="bg-order w-14 h-14 rounded-full p-4 mx-4 my-4">
            <PlusCircleIcon />
          </div>
          <div className="my-6 md:mr-0">
            <p className="text-textcolor text-xl font-bold pt-1">
              Popular Dishes
            </p>
          </div>
        </div>
        <div className=" bg-iconsBackground w-7 rounded-full mx-4 my-4">
          <ChevronRightIcon className="text-textcolor" />
        </div>
      </div>

      <div className="flex justify-between items-center">
        <div className="flex justify-start items-center">
          <div className="bg-revenue w-14 h-14 rounded-full p-4 mx-4 my-4">
            <PlusCircleIcon />
          </div>
          <div className="my-6">
            <p className="text-textcolor text-xl font-bold pt-1">Menus</p>
          </div>
        </div>
        <div className=" bg-iconsBackground w-7 rounded-full mx-4 my-4">
          <ChevronRightIcon className="text-textcolor" />
        </div>
      </div> */}
    </div>
  );
}

export default Goals;
