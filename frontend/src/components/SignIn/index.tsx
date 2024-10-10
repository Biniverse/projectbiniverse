import React, { useState } from "react";
import { signInService } from "../../service/SignIn/signInService";
import { Carousel, FloatingLabel } from "flowbite-react";
import { CommonConstant } from "../../shared/constants/commonConstants";
import { SubmitHandler, useForm } from "react-hook-form";
import { ISignIn } from "../../shared/interface";
import { ROUTES, TOAST_TYPE } from "../../shared/enum";
import ToastComponent from "../../shared/components/CustomToast";
import { LOGIN_CAROUSEL_IMAGES } from "../../shared/constants/biniImages";
import useGlobalStore from "../../store/useGlobalStore";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Signin = () => {
  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors },
  } = useForm<ISignIn>();

  const [toastVisible, setToastVisible] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string>("");
  const [toastType, setToastType] = useState<TOAST_TYPE>(TOAST_TYPE.ERROR);
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<ISignIn> = async (data: ISignIn) => {
    console.log(data);
    try {
      const { success } = await signInService(data);

      if (success) {
        reset();
        setToastMessage(success);
        setToastType(TOAST_TYPE.SUCCESS);
        setToastVisible(true);
        setTimeout(() => {
          navigate(ROUTES.DASHBOARD);
        }, 1500);
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const backendError = error.response;
        if (backendError) {
          if (!backendError.data.userExist) {
            // Sample if user exists or not
            setToastMessage(backendError.data.error);
            setToastType(TOAST_TYPE.ERROR);
            setError("email", {
              type: "manual",
              message: backendError.data.error,
            });
          } else {
            setToastMessage(backendError.data.error);
            setToastType(TOAST_TYPE.ERROR);
            setError("password", {
              type: "manual",
              message: backendError.data.error,
            });
          }
          setToastVisible(true);
        }
      }
    }
  };

  return (
    <>
      <div className="flex justify-center px-6 py-12 lg:px-8 size-1/2 bg-white overflow-hidden rounded-2xl my-32">
        <div className="sm:mx-100 sm:w-full sm:max-w-sm h-[600px]">
          <Carousel>
            {LOGIN_CAROUSEL_IMAGES.map((bini, index) => (
              <img
                key={index}
                className="w-full h-full object-cover"
                src={bini.imageUrl}
                alt={bini.altName}
              />
            ))}
          </Carousel>
        </div>
        <div className=" sm:mx-auto sm:w-full sm:max-w-sm pt-20">
          <h2 className="text-5xl text-blue-700 text-left font-syne font-bold whitespace-nowrap text-shadow">
            {CommonConstant.FORM.SIGN_IN.GOOD_EVENING}
          </h2>
          <h2 className="text-5xl text-blue-700 text-right my-10 text-shadow">
            10:10 PM
          </h2>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <FloatingLabel
                variant="filled"
                label="Email"
                {...register("email", { required: "Email is required" })}
                helperText={errors.email?.message}
                className={`rounded-xl ${errors.email ? "border-red-500 text-red-500" : "border-gray-300"}`}
              />
            </div>

            <div>
              <div className="flex items-center justify-between">
                <div className="text-sm"></div>
              </div>
              <div>
                <FloatingLabel
                  variant="filled"
                  type="password"
                  label="Password"
                  {...register("password", {
                    required: "Password is required",
                  })}
                  helperText={errors.password?.message}
                  className={`rounded-xl ${errors.password ? "border-red-500 text-red-500" : "border-gray-300"}`}
                />
              </div>
            </div>
            <p className="mt-10 text-sm text-gray-500">
              <a
                href="google.com"
                className="font-semibold leading-6 text-blue-900 hover:text-blue-400"
              >
                {CommonConstant.FORM.SIGN_IN.FORGOT_PASSOWRD}
              </a>
            </p>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-blue-900 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                {CommonConstant.FORM.SIGN_IN.LOGIN}
              </button>
            </div>
          </form>
        </div>
        <ToastComponent
          message={toastMessage}
          type={toastType}
          visible={toastVisible}
          onDismiss={() => setToastVisible(false)}
        />
      </div>
    </>
  );
};
