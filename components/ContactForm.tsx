"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import useWeb3Forms from "@web3forms/react";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = useForm({
    mode: "onTouched",
  });

  const [isSuccess, setIsSuccess] = useState(false);

  const apiKey = process.env.WEB3FORMS_API_KEY;

  const { submit: onSubmit } = useWeb3Forms({
    access_key: apiKey!,
    settings: {
      from_name: "Hochzeits-Page",
      subject: "Neue Nachricht von der Hochzeitspage",
    },
    onSuccess: () => {
      setIsSuccess(true);
      reset();
    },
    onError: () => {
      setIsSuccess(false);
    },
  });

  return (
    <div className="w-full max-w-[600px]">
      {!isSubmitSuccessful && (
        <form
          className="flex w-full flex-col items-center gap-4"
          autoComplete="off"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="w-full text-xl">
            <p className="font-bold">Gebt uns Rückmeldung!</p>
            <p>Per Handy, eMail oder mit dem folgenden Formular.</p>
          </div>

          <div className="w-full">
            <input
              type="text"
              className={`w-full rounded-lg px-4 py-2 outline-none focus-visible:ring-2 focus-visible:ring-darkdusty ${errors.name && "border-2 border-red-600 focus:border-red-600"}`}
              placeholder="Name"
              {...register("name", {
                required: "Bitte gib deinen Namen ein.",
              })}
            />
            {errors.name && (
              <div className="mt-1 text-red-600">
                <small>{errors.name.message as string}</small>
              </div>
            )}
          </div>

          {/* <div className="w-full">
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
          </div> */}

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
      )}
      {isSubmitSuccessful && isSuccess && (
        <div className="mt-12 flex flex-col items-center justify-center rounded-md text-center text-white">
          <svg
            width="100"
            height="100"
            className="text-green-600"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M26.6666 50L46.6666 66.6667L73.3333 33.3333M50 96.6667C43.8716 96.6667 37.8033 95.4596 32.1414 93.1144C26.4796 90.7692 21.3351 87.3317 17.0017 82.9983C12.6683 78.6649 9.23082 73.5204 6.8856 67.8586C4.54038 62.1967 3.33331 56.1283 3.33331 50C3.33331 43.8716 4.54038 37.8033 6.8856 32.1414C9.23082 26.4796 12.6683 21.3351 17.0017 17.0017C21.3351 12.6683 26.4796 9.23084 32.1414 6.88562C37.8033 4.5404 43.8716 3.33333 50 3.33333C62.3767 3.33333 74.2466 8.24998 82.9983 17.0017C91.75 25.7534 96.6666 37.6232 96.6666 50C96.6666 62.3768 91.75 74.2466 82.9983 82.9983C74.2466 91.75 62.3767 96.6667 50 96.6667Z"
              stroke="currentColor"
              strokeWidth="3"
            />
          </svg>
          <h3 className="py-5 text-2xl text-green-600">
            Erfolgreich gesendet!
          </h3>
          <button
            className="mt-6 text-lg text-saturatedgray underline focus:outline-none"
            onClick={() => reset()}
          >
            Zurück
          </button>
        </div>
      )}

      {isSubmitSuccessful && !isSuccess && (
        <div className="mt-12 flex flex-col items-center justify-center rounded-md text-center text-white">
          <svg
            width="97"
            height="97"
            viewBox="0 0 97 97"
            className="text-strongblush"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M27.9995 69C43.6205 53.379 52.3786 44.621 67.9995 29M26.8077 29L67.9995 69M48.2189 95C42.0906 95 36.0222 93.7929 30.3604 91.4477C24.6985 89.1025 19.554 85.6651 15.2206 81.3316C10.8872 76.9982 7.44975 71.8538 5.10454 66.1919C2.75932 60.53 1.55225 54.4617 1.55225 48.3333C1.55225 42.205 2.75932 36.1366 5.10454 30.4748C7.44975 24.8129 10.8872 19.6684 15.2206 15.335C19.554 11.0016 24.6985 7.56418 30.3604 5.21896C36.0222 2.87374 42.0906 1.66667 48.2189 1.66667C60.5957 1.66667 72.4655 6.58333 81.2172 15.335C89.9689 24.0867 94.8856 35.9566 94.8856 48.3333C94.8856 60.7101 89.9689 72.58 81.2172 81.3316C72.4655 90.0833 60.5957 95 48.2189 95Z"
              stroke="CurrentColor"
              strokeWidth="3"
            />
          </svg>

          <h3 className="py-7 text-2xl text-strongblush">
            Ups, das hat nicht geklappt!
          </h3>
          <button
            className="mt-6 text-lg text-saturatedgray underline focus:outline-none"
            onClick={() => reset()}
          >
            Nochmal probieren
          </button>
        </div>
      )}
    </div>
  );
}
