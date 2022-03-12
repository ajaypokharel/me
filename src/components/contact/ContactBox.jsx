import React from "react";


const ContactBox = (props) => {
    return (
        <>
                <h4>{props.title}</h4>
                <h5>{props.info}</h5>
                <a href={props.link} target='_blank'>{props.text}</a>
        </>
    )
}

export default ContactBox;