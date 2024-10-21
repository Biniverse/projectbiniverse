import axios from "axios";
import { Button, Datepicker, FloatingLabel } from "flowbite-react";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { registerUser } from "../../service/Add-Employee/signUpService";
import { CardContainer } from "../../shared/components/CardContainer";
import ToastComponent from "../../shared/components/CustomToast";
import { CommonConstant } from "../../shared/constants/commonConstants";
import { TOAST_TYPE } from "../../shared/enum";
import { ISignUp } from "../../shared/interface";
import useGlobalStore from "../../store/useGlobalStore";

export const AddEmployeeComponent = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ISignUp>();
  const { loading, setIsLoading } = useGlobalStore();
  const [toastVisible, setToastVisible] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string>("");
  const [toastType, setToastType] = useState<TOAST_TYPE>(TOAST_TYPE.ERROR);
  const onSubmit: SubmitHandler<ISignUp> = async (data: ISignUp) => {
    setIsLoading(true);
    try {
      const { success } = await registerUser(data);

      if (success) {
        reset();
        setToastMessage(success);
        setToastType(TOAST_TYPE.SUCCESS);
        setToastVisible(true);
        setIsLoading(false);
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const backendError = error.response;
        if (backendError) {
          const errorMessages = backendError.data.error;
          if (Array.isArray(errorMessages)) {
            const messageList = errorMessages
              .map((error) => error.message)
              .join(", ");
            setToastMessage(messageList);
            setToastType(TOAST_TYPE.ERROR);
          } else {
            setToastMessage(errorMessages);
            setToastType(TOAST_TYPE.ERROR);
          }
          setToastVisible(true);
          setTimeout(() => {
            setToastVisible(false);
          }, 5000);
        } else {
          console.error("Error without response:", error.message);
        }
      } else {
        console.error("Unexpected error:", error);
      }
      setIsLoading(false);
    }
  };

  return (
    <div className="p-5 self-start w-full">
      <CardContainer>
        <div className="self-end">
          <Button color="blue">
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m15 19-7-7 7-7"
              />
            </svg>
          </Button>
        </div>
      </CardContainer>
      <CardContainer>
        {" "}
        <h2 className="text-4xl font-bold mb-4 text-start">Enroll Employee</h2>
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-row space-x-2">
              <div className="w-1/2 ">
                <FloatingLabel
                  variant="filled"
                  label={
                    errors.firstName
                      ? CommonConstant.FORM.SIGN_UP_ERROR.FIRST_NAME
                      : CommonConstant.FORM.SIGN_UP.FIRST_NAME
                  }
                  {...register("firstName", { required: true })}
                  className={`rounded-b-md bg-white ${
                    errors.firstName
                      ? "border-red-500 text-red-500"
                      : "border-gray-300"
                  }`}
                />
                {errors.firstName && (
                  <p className="text-red-500 text-sm">
                    {errors.firstName.message}
                  </p>
                )}
              </div>

              <div className="w-1/2">
                <FloatingLabel
                  variant="filled"
                  label={
                    errors.lastName
                      ? CommonConstant.FORM.SIGN_UP_ERROR.LAST_NAME
                      : CommonConstant.FORM.SIGN_UP.LAST_NAME
                  }
                  {...register("lastName", { required: true })}
                  className={`rounded-b-md bg-white ${
                    errors.lastName
                      ? "border-red-500 text-red-500"
                      : "border-gray-300"
                  }`}
                />
                {errors.lastName && (
                  <p className="text-red-500 text-sm">
                    {errors.lastName.message}
                  </p>
                )}
              </div>
            </div>
            <div className="flex flex-row space-x-2">
              <div className="w-1/2">
                <Datepicker /> //TODO: MODIFY
              </div>
              <div className="w-1/2">
                <FloatingLabel
                  variant="filled"
                  label={
                    errors.contact?.type === "required"
                      ? CommonConstant.FORM.SIGN_UP_ERROR.CONTACT_NO
                      : errors.contact?.type === "minLength" ||
                          errors.contact?.type === "maxLength"
                        ? CommonConstant.FORM.SIGN_UP_ERROR.CONTACT_NO_LENGTH
                        : CommonConstant.FORM.SIGN_UP.CONTACT_NO
                  }
                  type="number"
                  {...register("contact", {
                    required: true,
                    minLength: {
                      value: 11,
                      message:
                        CommonConstant.FORM.SIGN_UP_ERROR.CONTACT_NO_LENGTH,
                    },
                    maxLength: {
                      value: 11,
                      message:
                        CommonConstant.FORM.SIGN_UP_ERROR.CONTACT_NO_LENGTH,
                    },
                  })}
                  className={`rounded-b-md bg-white ${
                    errors.contact
                      ? "border-red-500 text-red-500"
                      : "border-gray-300"
                  } `}
                />
              </div>
            </div>

            <FloatingLabel
              variant="filled"
              label={
                errors.email?.type === "required"
                  ? CommonConstant.FORM.SIGN_UP_ERROR.EMAIL
                  : errors.email?.type === "pattern"
                    ? CommonConstant.FORM.SIGN_UP_ERROR.INVALID_EMAIL
                    : CommonConstant.FORM.SIGN_UP.EMAIL
              }
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: CommonConstant.REGEX_PATTERNS.EMAIL_PATTERN,
                  message: CommonConstant.FORM.SIGN_UP_ERROR.INVALID_EMAIL,
                },
              })}
              className={`rounded-b-md bg-white ${
                errors.email ? "border-red-500 text-red-500" : "border-gray-300"
              }`}
            />
            <div className="md:col-span-2 flex justify-start mt-4">
              <Button type="submit" color="blue" disabled={loading}>
                {loading ? (
                  <span className="flex items-center">
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
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
                        d="M4 12c0 4.418 3.582 8 8 8s8-3.582 8-8-3.582-8-8-8-8 3.582-8 8zm12 0c0-2.209-1.791-4-4-4s-4 1.791-4 4 1.791 4 4 4 4-1.791 4-4z"
                      ></path>
                    </svg>
                    Loading
                  </span>
                ) : (
                  "Submit"
                )}
              </Button>
            </div>
          </form>
        </div>
        <ToastComponent
          message={toastMessage}
          type={toastType}
          visible={toastVisible}
          onDismiss={() => setToastVisible(false)}
        />
      </CardContainer>
    </div>
  );
};
