import styled from 'styled-components'

export const Foot = styled.footer`
background: rgba(29, 29, 29, 1);
color:white;
display:flex;
flex-direction: column;
padding: 2rem 10rem;
@media (max-width:700px){
    margin-top:0rem;
    width:100%;
    padding:3rem;
}
`

export const ContFoot = styled.div`
display:grid;
grid-template-columns:1fr 1fr 1fr 1fr;
@media (max-width:700px){
    grid-template-columns:1fr;
    grid-gap:1rem;
}
`

export const Lista = styled.div`
display:flex;
flex-direction: column;
margin:4rem;
@media (max-width:700px){
    margin-top:30px;
    margin:0rem;
}
`