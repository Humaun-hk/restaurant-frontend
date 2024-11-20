import SectionHeader from "./SectionHeader";

const Subscribe = () => {
  const sectionTitle = {
    name : "Subscribe Now"
}
  return (
    <div className="py-20 flex flex-col justify-center items-center">
      <SectionHeader props={sectionTitle}></SectionHeader>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-5">
        <h3 className="text-center sm:text-right text-lg text-white">
          Subscribe now to receive fresh <br /> offer and deal by email{" "}
        </h3>
        <div className="join">
          <input
            className="input input-bordered join-item"
            placeholder="Email"
          />
          <button className="btn join-item  bg-mybrown text-white border-mybrown">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
