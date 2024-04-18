import React from 'react'
import { Link } from "react-router-dom";

import { useForm } from "react-hook-form";
function Contact() {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
    
      const onSubmit = (data) => console.log(data);
  return (

    <>
      <div className="flex h-screen items-center justify-center mt-10">
        <div className=" w-[600px] ">
          <div className="modal-box">
            <form onSubmit={handleSubmit(onSubmit)} method='dialog'>
              {/* if there is a button in form, it will close the modal */}
              <Link
                to="/"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                ✕
              </Link>
             
              <h3 className="font-bold text-black text-lg">Contact Us</h3>
              <div className="mt-4 text-black space-y-2">
                <span >Name</span>
                <br />
                <input
                  type="text"
                  placeholder="Enter your fullname"
                  className="w-80 px-3 py-1 border rounded-md outline-none"
                  {...register("fullname", { required: true })}
                />
                <br />
                {errors.fullname && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              
              </div>
              {/* Email */}
              <div className="mt-4 text-black space-y-2">
                <span>Email</span>
                <br />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-80 px-3 py-1 border rounded-md outline-none"
                  {...register("email", { required: true })}
                />
              
              <br />
            {errors.email && (
              <span className="text-sm text-red-500">
                This field is required
              </span>
            )}
          </div>
              
              <div className="mt-4 text-black space-y-2">
                <span>Message</span>
                <br />
            
                  <textarea  className="w-80 px-3 py-1 border rounded-md outline-none" cols="35" rows="10" placeholder="Leave a comment here" ></textarea>
                  
                
                 
                  
            
          
              </div>
              {/* Button */}
              <div className="flex justify-around mt-4">
                <button className="bg-black text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
                  Submit
                </button>
            
              </div>
              </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact
