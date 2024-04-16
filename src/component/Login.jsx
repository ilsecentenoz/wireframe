import FLogin from './Form_login';
import Fregister from './Form_Register';

function Login() {
    return (
        <>
            <h2>Inicio sesión</h2>
            <div className='Row JC-SpaceA' >
                <FLogin />
                <Fregister />
            </div>
        </>
    )
}
  
export default Login