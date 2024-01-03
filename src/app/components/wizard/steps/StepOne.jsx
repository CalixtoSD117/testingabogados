import { useContext } from "react"
import { StepperContext } from "@/app/context/StepperContext"

export const StepOne = () => {

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
          Juzgado
        </div>
        <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
          <input
          type="text"
          onChange={handleChange}
          value={userData["juzgado"] || "" }
          name="juzgado"
          placeholder="Juzgado"
          className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
          />
        </div>

      </div>

      <div className="w-full mx-2 flex-1">
        <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
          {""}
          Expediente
        </div>
        <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
          <input
          type="text"
          onChange={handleChange}
          value={userData["expediente"] || "" }
          name="expediente"
          placeholder="Expediente"
          className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
          />
        </div>

      </div>

      <div className="w-full mx-2 flex-1">
        <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
          {""}
          Cliente
        </div>
        <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
          <input
          type="text"
          onChange={handleChange}
          value={userData["cliente"] || "" }
          name="cliente"
          placeholder="Cliente"
          className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
          />
        </div>

      </div>

      {/* second row */}

      <div className="w-full mx-2 flex-1">
        <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
          {""}
          Contrario
        </div>
        <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
          <input
          type="text"
          onChange={handleChange}
          value={userData["contrario"] || "" }
          name="contrario"
          placeholder="Contrario"
          className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
          />
        </div>

      </div>

      <div className="w-full mx-2 flex-1">
        <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
          {""}
          Asunto
        </div>
        <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
          <input
          type="text"
          onChange={handleChange}
          value={userData["asunto"] || "" }
          name="asunto"
          placeholder="Asunto"
          className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
          />
        </div>

      </div>

      <div className="w-full mx-2 flex-1">
        <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
          {""}
          Secretario
        </div>
        <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
          <input
          type="text"
          onChange={handleChange}
          value={userData["secretario"] || "" }
          name="secretario"
          placeholder="Secretario"
          className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
          />
        </div>

      </div>

    </div>
  )
}
