import React from "react";
function RecentOrder() {
  const orderList = [
    {
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      name: "Wade Warren",
      orderno: "1546789",
      amount: "$124.00",
      status: "Delivered",
      button: "#6a3034",
    },
    {
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      name: "Jane Cooper",
      orderno: "1546789",
      amount: "$365.02",
      status: "Cancelled",
      button: "#6a3034",
    },
    {
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      name: "Guy Hawkins",
      orderno: "1546789",
      amount: "$45.88",
      status: "Pending",
      button: "#0a5845",
    },

    {
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      name: "Kristin Watson",
      orderno: "1546789",
      amount: "$65.00",
      status: "Delivered",
      button: "#6a3034",
    },
    {
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      name: "Kristin Watson",
      orderno: "1546789",
      amount: "$124.00",
      status: "Delivered",
      button: "#0a5845",
    },
  ];
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
            {orderList.map((order) => {
              return (
                <tr className="border-b border-grey ">
                  <td className="flex py-3">
                    <img
                      alt=""
                      src={order.image}
                      className="mr-2 h-6 w-6 rounded-full cursor-pointer"
                    />
                    <p>{order.name}</p>
                  </td>
                  <td className="text-center">{order.orderno}</td>
                  <td className="text-center">{order.amount}</td>
                  <td className="text-center">
                    <button
                      className={` text-white rounded-full py-1 px-3`}
                      style={{ backgroundColor: order.button }}
                    >
                      {order.status}
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default RecentOrder;
