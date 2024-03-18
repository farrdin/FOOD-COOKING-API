const Banner = () => {
  return (
    <div className="banner">
      <div
        className="hero rounded-3xl min-h-screen"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/k6zB5mL/Rectangle-1.jpg?fbclid=IwAR2xQbuKQwwDbYM1g3yewjy1NpJiA2R8kxoe4wFaW2HIrUMUyDNvfDxLNCo)",
        }}
      >
        <div className="hero-content text-center text-neutral-content">
          <div className="w-[68%]">
            <h1 className="mb-5 text-5xl font-bold leading-[76px] ">
              Discover an exceptional cooking class tailored for you!
            </h1>
            <p className="mb-5 text-lg text-white font-normal leading-8 ">
              "Explore our diverse recipe collection! From traditional favorites
              to international delights, embark on a flavorful journey with our
              website's culinary treasures."
            </p>
            <button className="btn bg-[#0BE58A] p-3 rounded-full text-[#150B2B] text-base font-semibold mr-3">
              Explore Now
            </button>
            <button className="btn btn-ghost border-white  p-3 rounded-full text-white text-base font-semibold">
              Our Feedback
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
