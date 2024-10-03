import React, { useState } from "react";
import { signInService } from "../../service/SignIn/signInService";
import { Carousel, FloatingLabel } from "flowbite-react";
import { CommonConstant } from "../../shared/constants/commonConstants";
import { SubmitHandler, useForm } from "react-hook-form";
import { ISignIn } from "../../shared/interface";
import { TOAST_TYPE } from "../../shared/enum";
import ToastComponent from "../../shared/components/CustomToast";

export const Signin = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ISignIn>();
  const [toastVisible, setToastVisible] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string>("");
  const [toastType, setToastType] = useState<TOAST_TYPE>(TOAST_TYPE.ERROR);

  const onSubmit: SubmitHandler<ISignIn> = async (data: ISignIn) => {
    try {
      const { success } = await signInService(data);

      if (success) {
        reset();
        setToastMessage(success);
        setToastType(TOAST_TYPE.SUCCESS);
        setToastVisible(true);
      }
    } catch (error) {
      throw error;
    }
  };

  const bini = [
    {
      altName: "Aiah",
      imageUrl: "/images/loginAiah.jpg",
    },
    {
      altName: "Gwen",
      imageUrl: "/images/loginGwen.jpg",
    },
    {
      altName: "Jhoanna",
      imageUrl: "/images/loginJhoanna.jpg",
    },
  ];

  return (
    <>
      <div className="flex justify-center px-6 py-12 lg:px-8 size-1/2 bg-white rounded-2xl my-32">
        <div className="sm:mx-100 sm:w-full sm:max-w-sm h-[600px]">
          <Carousel>
            {bini.map((bini, index) => (
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
                label={
                  errors.email
                    ? CommonConstant.FORM.SIGN_IN_ERROR.EMAIL
                    : CommonConstant.FORM.SIGN_IN.EMAIL
                }
                {...register("email", { required: true })}
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
                  label={
                    errors.password
                      ? CommonConstant.FORM.SIGN_IN_ERROR.PASSWORD
                      : CommonConstant.FORM.SIGN_IN.PASSWORD
                  }
                  {...register("password", { required: true })}
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
