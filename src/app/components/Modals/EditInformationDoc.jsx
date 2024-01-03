import { useState } from 'react'
import { RiCloseCircleFill, RiSave2Line, RiUploadCloudLine, RiFilePdfLine } from 'react-icons/ri'

export const EditInformationDoc = ({ handlecloseedit }) =>
{

    const [pdfData, setPdfData] = useState({ names: [] });

    const Changepdf = (e) =>
    {
        const files = e.target.files;
        if (files && files.length > 0) {
            const fileNames = Array.from(files).map((file) => file.name);
            setPdfData({ names: fileNames });
        }
    };

    return (

        <div className="fixed top-0 left-0 right-0 w-full h-full flex items-center justify-center z-50 bg-black bg-opacity-30">
            <div className="md:w-[800px] w-[350px] bg-white rounded-xl animate__animated animate__zoomIn">
                <div className="border-b pl-4">
                    <h1 className="text-[27px] font-semibold text-start py-2">Editar</h1>
                </div>

                <form className="pl-4 pr-4 pt-5 white md:w-[800px] h-[450px] rounded-b-xl flex flex-col justify-between  overflow-y-auto">
                    <div className="md:grid md:grid-cols-2 justify-center items-center gap-5 w-full">



                        <div className="w-full ">
                            <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
                                Juzgado
                            </div>
                            <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
                                <input
                                    type="text"
                                    placeholder="Juzgado"
                                    className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                                />
                            </div>

                        </div>

                        <div className="w-full ">
                            <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
                                Expediente
                            </div>
                            <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
                                <input
                                    type="text"
                                    placeholder="Expediente"
                                    className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                                />
                            </div>

                        </div>

                        <div className="w-full ">
                            <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
                                Cliente
                            </div>
                            <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
                                <input
                                    type="text"
                                    placeholder="Cliente"
                                    className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                                />
                            </div>

                        </div>

                        <div className="w-full ">
                            <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
                                Contrario
                            </div>
                            <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
                                <input
                                    type="text"
                                    placeholder="Contrario"
                                    className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                                />
                            </div>

                        </div>

                        <div className="w-full ">
                            <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
                                Asunto
                            </div>
                            <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
                                <input
                                    type="text"
                                    placeholder="Asunto"
                                    className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                                />
                            </div>

                        </div>

                        <div className="w-full ">
                            <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
                                Secretario
                            </div>
                            <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
                                <input
                                    type="text"
                                    placeholder="Secretario"
                                    className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                                />
                            </div>

                        </div>

                        <div className="w-full ">
                            <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
                                Postulatoria
                            </div>
                            <div className="bg-white my-2 flex border border-gray-200 rounded">
                                <select
                                    name="postulatoria"
                                    className="p-2 px-2 rounded outline-none w-full text-gray-800"
                                >
                                    <option value="">Seleccionar fase...</option>
                                    <option >Contestacion</option>
                                    <option >Demanda</option>
                                    <option >Reconvencion</option>

                                </select>
                            </div>

                        </div>

                        <div className="w-full ">
                            <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
                                Probatoria
                            </div>
                            <div className="bg-white my-2 flex border border-gray-200 rounded">
                                <select
                                    name="postulatoria"
                                    className="p-2 px-2 rounded outline-none w-full text-gray-800"
                                >
                                    <option value="">Seleccionar fase...</option>
                                    <option >Pruebas autor</option>
                                    <option >Pruebas demanda</option>

                                </select>
                            </div>

                        </div>

                        <div className="w-full ">
                            <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
                                Resolutoria
                            </div>
                            <div className="bg-white my-2 flex border border-gray-200 rounded">
                                <select
                                    name="Resolutoria"
                                    className="p-2 px-2 rounded outline-none w-full text-gray-800"
                                >
                                    <option value="">Seleccionar fase...</option>
                                    <option >Condena</option>
                                    <option >Absuelve</option>

                                </select>
                            </div>

                        </div>

                        <div className="w-full ">
                            <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
                                Recurso
                            </div>
                            <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
                                <input
                                    type="text"
                                    placeholder="Recurso"
                                    className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                                />
                            </div>

                        </div>

                        <div className="w-full ">
                            <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
                                Amparo
                            </div>
                            <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
                                <input
                                    type="text"
                                    placeholder="Amparo"
                                    className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                                />
                            </div>

                        </div>

                        <div className="w-full ">
                            <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
                                Aud.Constitucional
                            </div>
                            <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
                                <input
                                    type="text"
                                    placeholder="Aud.Constitucional"
                                    className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                                />
                            </div>

                        </div>

                        <div className="w-full ">
                            <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
                                Revisión
                            </div>
                            <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
                                <input
                                    type="text"
                                    placeholder="Revisión"
                                    className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                                />
                            </div>

                        </div>

                    </div>
                    {/* aqui empieza el apartado de actualizaciones */}
                    <div>
                    <div className="w-full ">
                            <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
                                Actualizaciones
                            </div>
                            <textarea className='w-full border rounded-md outline-none p-2' id="" cols="30" rows="5"></textarea>

                        </div>
                    </div>
                    {/* aqui epieza el drag and drop  */}
                    <div>
                        <div className="border-dashed border w-full h-auto border-slate-300 relative justify-center flex items-center rounded-md p-4">
                            <input
                                type="file"
                                accept="application/pdf"
                                onChange={Changepdf}
                                id="file-upload"
                                className="outline-none w-full text-gray-800 opacity-0 bg-slate-500 h-full absolute cursor-pointer"
                                multiple // Esto permite seleccionar múltiples archivos
                            />
                            <div>
                                <div className="flex items-center justify-center text-7xl">
                                    <RiUploadCloudLine className="text-gray-400" />
                                </div>
                                <div className="text-center">
                                    Arrastra o suelta aquí tus archivos PDF
                                    <br />
                                    o{' '}
                                    <label htmlFor="file-upload" className="text-blue-600 cursor-pointer">
                                        buscar archivos
                                    </label>{' '}
                                    en tu computadora
                                </div>
                                <div>
                                    {pdfData.names.length > 0 && (
                                        <div>
                                            <h2 className="text-lg font-semibold mt-2">Archivos PDF seleccionados:</h2>
                                            <ul>
                                                {pdfData.names.map((name, index) => (
                                                    <li key={index} className="flex items-center">
                                                        <RiFilePdfLine className="text-red-500 text-2xl mr-2" />
                                                        <span>{name}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mb-3 mt-5 flex flex-row justify-between items-center">
                        <button onClick={handlecloseedit} className="px-4 py-2 bg-gray-500 rounded-lg text-white flex items-center gap-2 ">
                            <span> <RiCloseCircleFill /> </span> Cancelar
                        </button>
                        <button className="px-4 py-2 bg-[#297C1C] rounded-lg text-white flex items-center gap-2 ">
                            <span> <RiSave2Line /> </span> Guardar
                        </button>
                    </div>
                </form>
            </div>
        </div>

    )
}
