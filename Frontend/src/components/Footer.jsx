import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <hr className="mt-20"></hr>
      <footer className="footer footer-center  p-10 bg-base-200 text-base-content rounded dark:bg-slate-900 dark:text-white">
        <nav className="grid grid-flow-col gap-4">
          <Link to="/about">
            <a className="link link-hover">About us</a>
          </Link>
          <Link to="/contact">
            <a className="link link-hover">Contact</a>
          </Link>
        </nav>
        <nav>
          <div className="grid grid-flow-col gap-4">
            <a href="https://www.linkedin.com/in/shiwani-kumari10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 64 64"
              width="24"
                height="24"
              
                className="fill-current"
            
                
            >
              
              <path
                
                d="M1.15 21.7h13V61h-13zm46.55-1.3c-5.7 0-9.1 2.1-12.7 6.7v-5.4H22V61h13.1V39.7c0-4.5 2.3-8.9 7.5-8.9s8.3 4.4 8.3 8.8V61H64V38.7c0-15.5-10.5-18.3-16.3-18.3zM7.7 2.6C3.4 2.6 0 5.7 0 9.5s3.4 6.9 7.7 6.9 7.7-3.1 7.7-6.9S12 2.6 7.7 2.6z"
              ></path>
            </svg>
            </a>
            <a href="https://www.youtube.com/@shiwanikumari3291">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg>
            </a>
          </div>
        </nav>
        <aside>
          <p>Copyright © 2024 - All right reserved</p>
        </aside>
      </footer>
    </div>
  );
}

export default Footer;
