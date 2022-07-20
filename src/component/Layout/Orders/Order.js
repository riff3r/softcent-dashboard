import React, { useState } from "react";
import actionDot from "../../../Assets/Images/action-dot.png";
import edit from "../../../Assets/Images/edit.png";
import thrash from "../../../Assets/Images/trash.png";

const Order = () => {
  const [actionVisible, setActionVisible] = useState(false);

  return (
    <div className="bg-base-100 rounded-lg p-6">
      <div className="flex items-center justify-between mb-7">
        <div className="">
          <span className="">Result :</span>

          <select class="ml-5 select select-bordered select-sm w-[80px] py-0">
            <option selected>07</option>
            <option>08</option>
            <option>09</option>
          </select>
        </div>

        <button className="btn btn-primary px-10">Add New</button>
      </div>

      <div>
        <div class="overflow-x-auto w-full">
          <table class="table w-full">
            {/* <!-- head --> */}
            <thead>
              <tr>
                <th className="bg-accent">
                  <label>
                    <input type="checkbox" class="checkbox" />
                  </label>
                </th>
                <th className="bg-accent">Invoice Id</th>
                <th className="bg-accent">Name </th>
                <th className="bg-accent">Email</th>
                <th className="bg-accent">Date</th>
                <th className="bg-accent">Amount</th>
                <th className="bg-accent">Status</th>
                <th className="bg-accent">Actions</th>
              </tr>
            </thead>

            <tbody>
              {/* <!-- row 1 --> */}
              <tr>
                <th>
                  <label>
                    <input type="checkbox" class="checkbox" />
                  </label>
                </th>
                <td>
                  <p>#081451</p>
                </td>
                <td>Laurie Fox</td>
                <td>lauriefox@company.com </td>
                <td>15 Dec 2020</td>
                <td>$2275.45</td>
                <td>
                  <button className="bg-green-100 text-green-600 py-2 px-8 rounded-md font-semibold">
                    Paid
                  </button>
                </td>
                <th className="relative z-10">
                  <a href="#" onClick={() => setActionVisible(!actionVisible)}>
                    <img src={actionDot} alt="" />
                  </a>
                  <div
                    className={`bg-base-100 w-[166px] shadow-lg p-3 rounded-lg absolute right-0  ${
                      actionVisible ? "block" : "hidden"
                    }`}
                  >
                    <div>
                      <button className="btn btn-accent text-primary block w-full mb-3 flex items-center gap-3 justify-start">
                        <img src={edit} alt="" />
                        <p>Edit</p>
                      </button>
                    </div>

                    <div>
                      <button className="btn bg-red-100 text-red-500 block w-full flex items-center gap-3 justify-start">
                        <img src={thrash} alt="" />
                        <p>Delete</p>
                      </button>
                    </div>
                  </div>
                </th>
              </tr>

              <tr>
                <th>
                  <label>
                    <input type="checkbox" class="checkbox" />
                  </label>
                </th>
                <td>
                  <p>#081451</p>
                </td>
                <td>Laurie Fox</td>
                <td>lauriefox@company.com </td>
                <td>15 Dec 2020</td>
                <td>$2275.45</td>
                <td>
                  <button className="bg-red-100 text-red-600 py-2 px-8 rounded-md font-semibold">
                    Pending
                  </button>
                </td>
                <th className="relative">
                  <img src={actionDot} alt="" />
                </th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Order;
