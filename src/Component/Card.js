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
    console.log(cod);
    return (
        <div className="col-md-4" key={name}>
            <div className="card container m-2">
                <div className="row p-2">
                    <div className="col-6">
                        <img src={image} className="img-fluid " />
                        <p className="text-muted m-0">{category}</p>
                        <p className="m-0">
                            Min ₹50 <strong>*</strong> Up to 30 min
                        </p>
                    </div>
                    <div className="col-4 text-left">
                        <h3 className="text-danger">{name}</h3>

                        <p className="text-muted  m-0">Price: Rs.{price}</p>

                        {cod ? <p>COD available</p> : <p>COD not available</p>}
                    </div>
                    <div className="col-2" style={{ textAlign: "right" }}>
                        <h3>
                            <span className="badge badge-success">
                                {rating}
                            </span>
                        </h3>
                    </div>
                </div>

                <div className="card-footer ">
                    <p className="text-muted m-0 text-left">{description}</p>
                    <button className="btn d-flex flex-end">order now</button>
                </div>
            </div>
        </div>
    );
}

export default Card;
