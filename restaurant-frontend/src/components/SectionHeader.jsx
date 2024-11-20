const SectionHeader = ({props}) => {
  
    const {name} = props
    return (
    <div className="divider w-3/4 text-mybrown  mx-auto text-2xl uppercase font-bold before:bg-mybrown after:bg-mybrown pb-5">
      {name}
    </div>
  );
};

export default SectionHeader;


  // const sectionTitle = {
  //     name : "Subscribe Now"
  // }
