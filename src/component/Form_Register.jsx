function F_Register() {
   
    return (
      <div className="Container__Form">
        <h2>¡Regístrate Aquí!</h2>
        <form>
            <div className="Row">
                <input type="text" value="Nombre*" />
                <input type="text" value="Apellido*" />
            </div>

            <input type="text" value="Nombre de Usuario*" />
            <input type="email" value="Correo Electrónico*" name="Correo Electrónico" id="" />
            <input type="tel" value="Teléfono*" name="" id="" />
            <input type="email" value="Contraseña*" name="Correo Electrónico" id="" />
            <input type="email" value="Repetir Contraseña*" name="Repetir Contraseña" id="" />
            <input type="submit" value="Entrar" />
        </form>
      </div>
    )
  }
  
export default F_Register