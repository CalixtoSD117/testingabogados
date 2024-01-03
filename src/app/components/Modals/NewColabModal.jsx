'use client'
import axios from "axios"
import { useState } from "react"
import toast from "react-hot-toast"
import { RiCloseCircleFill, RiSave2Line, RiSpam2Line } from "react-icons/ri"
import { Tooltip as ReactTooltip } from 'react-tooltip'

export const NewColabModal = ({ open, handleopen, handleColabAdded, setopen }) => {

  const handleClose = () => {
    setopen(false);
    onReset();
  }

  const onReset = () => {
    setusers({
      nombre: "",
      telefono: "",
      correo: "",
      contrasena: "",
      rol: "",
      cargo: "",
      despacho: 1,
    })
  }

  const [users, setusers] = useState({
    nombre: "",
    telefono: "",
    correo: "",
    contrasena: "",
    rol: "",
    cargo: "",
    despacho: 1,
  })

  const handleInputChange = ({ target }) => {
    const { name, value } = target;
    setusers(prevUserData => {
      const updatedUserData = { ...prevUserData, [name]: value };
      console.log(updatedUserData);
      return updatedUserData;
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!users.nombre || !users.telefono || !users.cargo || !users.correo || !users.contrasena || !users.rol) {
      toast.error("porfavor llena todos los campos", { duration: 2000 });
      return;
    }
    else if (users.nombre.length < 3) {
      toast.error("El nombre debe tener al menos 3 caracteres", { duration: 2000 });
      return;
    }

    // restricciones de contraseña

    else if (users.contrasena.length < 8) {
      toast.error("La contraseña debe tener al menos 8 caracteres", { duration: 2000 });
      return;
    }
    const regexNumero = /\d/;
    const regexLetra = /[a-zA-Z]/;
    const regexMayuscula = /[A-Z]/;

    if (!regexNumero.test(users.contrasena)) {
      toast.error("La contraseña debe contener al menos un número", { duration: 2000 });
      return;
    }

    if (!regexLetra.test(users.contrasena)) {
      toast.error("La contraseña debe contener al menos una letra", { duration: 2000 });
      return;
    }

    if (!regexMayuscula.test(users.contrasena)) {
      toast.error("La contraseña debe contener al menos una letra mayúscula", { duration: 2000 });
      return;
    }

    console.log(users);

    try {
      const res = await axios.post('http://localhost:3000/api/colaboradores', users);
      console.log(res.data);
      handleClose();
      handleColabAdded();
      // Retrasa la llamada en 1 segundo (ajusta el tiempo según tus necesidades)
    } catch (error) {
      if (error.response) {
        console.error('Error en la respuesta del servidor:', error.response.data);
      } else {
        toast.error('No se pudo agregar el cliente ')
        console.error('Error de red o solicitud:', error.message);
      }
    }

  }

  const [toltipcontra, settoltipcontra] = useState(false)
  const handletoltip = () => {
    settoltipcontra(!toltipcontra)
  }


  return (
    <>
      {open ?

        <div className="h-screen w-full absolute bg-black top-0 z-50 bg-opacity-30">

          <div className="flex items-center justify-center h-[100vh] animate__animated animate__zoomIn">
            <div className="md:w-[600px] w-[350px] bg-white rounded-xl">

              <div className="border-b pl-4">
                <h1 className="text-[27px] font-semibold text-start py-2">Agregar colaborador</h1>
              </div>

              <form onSubmit={handleSubmit} className="pl-4 pr-4 pt-5 white  md:w-[600px] h-[450px] rounded-b-xl flex flex-col justify-between ">


                <div className="grid grid-cols-2 gap-5">

                  <div>
                    <label>Rol</label>
                    <select
                      name="rol"
                      value={users.rol || ""}
                      onChange={handleInputChange}
                      className="w-full border rounded-md p-2 outline-none"
                    >
                      <option value="">Seleccione una opción</option>
                      <option value="administrador">Administrador</option>
                      <option value="colaborador">Colaborador</option>
                    </select>
                  </div>

                  <div>
                    <label>Cargo</label>
                    <select
                      name="cargo"
                      value={users.cargo || ""}
                      onChange={handleInputChange}
                      className="w-full border rounded-md p-2"
                    >
                      <option value="">Seleccione una opción</option>
                      <option value="administrador">Administrador</option>
                      <option value="colaborador">Colaborador</option>
                    </select>
                  </div>


                  <div>
                    <label>Nombre completo</label>
                    <input
                      onChange={handleInputChange}
                      value={users.nombre}
                      type="text"
                      name="nombre"
                      id=""
                      placeholder="Juan..."
                      className="outline-none border p-2 rounded-md w-full" />
                  </div>

                  <div>
                    <label>Email</label>
                    <input
                      onChange={handleInputChange}
                      value={users.correo}
                      type="email"
                      name="correo"
                      id=""
                      placeholder="example@examplle.com"
                      className="outline-none border p-2 rounded-md w-full" />
                  </div>

                  <div>
                    <label>Teléfono</label>
                    <input
                      onChange={handleInputChange}
                      value={users.telefono}
                      type="tel"
                      name="telefono"
                      id=""
                      placeholder="+52 145..."
                      className="outline-none border p-2 rounded-md w-full" />
                  </div>

                  <div className="">
                    <div className="flex justify-between items-center">
                      <label>Contraseña</label>
                      <div data-tooltip-id="my-tooltip-3" ><RiSpam2Line /></div>
                    </div>
                    <input
                      onChange={handleInputChange}
                      type="password"
                      name="contrasena"
                      id=""
                      placeholder="Contraseña"
                      className="outline-none border p-2 rounded-md w-full" />
                  </div>

                  <ReactTooltip
                    id="my-tooltip-3"
                    place="top"
                    style={{ backgroundColor: "#02004A", color: "#fff", padding: "5px", height: "100px", width: "200px", }}
                    content=" La contraseña debe tener al menos 8 caracteres, un número, una letra y una letra mayúscula"
                  />

                </div>

                <div className=" mb-3 flex flex-row justify-between items-center ">
                  <button onClick={handleopen} className="px-4 py-2 bg-gray-500 rounded-lg text-white flex items-center gap-2 " ><span> <RiCloseCircleFill /> </span> Cancelar </button>
                  <button className="px-4 py-2 bg-[#297C1C] rounded-lg text-white flex items-center gap-2 " ><span> <RiSave2Line /> </span> Guardar </button>
                </div>

              </form>

            </div>
          </div>

        </div>

        : null}


    </>
  )
}
