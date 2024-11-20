const Accordions = () => {
  return (
    <div className="p-20">
      <h3 className="text-white text-3xl font-bold p-4">
        FrequentlY Asked Question{" "}
      </h3>
      <div className="collapse collapse-plus bg-base-200 rounded-md mb-3">
        <input type="radio" name="my-accordion-3" checked="checked" />
        <div className="collapse-title text-xl font-medium ">
          What is One way data binding?
        </div>
        <div className="collapse-content bg-slate-300">
          <p className="p-5 font-pacifico text-xl ">
          One-way data binding is a simple concept in web development where data flows in one direction, from a data source to a user interface. Imagine you have a model (your data) and a view (what you see on the screen). When your data changes, your view updates to show those changes, but if you make changes in the view, it won't affect the data. It's like a traffic system with cars moving in one lane only – data flows from the model to the view, making it easier to manage and understand how your app works.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200 rounded-md mb-3">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">
        What is NPM in node.js?
        </div>
        <div className="collapse-content bg-slate-300">
          <p className="p-5 font-pacifico text-xl" >In Node.js, NPM (Node Package Manager) is a tool that acts like a digital library for JavaScript. It allows you to easily find, install, and manage packages of code (libraries or modules) created by other developers. These packages can be anything from small, reusable code snippets to entire frameworks. NPM simplifies the process of adding functionality to your Node.js applications, as you can use the packages created and shared by the vast JavaScript community. It's like a giant repository of Lego pieces that you can snap together to build complex applications without starting from scratch.</p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200 rounded-md mb-3">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">
        Different between Mongodb database vs mySQL database?
        </div>
        <div className="collapse-content bg-slate-300">
          <p className="p-5 font-pacifico text-xl">MongoDB and MySQL are both types of databases, but they have some key differences. Imagine MongoDB as a NoSQL database and MySQL as a traditional relational database. MongoDB stores data in a flexible, schema-less format, like storing information in documents in a drawer, making it great for handling unstructured data and scaling horizontally. MySQL, on the other hand, uses a structured, tabular format with predefined schemas, similar to neatly organized spreadsheets in a filing cabinet. While MongoDB is often used for modern, data-intensive applications and supports easy scaling, MySQL is well-suited for applications with complex relationships between data and requires strict data integrity. The choice between the two depends on your specific project requirements and the type of data you're dealing with.</p>
        </div>
      </div>
    </div>
  );
};

export default Accordions;
