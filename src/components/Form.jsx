// Form.jsx
import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import Generator from "./Generator.jsx";
import formData from "/src/data/formData.json";
import { GrMail } from "react-icons/gr";

const Form = () => {
  const methods = useForm();

  const onSubmit = methods.handleSubmit((data) => {
    console.log(data);
  });

  return (
    <>
      <FormProvider {...methods}>
        <div>
          <h1 className=" text-xl font-semibold leading-7 text-gray-900 text-center py-5">
            Formulario
          </h1>

          <form className="container py-5" onSubmit={onSubmit}>
            <div className="grid gap-5 md:grid-cols-2">
              {formData.map((element) => (
                <Generator key={element.id} element={element} />
              ))}
            </div>
            <div className="mt-5">
              <button
                type="submit"
                className="p-5 rounded-md bg-blue-600 font-semibold text-white flex items-center gap-1 hover:bg-blue-800"
              >
                <GrMail />
                Submit Form
              </button>
            </div>
          </form>
        </div>
      </FormProvider>
    </>
  );
};

export default Form;
