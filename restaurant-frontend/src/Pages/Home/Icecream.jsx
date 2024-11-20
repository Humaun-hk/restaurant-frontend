

const Icecream = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://i.ibb.co/GMYfTg6/plates.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-20"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md pb-20">
          <h1 className="mb-5 text-7xl text-myred font-bold font-pacifico">Hello there</h1>
          <p className="mb-5 text-lg">
            What's in your mind today?
          </p>
          <button className="btn btn-outline rounded-md text-mybrown hover:bg-mybrown">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Icecream;
