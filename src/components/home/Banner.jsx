const Banner = () => {
  return (
    <div
      className="hero h-[600px] bannerBg"
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-lg">
          <h1 className="mb-5 text-5xl font-bold">Welcome to Our Shoe Shop</h1>
          <p className="mb-5 text-gray-200 font-thin">
            Discover the latest trends in footwear at our store. We offer a wide range of styles and sizes. Find your perfect pair today!
          </p>
          <button className="btn btn-primary">Shop Now</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;