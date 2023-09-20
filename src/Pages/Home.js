import React from 'react';

const Home = () => {
    const handeMyfrom = event =>{
        event.preventDefault();
        const form = event.target;
        const id = form.id.value;
        const name = form.name.value;
        const designation = form.designation.value;
        const deptName = form.deptName.value;
        const email = form.email.value;
        console.log(id,name,designation,deptName,email);

    //     const sentMyData = {
    //         id,
    //         name,
    //         designation,
    //         deptName,
    //         email,
    //     }

    //     //    Data send to Mongodb, Booking data or information

    //     fetch('http://localhost:5000/sentData',{
    //         method:'POST',
    //         headers:{
    //             'content-type':'application/json'
    //         },
    //         body: JSON.stringify(SendingData)
    //     }) 
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data)
    //         if(data.acknowledged){
    //             alert("Your Data is send successfully")
                
    //         }

    //     })
    //     .catch(error =>console.error(error))
    // }
    }

    
    return (
        <div className="relative flex flex-col justify-center h-screen overflow-hidden">
        <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
            <h1 className="text-3xl font-semibold text-center text-purple-700">Question One</h1>
            <form onSubmit={handeMyfrom} className="space-y-4">
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
                    <button className="btn btn-block btn-primary">Submit to Rio</button>
                </div>
                
            </form>
        </div>
        </div>
    );
};

export default Home;