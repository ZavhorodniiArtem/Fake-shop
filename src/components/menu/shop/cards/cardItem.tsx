import React from "react";
import {Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography} from "@mui/material";
import "../shop.scss"
import {Link, Outlet} from "react-router-dom";


type PropsType = {
    id: number
    price: number
    title: string
    description: string
    category: string
    img: string | undefined
}

const CardItem: React.FC<PropsType> = ({id, img, price, category, description, title}) => {


    return (
        <div className="card">
            <Card sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                width: "345px",
                height: "400px"
            }}>

                {/* TOP */}

                <Link key={id} to={`${id}`}>
                    <CardActionArea sx={{height: "300px"}}>

                        <Box sx={{
                            display: "flex",
                            justifyContent: "center",
                            height: "110px"
                        }}
                        >
                            <CardMedia
                                component="img"
                                image={img}
                                alt={title}
                            />
                        </Box>

                        {/* BETWEEN */}

                        <CardContent sx={{backgroundColor: "lightgray"}}>

                            <Typography gutterBottom variant="h6" component="div" sx={{height: "110px"}}>
                                {title}
                            </Typography>

                            <Typography variant="body2" color="text.secondary" whiteSpace="nowrap"
                                        overflow="hidden" textOverflow="ellipsis"
                                        sx={{
                                            height: "77px",
                                            paddingTop: "3px"
                                        }}
                            >
                                {description}
                            </Typography>

                        </CardContent>

                    </CardActionArea>
                </Link>


                {/* BOTTOM */}

                <CardActions sx={{display: 'flex', justifyContent: "space-around", height: "80px"}}>
                    <Button size="small" color="primary">
                        Add
                    </Button>
                    <Typography>{price} $</Typography>
                </CardActions>

            </Card>
        </div>
    )
}

export default CardItem