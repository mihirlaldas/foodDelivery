import React from "react";

function Card(props) {
    const {
        name,
        description,
        category,
        price,
        cod,
        rating,
        image
    } = props.data;
    return (
        <div className="col-12 col-md-4" key={name}>
            <div className="card m-2">
                <div className="card-header">
                    <img
                        src={image}
                        className="card-img-top img-fluid p-2"
                        style={{ height: "300px" }}
                    />
                </div>
                <div className="card-body text-left">
                    <h3 className="card-title text-danger">{name}</h3>
                    <p className="card-text text-success">Price: Rs.{price}</p>
                    <p className="card-text">{description}</p>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4">
                                <p className="text-muted">
                                    Category: {category}
                                </p>
                            </div>
                            <div className="col-lg-4">
                                {cod ? (
                                    <p>COD available</p>
                                ) : (
                                    <p className="text-muted">
                                        COD not available
                                    </p>
                                )}
                            </div>
                            <div className="col-lg-4">
                                <h5>
                                    <span className="badge badge-success">
                                        {rating}
                                    </span>
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card-footer ">
                    <button
                        className="btn d-flex flex-end"
                        onClick={() => props.add(props.restro, name, price)}
                    >
                        Add to cart
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Card;
