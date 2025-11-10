import React from "react";
import { MdSend } from 'react-icons/md';

export default function Newsletter() {
  return (
    <section className="w-full md:py-20 py-18 bg-[var(--main-color)]">
      <div className="lg:container w-full mx-auto px-4">
        <div className="flex items-center justify-between">
          <h2 className="font-[var[(--font-figtree)]] font-[800] xl:text-7xl md:text-6xl text-5xl">
            Stay Tuned & Subscribe to Our{" "}
            <span className="text-white bg-black">Newsletter</span>
          </h2>

          <div className="">
            <form action="">
                <div className="relative" id="newletterForm">
                    <input type="text" placeholder="Enter Email Adress" name="email" />
                    <button><MdSend/></button>
                </div>

                <div>
                    <input type="checkbox" id="term" />
                    <label htmlFor="term">I agree to the <a href="" >Privacy Policy.</a></label>
                </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
