import { StepperContext } from '@/app/context/StepperContext';
import React, { useContext, useState } from 'react';
import { RiUploadCloudLine, RiFilePdfLine } from 'react-icons/ri';


export const StepThree = () => {
  const {userData, setuserData } = useContext(StepperContext)
  const [pdfData, setPdfData] = useState({ names: [] });

  const Changepdf = ({ target }) => {
    const files = target.files;
    if (files && files.length > 0) {
      // Assuming you want to store just the file names in your form data
      setPdfData({ names: Array.from(files).map(file => file.name) });

      // Update the context with the actual file objects
      setuserData({ ...userData, pdfFiles: files });
    }
    console.log(files);
  };

  return (
    <div className="border-dashed border h-auto border-slate-300 relative justify-center flex items-center rounded-md p-4">
      <input
        type="file"
        accept="application/pdf"
        onChange={Changepdf}
        id="file-upload"
        className="outline-none w-full text-gray-800 opacity-0 bg-slate-500 h-full absolute"
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
  );
};
