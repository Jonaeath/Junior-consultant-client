import { Radio } from '@material-tailwind/react';
import React from 'react';


const CSO = () => {
    
    const handelMyCSOfrom = event =>{
        event.preventDefault();
    }

    return (
        <div>
         <div className="relative flex flex-col justify-center pt-1">
        <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
            <h1 className="text-3xl font-semibold text-center text-purple-700">Report Initiating Officer(RIO)</h1>
            <form onSubmit={handelMyCSOfrom} className="space-y-4">
                <div>
                <label className="label">
                    <span className="text-base label-text">ID</span>
                    </label>
                    <input type="text" name="id" placeholder="ID" className="w-full input input-bordered input-primary" />

                </div>
                <div>
                    <label className="label">
                        <span className="text-base label-text">Name</span>
                    </label>
                    <input type="text" name="name" placeholder="Name" className="w-full input input-bordered input-primary" />
                </div>
                <div>
                <label className="label">
                        <span className="text-base label-text">Designation</span>
                    </label>
                    <input type="text" name="designation" placeholder="Designation" className="w-full input input-bordered input-primary" />
                </div>
                <div>
                <label className="label">
                        <span className="text-base label-text">Department Name</span>
                    </label>
                    <input type="text" name="deptName" placeholder="Department Name" className="w-full input input-bordered input-primary" />
                </div>
                {/* <div>
                <label className="label">
                        <span className="text-base label-text">DOB</span>
                    </label>
                    <input type="text" placeholder="DOB" className="w-full input input-bordered input-primary" />
                </div> */}
                 <div>
                    <label className="label">
                        <span className="text-base label-text">Email</span>
                    </label>
                    <input type="text" name="email" placeholder="Email Address" className="w-full input input-bordered input-primary" />
                </div>
                <div>
                    <label className="label">
                        <span className="text-base label-text">Mobile No</span>
                    </label>
                    <input type="text" placeholder="Mobile No" className="w-full input input-bordered input-primary" />
                </div>
                <div>
                    <label className="label">
                        <span className="text-base label-text">Period of working Time last Yaer</span>
                    </label>
                    <input type="text" placeholder="Period of working Time last Yaer" className="w-full input input-bordered input-primary" />
                </div>
                <div>
                    <label className="label">
                        <span className="text-base label-text">Activity that your work last year</span>
                    </label>
                    <input type="text" placeholder="Activity that your work last year" className="w-full input input-bordered input-primary" />
                </div>
                <div>
                  <h2>GOOD?</h2>  
                <div className="flex justify-center gap-10">
                     <Radio name="type" label="Yes" />
                     <Radio name="type" label="No" defaultChecked />
                </div>
                <div>
                    <label className="label">
                        <span className="text-base label-text">Marks</span>
                    </label>
                    <input type="text" placeholder="Marks" className="w-1/2 input input-bordered input-primary" />
                </div>
                </div>
                <div>
                    <button className="btn btn-block btn-primary">Submit to CSO</button>
                </div>
                
            </form>
                    </div>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>

       </div>
    );
};

export default CSO;