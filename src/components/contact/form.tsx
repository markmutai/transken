import axios from 'axios';
import React, { ChangeEvent, FormEvent, useState, useRef } from 'react';
// import ReCAPTCHA from 'react-google-recaptcha';
import HCaptcha from '@hcaptcha/react-hcaptcha';
import Fonts from "../../components/theme/fonts";
import Buttons from "../theme/buttons";

type FormState = {
    email: string;
    name: string;
    message: string;
}

type ServiceMessage = {
    class: string;
    text: string;
}




function Form() {
    const formId = 'qm0GYigL';
    const formSparkUrl = `https://submit-form.com/${formId}`;
    // const recaptchaKey = '6LcYFn8UAAAAAC5P_tfJMZgCMg2L9lxNEsdfHih8';
    // const recaptchaRef = useRef<any>();
    const [token, setToken] = useState("");
    const captcha = useRef();

    const initialFormState = {
        email: '',
        name: '',
        message: '',
    };

    const hCaptchaSiteKey = "00ff6165-56a4-4b14-9e8c-cd6f12a11705";

    const [formState, setFormState] = useState<FormState>(initialFormState);
    const [submitting, SetSubmitting] = useState<boolean>(false);
    const [message, setMessage] = useState<ServiceMessage>();
    // const [recaptchaToken, setRecaptchaToken] = useState<string>();

    const submitForm = async (event: FormEvent) => {
        event.preventDefault();
        SetSubmitting(true);
        await postSubmission();
        SetSubmitting(false);
    };
    const postSubmission = async () => {
        if (token) {
            const payload = {
                ...formState,
                // "g-recaptcha-response": recaptchaToken
            };

            try {
                const result = await axios.post(formSparkUrl, payload);
                console.log(result);
                setMessage({
                    class: 'bg-lime-500 mt-0.5',
                    text: 'Message Sent!',
                });
            } catch (error) {
                setMessage({
                    class: 'bg-red-700',
                    text: 'Message Failed. Please try again',
                });
            }
        } else {
            setMessage({
                class: 'bg-red-700 mt-0.5',
                text: 'Message Failed. Try again',
            });
        }
    };

    const updateFormControl = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = event.target;
        const formKey = id as keyof FormState;
        const updateFormState = { ...formState };
        updateFormState[formKey] = value;
        setFormState(updateFormState);
    };

    // const updateRecaptchaToken = (token: string | null) => {
    //     setRecaptchaToken(token as string);
    // };


    return (
        <>
            <h3 className="py-5 w-full titles text-gray-600 opacity-90 xsm:text-lg lg:text-lgplus 2xl:text-2xl xsm:py-4 2xl:py-5">
                Contact Us
            </h3>
            <hr className="w-full border-b border-gray-500 border-opacity-10" />
            <div className="xsm:w-full md:w-10/12 mx-auto">
                <form className='flex flex-col xsm:px-4 md:px-12 xl:px-10 mt-8' onSubmit={submitForm}>
                    <input
                        onChange={updateFormControl}
                        type="text"
                        className="parTxt xsm:text-xs md:text-sm border-2 border-gray-500 border-opacity-20 rounded-sm xsm:py-2 2xl:py-3 xsm:px-3 2xl:px-4 xsm:mb-3 2xl:mb-4"
                        id="name"
                        placeholder='Name'
                        value={formState.name}
                    />
                    <input
                        onChange={updateFormControl}
                        type="text"
                        className="parTxt xsm:text-xs md:text-sm border-2 border-gray-500 border-opacity-20 rounded-sm xsm:py-2 2xl:py-3 xsm:px-3 2xl:px-4 xsm:mb-3 2xl:mb-4"
                        id="email"
                        placeholder='Email'
                        value={formState.email}
                    />
                    <textarea
                        onChange={updateFormControl}
                        className="parTxt xsm:text-xs md:text-sm border-2 border-gray-500 border-opacity-20 rounded-sm xsm:py-2 2xl:py-3 xsm:px-3 2xl:px-4 xsm:mb-3 2xl:mb-4 resize-none xsm:h-40 2xl:h-48"
                        id="message"
                        placeholder='Message'
                        value={formState.message}
                    ></textarea>
                    {/* <ReCAPTCHA
                    className="mx-auto"
                    ref={recaptchaRef}
                    sitekey={recaptchaKey}
                    onChange={updateRecaptchaToken}
                /> */}
                    <div className="flex justify-center w-full">
                        <HCaptcha
                            ref={captcha}
                            sitekey={hCaptchaSiteKey}
                            onVerify={token => setToken(token)}
                            onExpire={e => setToken("")}
                            className="mx-auto"
                        />
                    </div>
                    <button disabled={submitting} className={`rounded-t-md mt-2 px-12 xsm:py-3 2xl:py-4 ${Buttons.buttonPrimary}`}>
                        {submitting ? <span className='sendingMessage'>Sending...</span> : 'Send'}
                    </button>
                    {message && (
                        <div className={`titles xsm:text-md xl:text-lg text-white xsm:w-full md:w-8/12 2xl:w-7/12 mx-auto p-4 rounded-b-md mb-5 ${message.class}`}>
                            {message.text}
                        </div>
                    )}
                </form>
            </div>
        </>
    )
}

export default Form;