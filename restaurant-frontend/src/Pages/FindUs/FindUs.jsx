import { Helmet } from "react-helmet-async";

const FindUs = () => {
  return (
    <div>
      <Helmet>
        <title>Grand Restaurant | Find Us</title>
      </Helmet>

      {/* Main Section */}
      <div>
        <div className="hero min-h-screen sm:px-32">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center text-stone-100 lg:text-left sm:p-10">
              <h1 className="text-3xl font-bold">Find Us !</h1>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <p> Address: 1858 Richland Avenue, Spring </p>
              <p> phone: 281-801-6139 </p>
              <div>
                <img src="" alt="" />
              </div>
            </div>
            <div className="card flex-shrink-0 w-full rounded-sm max-w-sm shadow-lg shadow-mybrown/30 bg-neutral-800">
              <form className="card-body ">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-white">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Your email here"
                    className="input input-bordered bg-transparent border-2 border-mybrown text-white rounded-sm"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-white">Message</span>
                  </label>
                  {/* <input
                    type="password"
                    placeholder="password"
                    className="input input-bordered"
                    required
                  /> */}
                  <textarea
                    className="input input-bordered bg-transparent border-2 border-mybrown text-white rounded-sm"
                    name="message"
                    id="message"
                    cols="30"
                    rows="10"
                    placeholder="What do you wanna know?"
                  ></textarea>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-outline bg-mybrown rounded-sm hover:bg-mybrown">
                    {" "}
                    Send{" "}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindUs;
