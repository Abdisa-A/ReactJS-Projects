import { Component } from "react";
import "./search-box.style.css";
class SearchBox extends Component {

    render() {
        const {onChangeHandler,placeholder,className} = this.props;
        return (
        <input 
          className={className}
          placeholder={placeholder}
          type="text" 
          onChange={onChangeHandler}
        />
        )
    }
}

export default SearchBox;