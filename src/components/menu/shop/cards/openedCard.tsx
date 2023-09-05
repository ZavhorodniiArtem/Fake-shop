import React, {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import CardItem from "./cardItem";
import {useSelector} from "react-redux";
import {RootState} from "../../../../store";
import {Button} from "@mui/material";


const OpenedCard: React.FC = () => {

    let {id} = useParams()
    const {loading} = useSelector((state: RootState) => state.fakeShop)
    const [item, setItem] = useState<any>(null)
    const navigate = useNavigate()

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res => res.json())
            .then(data => setItem(data))
    }, [id])

    const goBack = () => navigate(-1)



    if (loading ||  item === null) {
        return <div>Loading...</div>

    }

    return (
        <div>
            <CardItem id={item.id}
                      title={item.title}
                      description={item.description}
                      price={item.price}
                      img={item.image}
                      category={item.category}
            />
            <Button onClick={goBack}>Go back</Button>
        </div>
    )
}

export default OpenedCard