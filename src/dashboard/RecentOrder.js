import React from "react";

function RecentOrder() {
  return (
    <div className="bg-primary shadow ml-4 rounded-lg h-96">
      <p className="text-textcolor font-bold text-lg pt-2 px-5">Recent Order</p>
      <div className="py-5">
        <table class="table-fixed w-full text-textcolor">
          <thead>
            <tr className="border-b">
              <th>Customer</th>
              <th>Order No.</th>
              <th> Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b-2">
              <td className="flex mx-3 my-4">
                {" "}
                <img
                  alt=""
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  className="mr-2 h-6 w-6 rounded-full cursor-pointer"
                />
                <p>Wade Warren</p>
              </td>
              <td className="px-11 py-3">1546789</td>
              <td className="px-11 py-3">$124.00</td>
              <td>
                <button class="bg-delivered shadow hover:bg-delivered focus:outline-none focus:ring focus:ring-violet-300 ... rounded-full py-1 px-3 mx-4">
                  Save changes
                </button>
              </td>
            </tr>
            <tr className="border-b-2">
              <td className="flex mx-3 my-4">
                {" "}
                <img
                  alt=""
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  className="mr-2 h-6 w-6 rounded-full cursor-pointer"
                />
                <p>Jane Cooper</p>
              </td>
              <td className="px-11 py-3">1546789</td>
              <td className="px-11 py-3">$124.00</td>
              <td>
                <button class="bg-delivered shadow hover:bg-delivered focus:outline-none focus:ring focus:ring-violet-300 ... rounded-full py-1 px-3 mx-4">
                  Save changes
                </button>
              </td>
            </tr>
            <tr className="border-b-2">
              <td className="flex mx-3 my-4">
                {" "}
                <img
                  alt=""
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  className="mr-2 h-6 w-6 rounded-full cursor-pointer"
                />
                <p>Guy Hawkins</p>
              </td>
              <td className="px-11 py-3">1546789</td>
              <td className="px-11 py-3">$124.00</td>
              <td>
                <button class="bg-cancel hover:bg-cancel focus:outline-none focus:ring focus:ring-violet-300 ... rounded-full py-1 px-3 mx-4">
                  Save changes
                </button>
              </td>
            </tr>
            <tr>
              <td className="flex mx-2 my-3">
                {" "}
                <img
                  alt=""
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  className="mr-2 h-6 w-6 rounded-full cursor-pointer"
                />
                <p>Kristin Watson</p>
              </td>
              <td className="px-11 py-3">1546789</td>
              <td className="px-11 py-3">$124.00</td>
              <td>
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
