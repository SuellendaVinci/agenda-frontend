const ContactCard = ({name, city, state}) => {
    return(
        <div>
            <div>{name}</div>
            <div>{city}</div>
            <div>{state}</div>
        </div>
    )
}

export default ContactCard;