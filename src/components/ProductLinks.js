import React from 'react';

function ProductLinks({
  img,
  price,
  title,
  description,
  subTitle,
  address,
  status,
}) {
  return (
    <article className="tour-card">
      <div className="tour-img-container">
        <img src={img} className="tour-img" alt="" />
        <p className="tour-date">{price}</p>
      </div>
      <div className="tour-info">
        <div className="tour-title">
          <h4>{title}</h4>
        </div>
        <p>{description}</p>
        <div className="tour-footer">
          <p>
            <span>
              <i className="fas fa-map"></i>
            </span>
            {subTitle}
          </p>
          <p>{address}</p>
          <p>{status}</p>
        </div>
      </div>
    </article>
  );
}

export default ProductLinks;
