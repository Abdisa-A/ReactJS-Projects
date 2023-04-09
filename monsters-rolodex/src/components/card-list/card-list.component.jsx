import { Component } from "react";
import "./card-list.style.css";
class CardList extends Component {
    render() {

        const {monsters} = this.props;
        return (
            <div className="card-list">
                {monsters.map((monster) => {
                    const {id,name,email} = monster;
                    return (
                        <div key={id} className="monster-card">
                            <img src={`https://robohash.org/${id}?set=set2&size=180x180`} alt={name} width="250px" height="250px"/>
                            <h2>{name}</h2>
                            <p>{email}</p>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default CardList;