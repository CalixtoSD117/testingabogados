
import { backlog, galgo_logo, galiso, logcontact, logsm } from '../assets'
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-hot-toast';

const Contact = () =>
{
  const [name, setName] = useState('');
  const [asunto, setAsunto] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [message, setMessage] = useState('');

  const namechange = ({ target }) =>
  {
    setName(target.value)
  }
  const asuntochange = ({ target }) =>
  {
    setAsunto(target.value)
  }
  const emailchange = ({ target }) =>
  {
    setEmail(target.value)
  }
  const numberchange = ({ target }) =>
  {
    setNumber(target.value)
  }
  const messagechange = ({ target }) =>
  {
    setMessage(target.value)
  }

  const form = useRef();

  const validateFields = () =>
  {
    if (!name.trim() || !asunto.trim() || !email.trim() || !number.trim() || !message.trim()) {
      // Show an alert when any of the required fields is empty

      toast.custom((t) => (
        <div
          className={`${t.visible ? 'animate-enter' : 'animate-leave'
            } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
        >
          <div className="flex-1 w-0 p-4">
            <div className="flex items-start">
              <div className="flex-shrink-0 pt-0.5">
                <img
                  className="h-10 w-10 object-contain rounded-full"
                  src={galiso}
                  alt=""
                />
              </div>
              <div className="ml-3 flex-1">
                <p className="text-sm font-medium text-gray-900">
                  Galgo Forwarding
                </p>
                <p className="mt-1 text-sm text-gray-500">
                  Por favor, llena todos los campos.
                </p>
              </div>
            </div>
          </div>
          <div className="flex border-l border-gray-200">
            <button
              onClick={() => toast.dismiss(t.id)}
              className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Cerrar
            </button>
          </div>
        </div>
      ))

      return false;
    }
    return true;
  };


  const sendEmail = (e) =>{
    e.preventDefault();

    if (!validateFields()) {
      return;
    }

    emailjs.sendForm('service_7nd0xqu', 'template_dy48j7u', form.current, 'C5HEQWyjdsaR4FtIu')
      .then((result) =>
      {
        console.log(result.text);

        toast.custom((t) => (
          <div
            className={`${t.visible ? 'animate-enter' : 'animate-leave'
              } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
          >
            <div className="flex-1 w-0 p-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 pt-0.5">
                  <img
                    className="h-10 w-10 object-contain rounded-full"
                    src={galiso}
                    alt=""
                  />
                </div>
                <div className="ml-3 flex-1">
                  <p className="text-sm font-medium text-gray-900">
                    Galgo Forwarding
                  </p>
                  <p className="mt-1 text-sm text-gray-500">
                    Gracias por contactarnos, te responderemos lo mas pronto posible.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex border-l border-gray-200">
              <button
                onClick={() => toast.dismiss(t.id)}
                className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                Cerrar
              </button>
            </div>
          </div>
        ))

        setName('');
        setAsunto('');
        setEmail('');
        setNumber('');
        setMessage('');


      }, (error) =>
      {
        console.log(error.text);
      });
  };


  return (
    <div className='bg1'>
      <div className='bg-black bg-opacity-50 p-2 pb-8 lg:pl-20 lg:pr-20 pr-2 pl-2'>
        <div className='mx-auto max-w-screen-2xl'>
          <h1 className='text-4xl md:text-5xl font-semibold pb-2 text-white'>Contactanos</h1>


          <div className='bg-white rounded-xl flex md:flex-row lg:flex-row flex-col justify-between lg:h-[400px] '>
            <div className='w-full p-4'>
              <div>
                <h2 className='text-2xl font-semibold text-red-700'>
                  Cotiza con nosotros
                </h2>
                <hr className='border-gray-200' />
              </div>

              <form ref={form} onSubmit={sendEmail}>

                <div className='flex md:flex-row lg:flex-row flex-col justify-between gap-2 md:gap-10 items-center pt-4 md:pt-0 lg:pt-4'>
                  <div className='flex flex-col w-full'>
                    <label className='text-lg font-medium text-gray-600'>Nombre:</label>
                    <input className='outline-none border-b-[1px]' placeholder='Ingrese su nombre completo' type="text" name="user_name" value={name} onChange={namechange} />
                  </div>
                  <div className='flex flex-col w-full'>
                    <label htmlFor="" className='text-lg font-medium text-gray-600'>Asunto:</label>
                    <input className='outline-none border-b-[1px]' placeholder='Cotizar...' type="text" name="user_asunto" value={asunto} onChange={asuntochange} />
                  </div>
                </div>

                <div className='flex md:flex-row lg:flex-row flex-col justify-between gap-2 md:gap-10 items-center pt-4 md:pt-0 lg:pt-4 '>
                  <div className='flex flex-col w-full'>
                    <label htmlFor="" className='text-lg font-medium text-gray-600'>Email:</label>
                    <input className='outline-none border-b-[1px]' placeholder='example@gmail.com' type="email" name="user_email" value={email} onChange={emailchange} />
                  </div>
                  <div className='flex flex-col w-full'>
                    <label htmlFor="" className='text-lg font-medium text-gray-600'>Numero:</label>
                    <input className='outline-none border-b-[1px]' placeholder='(+52) 314 338 7923' type="text" name="user_number" value={number} onChange={numberchange} />
                  </div>
                </div>

                <div className='flex flex-col w-full pt-4 lg:pt-4 md:pt-0'>
                  <label htmlFor="" className='text-lg font-medium text-gray-600 '>Mensaje:</label>
                  <textarea className='w-full outline-none border-b-[1px] pt-2 bottom-5' placeholder='Escribe tu mensaje' name="message" id="" cols="1" rows="3" value={message} onChange={messagechange} ></textarea>
                </div>

                <button type="submit" value="Send" className='mt-8 bg-slate-700 hover:bg-slate-800 transition-all duration-300 px-8 py-2 rounded-md text-white'>
                  Enviar
                </button>

              </form>
            </div>

            <div className='w-1/2 relative md:flex lg:flex items-center justify-center hidden'>
              <img className='absolute pb-28 pr-10 ' src={logcontact} alt="" />
              <img className='object-cover w-full max-h-full m-0 p-0 rounded-r-lg' src={backlog} alt="" />
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact