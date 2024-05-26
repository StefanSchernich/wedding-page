"use client";

import React from "react";
import { useForm } from "react-hook-form";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    control,
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = useForm({
    mode: "onTouched",
  });

  return (
    <form
      className="flex w-full max-w-[600px] flex-col items-center gap-4"
      autoComplete="off"
    >
      <p className="mb-4 text-xl">
        Ihr könnt per Mail, Handy oder das folgende Kontaktformular Rückmeldung
        geben.
      </p>

      <div className="w-full">
        <input
          type="text"
          className={`w-full rounded-lg px-4 py-2 outline-none focus-visible:ring-2 focus-visible:ring-darkdusty ${errors.name && "border-2 border-red-600 focus:border-red-600"}`}
          placeholder="Name"
          {...register("name", { required: "Bitte gib deinen Namen ein." })}
        />
        {errors.name && (
          <div className="mt-1 text-red-600">
            <small>{errors.name.message as string}</small>
          </div>
        )}
      </div>

      <div className="w-full">
        <input
          type="email"
          className="w-full rounded-lg px-4 py-2 outline-none focus-visible:ring-2 focus-visible:ring-darkdusty"
          placeholder="email@domain.com"
          {...register("email", {
            required: "Gib bitte deine eMail Adresse an.",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "Bitte gib eine korrekte eMail Adresse an.",
            },
          })}
        />
        {errors.email && (
          <div className="mt-1 text-red-600">
            <small>{errors.email.message as string}</small>
          </div>
        )}
      </div>

      <div className="w-full">
        <textarea
          className="min-h-40 w-full rounded-lg px-4 py-2 outline-none focus-visible:ring-2 focus-visible:ring-darkdusty"
          placeholder="Nachricht"
          {...register("message", {
            required: "Gib bitte eine Nachricht ein! Kommst du / ihr?",
          })}
        />

        {errors.message && (
          <div className="mt-1 text-red-600">
            <small>{errors.message.message as string}</small>
          </div>
        )}
      </div>

      <button
        type="submit"
        className="w-full max-w-[388px] rounded-lg bg-saturatedgray py-3 text-white"
      >
        {isSubmitting ? (
          <svg
            className="mx-auto h-5 w-5 animate-spin text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        ) : (
          "Senden"
        )}
      </button>
    </form>
  );
}
