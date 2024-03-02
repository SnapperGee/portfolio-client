import handleContactFormSubmit from "./handle-contact-form-submit";
import Input from "./input";
import Textarea from "./textarea";
import SubmitButton from "./submit-button";
import { InputPredicate, FormFieldName } from "./util";
import { useState, useEffect } from "react";
import { XCircleIcon, CheckCircleIcon } from "@heroicons/react/24/outline";

export default function ContactForm(
    {
        setMessageSentSuccess,
        setShowSentMessageNotificationModal
    }:
    {
        setMessageSentSuccess: (messageSentSuccess: boolean | null) => void,
        setShowSentMessageNotificationModal: (showSentMessageNotificationModal: boolean) => void
    })
{
    const [ nameValue, setNameValue ] = useState("");
    const [ emailValue, setEmailValue ] = useState("");
    const [ phoneNumberValue, setPhoneNumberValue ] = useState("");
    const [ messageValue, setMessageValue ] = useState("");

    const [ nameValidState, setNameValidState ] = useState<boolean | null>(null);
    const [ emailValidState, setEmailValidState ] = useState<boolean | null>(null);
    const [ phoneNumberValidState, setPhoneNumberValidState ] = useState<boolean | null>(null);
    const [ messageValidState, setMessageValidState ] = useState<boolean | null>(null);
    const [ submitBtnActiveState, setSubmitButtonActiveState ] = useState<boolean | null>(false);

    useEffect(() => {
        setSubmitButtonActiveState(( nameValidState && messageValidState && (emailValidState || phoneNumberValidState) ) ?? false)
    },
    [nameValidState, emailValidState, phoneNumberValidState, messageValidState]);

    return (
        <form
            className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48" autoComplete="off"
            onSubmit={async (event) => {
                event.preventDefault();

                setSubmitButtonActiveState(null);

                const wasSuccessful = await handleContactFormSubmit({
                    formElement: event.currentTarget,
                    setNameValidState,
                    setEmailValidState,
                    setPhoneNumberValidState,
                    setMessageValidState,
                    setMessageSentSuccess
                });

                if (wasSuccessful)
                {
                    setNameValue("");
                    setEmailValue("");
                    setPhoneNumberValue("");
                    setMessageValue("");
                }
                else
                {
                    setSubmitButtonActiveState(true);
                }


                setShowSentMessageNotificationModal(true);

                setTimeout(() => setShowSentMessageNotificationModal(false), 6000);
            }}
        >
            <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 [&>label+div]:sm:col-span-2">
                    <Input
                        validState = {nameValidState}
                        name = {FormFieldName.NAME}
                        value = {nameValue}
                        setValue = {setNameValue}
                        setValidState = {setNameValidState}
                        format = {(input) => input.trimStart().replace(/\s+/g, "\u0020")}
                        predicate = {InputPredicate.name}
                        invalidMessage = "A non-blank name is required."
                        required
                    />
                    <Input
                        validState = {emailValidState}
                        name = {FormFieldName.EMAIL}
                        value = {emailValue}
                        setValue = {setEmailValue}
                        setValidState = {setEmailValidState}
                        format = {(input) => input.trim().toLowerCase()}
                        predicate = {InputPredicate.email}
                        invalidMessage = "Invalid email."
                    />
                    <Input
                        validState = {phoneNumberValidState}
                        name = {FormFieldName.PHONE_NUMBER}
                        subLabel = " (numbers only)"
                        type = "tel"
                        value = {phoneNumberValue}
                        setValue = {setPhoneNumberValue}
                        setValidState = {setPhoneNumberValidState}
                        label = "Phone number"
                        format = {(input) => input.trim().replace(/\D/g, "")}
                        predicate = {InputPredicate.phoneNumber}
                        invalidMessage = "Invalid phone number. Only numbers are allowed and must be at least 7 digits."
                    />
                    <Textarea
                        name = {FormFieldName.MESSAGE}
                        value = {messageValue}
                        setValue = {setMessageValue}
                        validState = {messageValidState}
                        setValidState = {setMessageValidState}
                        invalidMessage = "A non-blank message is required."
                    />
                </div>
                <div className="mt-8 w-full flex justify-between items-center">
                    <ul className="text-sm">
                        <li className={`${nameValidState ? "text-green-500/80" : "text-red-500/80"}`}>
                            {nameValidState ? <CheckCircleIcon className="inline size-5"/> : <XCircleIcon className="inline size-5"/>} name required.
                        </li>
                        <li className={`${emailValidState || phoneNumberValidState ? "text-green-500/80" : "text-red-500/80"}`}>
                            {emailValidState || phoneNumberValidState ? <CheckCircleIcon className="inline size-5"/> : <XCircleIcon className="inline size-5"/>} email or phone number required.
                        </li>
                        <li className={`${messageValidState ? "text-green-500/80" : "text-red-500/80"}`}>
                            {messageValidState ? <CheckCircleIcon className="inline size-5"/> : <XCircleIcon className="inline size-5"/>} message required.
                        </li>
                    </ul>
                    <SubmitButton active={submitBtnActiveState}/>
                </div>
            </div>
        </form>
    );
}
