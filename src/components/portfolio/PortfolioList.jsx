import React from "react";


const PortfolioList = (props) => {
    return (
        <>
            <article className='portfolio__item'>
                <div className="portfolio__item-image">
                    <img src={props.imagePath} alt='Portfolio Image' />
                </div>
                <h3>{props.title}</h3>
                <div className="portfolio__item-cta">
                    <a href={props.url} className='btn btn-primary' target='_blank'>{props.urlName}</a>
                </div>
            </article>
        </>
    )
}

export default PortfolioList