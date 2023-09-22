import React from 'react';

const Dashboard = () => {
    return (
        <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr className='text-xl text-black font-bold'>
        <th></th>
        <th>Name</th>
        <th>Designation</th>
        <th>User Details</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        <th>1</th>
        <td>Mr. ORU</td>
        <td>Officers Reported Upon</td>
        <td>
        <select className="select select-bordered w-1/2 max-w-xs">
          <option disabled selected>Selected User</option>
             <option>Admin</option>
              <option>User</option>
        </select>
        </td>
      </tr>
      {/* row 2 */}
      <tr className="hover">
        <th>2</th>
        <td>Mr. RIO</td>
        <td>Report Initiating Officer</td>
        <td>
        <select className="select select-bordered w-1/2 max-w-xs">
          <option disabled selected>Selected User</option>
             <option>Admin</option>
              <option>User</option>
        </select>
        </td>
      </tr>
      {/* row 3 */}
      <tr>
        <th>3</th>
        <td>Mr. CSO</td>
        <td>Counter Signing Officer</td>
        <td>
        <select className="select select-bordered w-1/2 max-w-xs">
          <option disabled selected>Selected User</option>
             <option>Admin</option>
              <option>User</option>
        </select>
        </td>
      </tr>
    </tbody>
  </table>
</div>
    );
};

export default Dashboard;