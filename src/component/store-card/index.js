import React from 'react';
import { Heading, Text } from '../ui';
import PropType from 'prop-types';

const style = {
    card: {
        boxShadow: "0px 0px 5px #ccc",
        padding: "10px",
        marginTop: "20px",
    },
    image:{
        width : "200px",
        height: "200px"
    }
};


const StoreCard = ({ store }) => {
    const { name, desc, priceRate, rating, delivery, images } = store;

    return (
        <div className="store-card" style={style.card}>

            {
                images.length > 0 &&
                <ul className="d-flex flex-row">
                    <li>
                        <img  src={images[0]} style={style.image} alt="food" />
                    </li>{
                        images[1] &&
                        <li>
                            <img src={images[1]} style={style.image}  alt="magy" />
                        </li>
                    }

                </ul>
            }

            <div className="row">
                <div className="col-8">
                    <Heading text={name} />
                    <Text text={`${priceRate} | ${desc}`} />
                    <Text text={`${rating.stars} Stars | ${rating.votes} ratings`} />
                </div>
                <div className="col-4 d-flex flex-col">
                    <Text text={`${delivery.timeRequired} Mins ${delivery.isFree ? "Free delivery" : "Chargeable"}`} />
                </div>
            </div>
        </div>
    );
};
export default StoreCard;

StoreCard.prototype = {
    store: PropType.object.isRequired
};