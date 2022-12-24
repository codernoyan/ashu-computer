import React from 'react';

const Banner = () => {
  return (
    <div id="home" className='h-[60vh] lg:h-screen'>
      <section className="bg-dark text-white">
        <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-4xl font-bold text-transparent sm:text-7xl font-siliguri pt-4 mt-8 lg:-mt-20">
              <span className="block">আশু কম্পিউটার</span>
              <span className="block text-5xl">এন্ড ডিজিটাল পোস্ট অফিস</span>
              {/* <span className="sm:block"> Increase Conversion. </span> */}
            </h1>
            <p className="mx-auto mt-4 max-w-xl sm:text-4xl sm:leading-relaxed font-medium font-siliguri">
            আধুনিক সেবা প্রদানে একধাপ এগিয়ে
            </p>
            {/* <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a className="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto" href="/get-started">
                Get Started
              </a>
              <a className="block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto" href="/about">
                Learn More
              </a>
            </div> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;