import React from "react";

function CardBox() {
  return (
    <div>
      <p className="text-textcolor font-bold text-3xl pt-4 px-6">Dashboard</p>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 pt-5 px-4">
        <div class="bg-primary p-3 rounded-lg shadow w-32 md:w-28">
          <div className="bg-order p-1 w-11 rounded-md mb-3 shadow md:w-10 mb-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-8 px-1 text-textcolor"
            >
              <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
            </svg>
          </div>
          <h2 class="text-textcolor font-normal text-xs">Total Orders</h2>
          <div className="flex justify-between">
            <p class="text-textcolor text-2xl font-bold mt-2 md:text-lg">75</p>
            <p class="text-delivered mt-4 text-right">▲ 3%</p>
          </div>
        </div>

        <div class="bg-primary p-3 rounded-lg shadow w-32 md:w-28">
          <div className="bg-delivered p-1 w-11 rounded-md mb-3 shadow md:w-10 mb-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-8 px-1 text-textcolor"
            >
              <path
                fillRule="evenodd"
                d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 0 0 4.25 22.5h15.5a1.875 1.875 0 0 0 1.865-2.071l-1.263-12a1.875 1.875 0 0 0-1.865-1.679H16.5V6a4.5 4.5 0 1 0-9 0ZM12 3a3 3 0 0 0-3 3v.75h6V6a3 3 0 0 0-3-3Zm-3 8.25a3 3 0 1 0 6 0v-.75a.75.75 0 0 1 1.5 0v.75a4.5 4.5 0 1 1-9 0v-.75a.75.75 0 0 1 1.5 0v.75Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <h2 class="text-textcolor font-normal text-xs">Total Delivered</h2>
          <div className="flex justify-between">
            <p class="text-textcolor text-2xl font-bold mt-2 md:text-lg">70</p>
            <p class="text-cancel mt-4 text-right">▼ 3%</p>
          </div>
        </div>

        <div class="bg-primary p-3 rounded-lg shadow w-32 md:w-28">
          <div className="bg-cancel p-1 w-11 rounded-md mb-3 shadow md:w-10 mb-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-8 px-1 text-textcolor"
            >
              <path d="M3.375 3C2.339 3 1.5 3.84 1.5 4.875v.75c0 1.036.84 1.875 1.875 1.875h17.25c1.035 0 1.875-.84 1.875-1.875v-.75C22.5 3.839 21.66 3 20.625 3H3.375Z" />
              <path
                fillRule="evenodd"
                d="m3.087 9 .54 9.176A3 3 0 0 0 6.62 21h10.757a3 3 0 0 0 2.995-2.824L20.913 9H3.087Zm6.133 2.845a.75.75 0 0 1 1.06 0l1.72 1.72 1.72-1.72a.75.75 0 1 1 1.06 1.06l-1.72 1.72 1.72 1.72a.75.75 0 1 1-1.06 1.06L12 15.685l-1.72 1.72a.75.75 0 1 1-1.06-1.06l1.72-1.72-1.72-1.72a.75.75 0 0 1 0-1.06Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <h2 class="text-textcolor font-normal text-xs">Total Cancelled</h2>
          <div className="flex justify-between">
            <p class="text-textcolor text-2xl font-bold mt-2 md:text-lg">05</p>
            <p class="text-delivered mt-4 text-right md:text-ms">▲ 3%</p>
          </div>
        </div>

        <div class="bg-primary p-3 rounded-lg shadow w-32 md:w-28 ">
          <div className="bg-revenue p-1 w-11 rounded-md mb-3 shadow md:w-10 mb-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-8 px-1 text-textcolor"
            >
              <path
                fillRule="evenodd"
                d="M2.25 2.25a.75.75 0 0 0 0 1.5H3v10.5a3 3 0 0 0 3 3h1.21l-1.172 3.513a.75.75 0 0 0 1.424.474l.329-.987h8.418l.33.987a.75.75 0 0 0 1.422-.474l-1.17-3.513H18a3 3 0 0 0 3-3V3.75h.75a.75.75 0 0 0 0-1.5H2.25Zm6.54 15h6.42l.5 1.5H8.29l.5-1.5Zm8.085-8.995a.75.75 0 1 0-.75-1.299 12.81 12.81 0 0 0-3.558 3.05L11.03 8.47a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 1 0 1.06 1.06l2.47-2.47 1.617 1.618a.75.75 0 0 0 1.146-.102 11.312 11.312 0 0 1 3.612-3.321Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <h2 class="text-textcolor font-normal text-xs">Total Revenue</h2>
          <div className="flex justify-between">
            <p class="text-textcolor text-2xl font-bold mt-2 md:text-lg">
              $12k
            </p>
            <p class="text-cancel mt-4 text-right md:text-sm">▼ 3%</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardBox;
