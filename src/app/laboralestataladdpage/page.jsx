'use client'
import { useState } from "react"
import FormLayout from "../layouts/FormLayout"
import { SidebarPhone } from "../components/navbars/SidebarPhone"
import { StepperControl } from "../components/wizard/StepperControl"
import { Stepper } from "../components/wizard/Stepper"
import { StepOne } from "../components/wizard/steps/StepOne"
import { StepTwo } from "../components/wizard/steps/StepTwo"
import { StepThree } from "../components/wizard/steps/StepThree"
import { Complete } from "../components/wizard/steps/Complete"
import { StepperContext } from "../context/StepperContext"
import { Sidebar } from "../components/navbars/Sidebar"
import { Navbar } from "../components/navbars/Navbar"

const Page = () =>
{


  const [openmenu, setopenmenu] = useState(false)

  const handleopenmenu = () =>
  {
    setopenmenu(!openmenu)
  }

  const [currentStep, setcurrentStep] = useState(1)

  const [userData, setuserData] = useState('')
  const [finalData, setfinalData] = useState([])


  const steps = [
    "Paso uno",
    "Paso dos",
    "Paso tres",
    "Completado"
  ];

  const displaySteps = (step) =>
  {
    switch (step) {
      case 1:
        return <StepOne />
      case 2:
        return <StepTwo />
      case 3:
        return <StepThree />
      case 4:
        return <Complete link="laboralestatal" />
      default:
    }
  }

  const handleClick = (direction) =>
  {
    let newStep = currentStep;

    direction === "next" ? newStep++ : newStep--;

    newStep > 0 && newStep <= steps.length && setcurrentStep(newStep);
  }


  return (
    <>
      <SidebarPhone openmenu={openmenu} />
      <Navbar handleopenmenu={handleopenmenu} />
      <Sidebar />
      <div className="lg:ml-[220px] pt-[80px]  min-h-screen  md:p-16 bg-slate-100">

        <FormLayout title="Laboral Estatal">

          <div className="md:w-full mx-auto shadow-xl rounded-2xl pb-2 bg-white animate__animated animate__fadeInLeft">
            <div className="container horizontal mt-5">
              <Stepper
                steps={steps}
                currentStep={currentStep}
              />

              {/* Componentes renderizados */}
              <div className="my-10 p-10">
                <StepperContext.Provider value={{
                  userData,
                  setuserData,
                  finalData,
                  setfinalData,
                }}>

                  {displaySteps(currentStep)}

                </StepperContext.Provider>
              </div>

            </div>

            {currentStep !== steps.length &&
              <StepperControl

                handleClick={handleClick}
                currentStep={currentStep}
                steps={steps}

              />
            }
          </div>

        </FormLayout>
      </div>
    </>
  )
}

export default Page