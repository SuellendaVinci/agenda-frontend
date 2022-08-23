import { Container, NameStyled } from './styled';


const ContactCard = ({name, city, state}) => {
    return(
        <Container>
            <NameStyled>{name}</NameStyled>
            <NameStyled>{city}</NameStyled>
            <NameStyled>{state}</NameStyled>
        </Container>
    )
}

export default ContactCard;