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
        <div className="col-md-4" key={name}>
            <div className="card container m-2">
                <div className="row p-2">
                    <div className="col-6">
                        <img src={image} className="img-fluid " />
                        <p className="text-muted m-0">{category}</p>
                    </div>
                    <div className="col-6 text-left">
                        <h3 className="text-danger">{name}</h3>

                        <p className="text-success  m-0">Price: Rs.{price}</p>

                        {cod ? (
                            <p>COD available</p>
                        ) : (
                            <p className="text-muted">COD not available</p>
                        )}
                        <h3>
                            <span className="badge badge-success">
                                {rating}
                            </span>
                        </h3>
                    </div>
                    {/* <div className="col-2" style={{ textAlign: "right" }}>
                        <h3>
                            <span className="badge badge-success">
                                {rating}
                            </span>
                        </h3>
                    </div> */}
                </div>

                <div className="card-footer ">
                    <p className="text-muted m-0 text-left">{description}</p>
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
