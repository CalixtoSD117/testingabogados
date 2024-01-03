import { useContext } from "react"
import { StepperContext } from "@/app/context/StepperContext"

export const StepTwo = () => {

  const {userData, setuserData } = useContext(StepperContext)

  // const handleChange = ({target}) =>{
  //   const {name, value} = target
  //   setuserData({...userData, [name]:value})
  //   console.log(userData)
  // };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setuserData(prevUserData => {
      const updatedUserData = { ...prevUserData, [name]: value };
      console.log(updatedUserData); // Log the updated state
      return updatedUserData;
    });
  };

  return (
    <div className="grid  md:grid-cols-3 md:gap-5">

    <div className="w-full mx-2 flex-1">
      <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
        {""}
        Postulatoria
      </div>
      <div className="bg-white my-2 flex border border-gray-200 rounded">
        <select
        name="postulatoria"
        value={userData["postulatoria"] || ""}
        onChange={handleChange}
        className="p-2 px-2 rounded outline-none w-full text-gray-800"
        >
          <option value="">Seleccionar fase...</option>
          <option value="Contestacion">Contestacion</option>
          <option value="Demanda">Demanda</option>
          <option value="Reconvencion">Reconvencion</option>

        </select>
      </div>

    </div>

    <div className="w-full mx-2 flex-1">
      <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
        {""}
        Probatoria
      </div>
      <div className="bg-white my-2 flex border border-gray-200 rounded">
        <select
        name="probatoria"
        value={userData["probatoria"] || ""}
        onChange={handleChange}
        className="p-2 px-2 rounded outline-none w-full text-gray-800"
        >
          <option value="">Seleccionar fase...</option>
          <option value="Pruebas autor">Pruebas autor</option>
          <option value="Pruebas demanda">Pruebas demanda</option>

        </select>
      </div>

    </div>

    <div className="w-full mx-2 flex-1">
      <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
        {""}
        Resolutoria
      </div>
      <div className="bg-white my-2  flex border border-gray-200 rounded">
        <select
        name="resolutoria"
        value={userData["resolutoria"] || ""}
        onChange={handleChange}
        className="p-2 px-2 rounded outline-none w-full text-gray-800"
        >
          <option value="">Seleccionar fase...</option>
          <option value="Condena">Condena</option>
          <option value="Absuelve">Absuelve</option>

        </select>
      </div>

    </div>

    {/* second row */}

    <div className="w-full mx-2 flex-1">
      <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
        {""}
        Recurso
      </div>
      <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
        <input
        type="text"
        onChange={handleChange}
        value={userData["recurso"] || "" }
        name="recurso"
        placeholder="Recurso"
        className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
        />
      </div>

    </div>

    <div className="w-full mx-2 flex-1">
      <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
        {""}
        Amparo
      </div>
      <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
        <input
        type="text"
        onChange={handleChange}
        value={userData["amparo"] || "" }
        name="amparo"
        placeholder="Amparo"
        className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
        />
      </div>

    </div>

    <div className="w-full mx-2 flex-1">
      <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
        {""}
        Aud. Constitucional
      </div>
      <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
        <input
        type="text"
        onChange={handleChange}
        value={userData["audconsyitucional"] || "" }
        name="audconsyitucional"
        placeholder="Aud. Constitucional"
        className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
        />
      </div>

    </div>

    {/* Ultima linea */}

    <div className="w-full mx-2 flex-1">
      <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
        {""}
        Revision
      </div>
      <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
        <input
        type="text"
        onChange={handleChange}
        value={userData["revision"] || "" }
        name="revision"
        placeholder="Revision"
        className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
        />
      </div>

    </div>

  </div>
  )
}
