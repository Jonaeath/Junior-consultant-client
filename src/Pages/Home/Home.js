import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="drawer m-5">
  <input id="my-drawer" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
    {/* Page content here */}
    <label htmlFor="my-drawer" className="btn btn-primary drawer-button">Open drawer</label>
  </div> 
  <div className="drawer-side mt-36">
    <label htmlFor="my-drawer" className="drawer-overlay"></label>
    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
      {/* Sidebar content here */}
      <li><Link to="/oru">Officers Reported Upon(ORU)</Link></li>
      <li><Link to="/rio">Report Initiating Officer(RIO)</Link></li>
      <li><Link>Counter Signing Officer(CSO)</Link></li>
      <li><Link to='/dashboard'>Dashboard</Link></li>

    </ul>
  </div>
</div>
    );
};

export default Home;