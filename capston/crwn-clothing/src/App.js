import "./categories.styles.scss";
const App = () => {
  const categories = [
    {
      id: 1,
      title: "Hats",
    },
    {
      id: 1,
      title: "Jackets",
    },
    {
      id: 1,
      title: "Sneakers",
    },
    {
      id: 1,
      title: "Womens",
    },
    {
      id: 1,
      title: "Mens",
    },
  ];

  return (
    <div className="categories-container">
      {categories.map(({ id, title }) => {
        return (
          <div key={id} className="catagory-container">
            <div className="catagory-body-container">
              {/* <img/> */}
              <h2>{title}</h2>
              <p>Shop Now</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default App;
