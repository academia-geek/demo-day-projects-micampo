import styled from 'styled-components'
export const Colores = {
    green:'#699A07' ,
    orange:'#FF9D00',
    blackish:'#1d1d1d' ,
    gray:'rgba(0, 0, 0, 0.7)' ,
    grayish:'#E5E5E5' ,
    clear:' rgba(248, 248, 248, 1)' ,
    white:'#FFFFFF'
}

export const Boton = styled.button`
padding: 0rem 0.3rem 0rem 1rem;
color: white;
border:none; 
background:linear-gradient(90deg, #FF9D00 85.19%, #FFAF30 81.19%, #FFB745 100%, #FFB743 100%, #C18421 100%, rgba(255, 157, 0, 0.39) 100%, #FCB036 100%);
font-family: var(--ubuntu);
box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
border-radius:40px;
font-weight:700;
`

export const Iconos = styled.div`
display:flex;
flex-direction:row;`

export const Fondo = styled.div`
background: rgba(0, 0, 0, 0.73) url(https://res.cloudinary.com/dcsn54xoj/image/upload/v1657990544/MiCampo/28170bbfb63600885e97bf5ecf9def3b_jr9vcf.png);
background-size: cover;
height:100vh;
margin-top:-1rem; 
background-blend-mode: darken;
display: flex;
flex-direction: row ;
color:white;
justify-content: space-between;
padding:3rem 5rem;
`   
export const Agro = styled.h1`
color:white;
width:95%;
box-shadow: 0px 4px 4px 0px #00000040;
background: rgba(217, 217, 217,0.1);
text-align:center;
display:block;
margin-left:auto;
margin-right:auto;
border-radius: 9px;`

export const Tarjeta = styled.div`
background: rgba(29, 29, 29, 1);
border:1pt;
overflow:hidden;
height:95%;
width:100%;
display:flex;
flex-direction:row;
color:white; 
box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
border-radius: 20px;
margin-top:0.5rem;`

export const Imagro = styled.img`
background: #D9D9D9;
padding: 1rem 0.5rem;
width:40%;
`
export const Texto = styled.div`
background: rgba(217, 217, 217,0.1);
padding: 0.3rem;
display:flex;
flex-direction:column;
justify-content: center;
`

export const H4 =styled.h4`
color:white;
font-size: 1rem;
`

export const Divi = styled.div`
display: grid;
grid-template-columns:1fr 1fr;
justify-items:center;
width:100%;
grid-gap:0.3rem;
align-items:center;`

export const Grande = styled.h1`
color:white; 
font-weight:700;
font-size:3rem;
width: 100%;
height:100%;`