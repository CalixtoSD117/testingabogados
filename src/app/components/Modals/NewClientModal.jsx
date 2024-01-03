import { useState } from "react";
import { RiCloseCircleFill, RiSave2Line } from "react-icons/ri";
import axios from "axios";
import toast, { Toaster } from 'react-hot-toast';

export const NewClientModal = ({ open,handleClientAdded, setopen}) => {
  const [client, setFormData] = useState({
    nombre: "",
    razon_social: "",
    rfc: "",
    correo: "",
    telefono: "",
    celular: "",
    direccion: "",
    alias: "",
    despacho: 1,
  });

  const handleClose = () => {
    setopen(false);
    onReset();
  }

  // Función para manejar los cambios en los campos del formulario
  const handleInputChange = ({ target }) => {
    const { name, value } = target;
    setFormData({
      ...client,
      [name]: value,
    });
  };

  const onReset = () => {
    setFormData({
      nombre: "",
      razon_social: "",
      rfc: "",
      correo: "",
      telefono: "",
      celular: "",
      direccion: "",
      alias: "",
      despacho: 1,
    })
  }


  const onhandleSubmit = async (e) => {
    e.preventDefault();
    
    if(!client.nombre 
      || !client.razon_social 
      || !client.rfc 
      || !client.correo 
      || !client.telefono 
      || !client.celular 
      || !client.direccion 
      || !client.alias 
      ){
      toast.error("porfavor llena todos los campos",{duration: 2000});
        return; // Sale de la función si las validaciones no pasan
    }
    else if(client.nombre.length < 3){
      toast.error("El nombre debe tener al menos 3 caracteres",{duration: 2000});
      return;
    }
    else if(client.razon_social.length < 3 ){
      toast.error("La razon social debe tener 13 caracteres",{duration: 2000});
      return;
    }
    else if(client.rfc.length < 13 || client.rfc.length > 13 ){
      toast.error("El RFC debe tener 13 caracteres",{duration: 2000});
      return;
    }
    else if(client.correo.length < 5 ){
      toast.error("El correo es demasiado corto",{duration: 2000});
      return;
    }
    else if(client.telefono.length < 10 || client.telefono.length > 10 ){
      toast.error("El telefono debe tener 10 caracteres",{duration: 2000});
      return;
    }
    else if(client.celular.length < 10 || client.celular.length > 10 ){
      toast.error("El celular debe tener 10 caracteres",{duration: 2000});
      return;
    }
    else if(client.direccion.length < 5 ){
      toast.error("La direccion es demasiado corta",{duration: 2000});
      return;
    }
    else if(client.alias.length < 5 ){
      toast.error("El alias es demasiado corto",{duration: 2000});
      return;
    }

    try {
      const res = await axios.post('http://localhost:3000/api/clients', client);
      console.log(res.data);
        handleClose();
        handleClientAdded();
       // Retrasa la llamada en 1 segundo (ajusta el tiempo según tus necesidades)
    } catch (error) {
      if (error.response) {
        console.error('Error en la respuesta del servidor:', error.response.data);
      } else {
        toast.error('No se pudo agregar el cliente ')
        console.error('Error de red o solicitud:', error.message);
      }
    }
    
  };
  return (
    <>
      {open ?
        <div className="h-screen w-full fixed bg-black top-0 z-50 bg-opacity-30">
          <div className="flex items-center justify-center h-[100vh] animate__animated animate__zoomIn">
            <div className="md:w-[600px] w-[350px] bg-white rounded-xl">
              <div className="border-b pl-4">
                <h1 className="text-[27px] font-semibold text-start py-2">Agregar Cliente</h1>
              </div>
              <form onSubmit={onhandleSubmit} className="pl-4 pr-4 pt-5 white  md:w-[600px] h-[450px] rounded-b-xl flex flex-col justify-between ">
                <div className="grid grid-cols-2 gap-5">
                <div>
                    <label>Nombre Completo</label>
                    <input
                      type="text"
                      name="nombre"
                      value={client.nombre}
                      onChange={handleInputChange} // Asocia la función de manejo de cambios
                      placeholder="Ana..."
                      className="outline-none border p-2 rounded-md w-full"
                    />
                  </div>

                  <div>
                    <label>Razon Social</label>
                    <input
                      type="text"
                      name="razon_social"
                      value={client.razon_social}
                      onChange={handleInputChange} // Asocia la función de manejo de cambios
                      placeholder="Razon Social"
                      className="outline-none border p-2 rounded-md w-full"
                    />
                  </div>

                  <div>
                    <label>RFC</label>
                    <input
                      type="text"
                      name="rfc"
                      value={client.rfc.toUpperCase()}
                      onChange={handleInputChange} // Asocia la función de manejo de cambios
                      placeholder="ASH12301Q"
                      className="outline-none border p-2 rounded-md w-full"
                    />
                  </div>

                  <div>
                    <label>Correo</label>
                    <input
                      type="email"
                      name="correo"
                      value={client.correo}
                      onChange={handleInputChange} // Asocia la función de manejo de cambios
                      placeholder="Dev@example.com"
                      className="outline-none border p-2 rounded-md w-full"
                    />
                  </div>

                  <div>
                    <label>Telefono</label>
                    <input
                      type="text"
                      name="telefono"
                      value={client.telefono}
                      onChange={handleInputChange} // Asocia la función de manejo de cambios
                      placeholder="Telefono"
                      className="outline-none border p-2 rounded-md w-full"
                    />
                  </div>

                  <div>
                    <label>Celular</label>
                    <input
                      type="text"
                      name="celular"
                      value={client.celular}
                      onChange={handleInputChange} // Asocia la función de manejo de cambios
                      placeholder="Celular"
                      className="outline-none border p-2 rounded-md w-full"
                    />
                  </div>

                  <div>
                    <label>Direccion</label>
                    <input
                      type="text"
                      name="direccion"
                      value={client.direccion}
                      onChange={handleInputChange} // Asocia la función de manejo de cambios
                      placeholder="Direccion"
                      className="outline-none border p-2 rounded-md w-full"
                    />
                  </div>

                  <div>
                    <label>Alias</label>
                    <input
                      type="text"
                      name="alias"
                      value={client.alias}
                      onChange={handleInputChange} // Asocia la función de manejo de cambios
                      placeholder="Alias"
                      className="outline-none border p-2 rounded-md w-full"
                    />
                  </div>
                </div>
                <div className=" mb-3 flex flex-row justify-between items-center ">
                  <button onClick={handleClose} className="px-4 py-2 bg-gray-500 rounded-lg text-white flex items-center gap-2 " ><span> <RiCloseCircleFill /> </span> Cancelar </button>
                  <button type="submit" className="px-4 py-2 bg-[#297C1C] rounded-lg text-white flex items-center gap-2 " ><span> <RiSave2Line /> </span> Guardar </button>
                </div>
              </form>
            </div>
          </div>
          <Toaster 
            position="top-right"
            reverseOrder={true}
          />
        </div>
        : null}
    </>
  );
}
