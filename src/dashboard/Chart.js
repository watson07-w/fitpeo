import React from "react";

function Chart() {
  return (
    <div className="pl-4 w-full rounded-lg h-full">
      <div class="flex justify-between w-full bg-primary shadow h-64 pt-4">
        <p className="text-textcolor font-bold text-lg  px-5">Activity</p>
        <div>
          <button
            type="button"
            class="inline-flex justify-center gap-x-1.5 rounded-full px-1 py-1 text-sm font-semibold ring-1 mx-7 text-textcolor bg-search"
            id="menu-button"
            aria-expanded="true"
            aria-haspopup="true"
          >
            Options
            <svg
              class="-mr-1 h-5 w-5 text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </div>
        <div
          class="z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none hidden"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabindex="-1"
        >
          <div class="py-1" role="none">
            {/* <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" --> */}
            <form method="POST" action="#" role="none">
              <button
                type="submit"
                class="block w-full px-4 py-2 text-left text-sm text-gray-700"
                role="menuitem"
                tabindex="-1"
                id="menu-item-3"
              >
                Sign out
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chart;
