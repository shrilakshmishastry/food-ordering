import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { addNewProduct,deleteProduct,getProductsForHomePage } from './../../../store/action/products';
import Table from 'react-bootstrap/Table'

export default function AdminAddProduct() {
    const dispatch = useDispatch();
    const state = useSelector(state => state.products.products);
    React.useEffect(()=>{
        getProductsForHomePage()(dispatch);
    },[]);

    console.log(state);
    return (
        <div className="container">
            <div className="row">
                <div className="col-8 ">
                    <Formik
                        initialValues={{}}
                        // validate={(values) => {
                        //     const errors = {};
                        //     if (values.email === "") {
                        //         errors.email = "Email cannot be blank";
                        //     }
                        //     return errors;
                        // }}
                        // validationSchema={loginSchema}
                        onSubmit={(values, { resetForm }) => {
                            addNewProduct(values)(dispatch);
                            resetForm({ name: "", description: "", image: "", price: "", rating: "" });
                        }}
                    >
                        {({ handleChange, handleSubmit, values, errors }) => {
                            return (

                                <Form onSubmit={handleSubmit}>
                                    <Form.Group controlId="name">
                                        <Form.Label>Product Name</Form.Label>
                                        <Form.Control value={values.name} onChange={handleChange} type="text" placeholder="Pizza Burger" name="name" />
                                    </Form.Group>

                                    <Form.Group controlId="description">
                                        <Form.Label>Product description</Form.Label>
                                        <Form.Control value={values.description} onChange={handleChange} type="text" name="description" />
                                    </Form.Group>

                                    <Form.Group controlId="image">
                                        <Form.Label>Product image</Form.Label>
                                        <Form.Control value={values.image} type="text" placeholder="path to image" onChange={handleChange} name="image" />
                                    </Form.Group>

                                    <Form.Group controlId="price">
                                        <Form.Label>Product Price</Form.Label>
                                        <Form.Control value={values.price} type="number" placeholder="Price in rupees" onChange={handleChange} name="price" />
                                    </Form.Group>

                                    <Form.Group controlId="rating">
                                        <Form.Label>Product Rating </Form.Label>
                                        <Form.Control value={values.rating} type="number" placeholder="Upto 5" onChange={handleChange} name="rating" />
                                    </Form.Group>

                                    <Button variant="primary" type="submit">
                                        Submit
                                    </Button>
                                </Form>
                            );
                        }}
                    </Formik>
                </div>
                <div className="col-4">
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Product Name</th>
                                <th>Price</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {state && state.length > 0 && state.map((product) => {
                                return (
                                    <tr>
                                        <td>{product.name}</td>
                                        <td>{product.price}</td>
                                        <td>
                                            <Button onClick={()=>{
                                                deleteProduct(product._id)(dispatch);
                                            }}>
                                                x
                                            </Button>
                                        </td>

                                    </tr>
                                );
                            })}


                        </tbody>
                    </Table>
                </div>
            </div>
        </div>
    );
}