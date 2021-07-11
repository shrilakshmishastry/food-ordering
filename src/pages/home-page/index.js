import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { getProductsForHomePage } from '../../store/action/products';
export default function HomePage() {
    const dispatch = useDispatch();
    React.useEffect(() => {
        dispatch(getProductsForHomePage(dispatch));
    }, []);

    const state = useSelector((state) => state.products.products);

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-3 bg-primary">
                    ddddd
                </div>
                <div className="col-md-9">
                    {state && state.length > 0 &&
                        state.map((products, index) => {
                            return (
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={products.url} />
                                    <Card.Body>
                                        <Card.Title>{products.name}</Card.Title>
                                        <Card.Text >
                                            {products.price}
                                            {products.description}
                                        </Card.Text>
                                        <Button variant="primary">Go somewhere</Button>
                                    </Card.Body>
                                </Card>
                            );
                        })
                    }
                </div>
            </div>
        </div>
    );
}