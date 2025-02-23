import React from "react";
import { useForm } from "react-hook-form";

const ContactForm = () => {
  const { register, handleSubmit, errors } = useForm();

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-[#fbfbfbff] text-[#3d3d3d] rounded-md py-6 px-4 flex flex-col gap-2 align-center"
    >
      <div>
        <input
          type="text"
          {...register("name", { required: true })}
          className="border-1 border-[#3d3d3d] rounded-md py-2 px-2"
        />
        {errors.name && <p>Name required</p>}
      </div>
      <input
        type="email"
        {...register("email")}
        className="border-1 border-[#3d3d3d] rounded-md py-2 px-2"
      />
      <textarea
        {...register("message")}
        className="border-1 border-[#3d3d3d] rounded-md py-2 px-2"
      />
      <button>Submit</button>
    </form>
  );
};

export default ContactForm;
