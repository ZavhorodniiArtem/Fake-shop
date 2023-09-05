import React from "react";
import {useSelector} from "react-redux";
import {RootState} from "../../../../store";
import "../shop.scss"
import CardItem from "./cardItem";

const Cards: React.FC = () => {

    const {shop, loading} = useSelector((state: RootState) => state.fakeShop)


    if (loading || shop === null) {
        return <div>Loading...</div>

    }

    return (
        <div className="cards">
            {
                shop.map((card) => (

                    <CardItem key={card.id}
                              id={card.id}
                              title={card.title}
                              description={card.description}
                              category={card.category}
                              img={card.image}
                              price={card.price}
                    />

                ))
            }
        </div>
    )
}

export default Cards