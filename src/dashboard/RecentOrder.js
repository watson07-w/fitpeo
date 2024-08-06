import React from "react";

function RecentOrder() {
  return (
    <div className="bg-primary shadow rounded-lg p-4">
      <p className="text-textcolor font-bold text-lg ">Recent Order</p>
      <div className="">
        <table class="table-fixed w-full text-textcolor text-sm">
          <thead>
            <tr className="border-b  border-grey pb-4">
              <th className="text-left py-3">Customer</th>
              <th className="text-center py-3">Order No.</th>
              <th className="text-center py-3"> Amount</th>
              <th className="text-center py-3">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-grey ">
              <td className="flex py-3">
                <img
                  alt=""
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  className="mr-2 h-6 w-6 rounded-full cursor-pointer"
                />
                <p>Wade Warren</p>
              </td>
              <td className="text-center">1546789</td>
              <td className="text-center">$124.00</td>
              <td className="text-center">
                <button class="bg-delivered shadow hover:bg-delivered focus:outline-none focus:ring focus:ring-violet-300 ... rounded-full py-1 px-3 mx-4">
                  Save changes
                </button>
              </td>
            </tr>
            <tr className="border-b  border-grey">
              <td className="flex py-3">
                {" "}
                <img
                  alt=""
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  className="mr-2 h-6 w-6 rounded-full cursor-pointer"
                />
                <p>Jane Cooper</p>
              </td>
              <td className="text-center">1546789</td>
              <td className="text-center">$124.00</td>
              <td className="text-center">
                <button class="bg-delivered shadow hover:bg-delivered focus:outline-none focus:ring focus:ring-violet-300 ... rounded-full py-1 px-3 mx-4">
                  Save changes
                </button>
              </td>
            </tr>
            <tr className="border-b border-grey ">
              <td className="flex py-3">
                {" "}
                <img
                  alt=""
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  className="mr-2 h-6 w-6 rounded-full cursor-pointer"
                />
                <p>Guy Hawkins</p>
              </td>
              <td className="text-center">1546789</td>
              <td className="text-center">$124.00</td>
              <td className="text-center">
                <button class="bg-cancel hover:bg-cancel focus:outline-none focus:ring focus:ring-violet-300 ... rounded-full py-1 px-3 mx-4">
                  Save changes
                </button>
              </td>
            </tr>
            <tr className=" ">
              <td className="flex py-3">
                {" "}
                <img
                  alt=""
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  className="mr-2 h-6 w-6 rounded-full cursor-pointer"
                />
                <p>Kristin Watson</p>
              </td>
              <td className="text-center">1546789</td>
              <td className="text-center">$124.00</td>
              <td className="text-center">
                <button class="bg-cancel shadow hover:bg-cancel focus:outline-none focus:ring focus:ring-violet-300 ... rounded-full py-1 px-3 mx-4">
                  Save changes
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default RecentOrder;
