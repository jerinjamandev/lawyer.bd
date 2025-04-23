import React from 'react';

const Banner = () => {
    return (
        <div>
            <div
  className="hero h-[500px] mx-auto w-[95%] my-10 rounded-3xl"
  style={{
    backgroundImage:
      "url(https://i.ibb.co.com/Gf860H45/banner-img-1.png)",
  }}
>
  
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-lg">
      <h1 className="mb-5 text-3xl font-bold">It avoids subjective claims or exaggeration that might raise red flags legally</h1>
      <p className="mb-5 text-xs">
      Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.
      </p>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;