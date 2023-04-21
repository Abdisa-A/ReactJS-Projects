import "./directory.styles.scss";
import CategoryItem from "../category-item/category-item";
import Navigation from "../../routes/navigation/navigation.component";

const Directory = ({ categories }) => {
  return (
    <div className="directory-container">
      {categories.map((category) => {
        return <CategoryItem key={category.id} category={category} />;
      })}
    </div>
  );
};

export default Directory;
