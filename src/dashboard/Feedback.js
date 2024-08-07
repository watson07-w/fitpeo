import { StarIcon } from "@heroicons/react/24/solid";
import React from "react";

function Feedback() {
  const feedbackList = [
    {
      profie:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      name: "Jenny Wilson",
      reviewCount: 4,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veni quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum",
    },
    {
      profie:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      name: "Dianne Russsel",
      reviewCount: 4,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veni quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum",
    },
    {
      profie:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      name: "Devon Lane",
      reviewCount: 4,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veni quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum",
    },
    {
      profie:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      name: "Devon Lane",
      reviewCount: 4,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veni quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum",
    },
  ];
  return (
    <div className=" bg-primary shadow rounded-lg sm:overflow-y-auto sm:h-80">
      <p className="text-heading font-bold text-xl pt-5 pl-5 ">
        Customer's Feedback
      </p>
      <div className="overscroll-auto ...">
        {feedbackList.map((feedback) => {
          return (
            <div className="flex py-5 px-5 border-b border-grey">
              <img
                alt=""
                src={feedback.profie}
                className="mr-4 h-8 w-8 rounded-full cursor-pointer"
              />
              <div className="flex flex-col">
                <p className="text-textcolor text-lg font-bold">
                  {feedback.name}
                </p>
                <div className="flex">
                  {
                    Array(feedback.reviewCount).fill('').map(() => <StarIcon width={20} height={20} className="text-star" />)
                  }
                </div>
                <p className="text-textcolor text-sm">{feedback.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Feedback;
