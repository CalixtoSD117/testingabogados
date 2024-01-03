import axios from "axios";


export const StepperControl = ({handleClick,currentStep,steps,userData}) => {

  const handleSubmit = async () => {
    try {
      const formData = new FormData();
  
      // Append files to formData if they exist
      if (userData.pdfFiles) {
        Array.from(userData.pdfFiles).forEach(file => {
          formData.append('files', file);
        });
      }
  
      // Append other form data
      Object.entries(userData).forEach(([key, value]) => {
        if (key !== 'pdfFiles') {
          formData.append(key, value);
        }
      });
  
      const response = await axios.post('http://localhost:3000/api/cases', formData);
  
      console.log('Data saved:', response.data);
      // Handle successful response
    } catch (error) {
      console.error('Error submitting form:', error);
      // Handle error
    }
  };

  return (
    <div className='container flex justify-around mt-4 mb-8 '>
        {/* back button */}
        <button
        onClick={() => handleClick()} 
        className={`bg-white text-slate-400 uppercase py-2 px-4 rounded-xl font-semibold  border-2 border-slate-300 hover:bg-slate-700 hover:text-white transition duration-200 ease-in-out text-[14px] ${currentStep === 1 ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer' } `}>
            Atras
        </button>
        {/* next button */}
        <button 
        onClick={() => currentStep === steps.length - 1 ? handleSubmit(userData) : handleClick("next")}

        className='bg-green-500 text-white uppercase py-2 px-4 rounded-xl font-semibold cursor-pointer  hover:bg-slate-700 hover:text-white transition duration-200 ease-in-out text-[14px]'>
            {currentStep === steps.length - 1 ? 'Guardar' : 'siguiente' }
        </button>
    </div>
  )
}
