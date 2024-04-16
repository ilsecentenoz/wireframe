import {Link} from 'react-router-dom';

const links = [
    {
        name: "Logo",
        href: "/Home"
    },
    {
        name: "Términos y condiciones",
        href: "/Terms"
    },
    {
        name: "Preguntas Frecuentes",
        href: "/Faqs"
    },
    {
        name: "Premios",
        href: "/Premios"
    },
    {
        name: "Iniciar sesión",
        href: "/Login"
    }
]

function Nav() {
    return (
      <div className='Menu'>
            <a href="">LOGO</a>   
            <div className='Menu__links'>
                {links.map(x => (
                    <Link to={x.href}>{x.name}</Link>
                ))}
            </div>     
      </div>
    )
  }
  
  export default Nav