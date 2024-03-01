import Input from "./input";
import MessageTextarea from "./message-textarea";
import SubmitButton from "./submit-button";
import { InputPredicate, FormFieldName } from "./util";
import { useState, useEffect } from "react";

export default function ContactForm()
{
    const [ nameValidState, setNameValidState ] = useState<boolean | null>(null);
    const [ emailValidState, setEmailValidState ] = useState<boolean | null>(null);
    const [ phoneNumberValidState, setPhoneNumberValidState ] = useState<boolean | null>(null);
    const [ messageValidState, setMessageValidState ] = useState<boolean | null>(null);
    const [ submitBtnActiveState, setSubmitBtnActiveState ] = useState<boolean | null>(false);

    useEffect(() => {
        setSubmitBtnActiveState(( nameValidState && messageValidState && (emailValidState || phoneNumberValidState) ) ?? false)
    },
    [nameValidState, emailValidState, phoneNumberValidState, messageValidState]);

    return (
        <form className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48" autoComplete="off">
            <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 [&>label+div]:sm:col-span-2">
                    <Input
                        validState = {nameValidState}
                        name = {FormFieldName.NAME}
                        setValidState = {setNameValidState}
                        format = {(input) => input.trimStart().replace(/\s+/g, "\u0020")}
                        predicate = {InputPredicate.name}
                        invalidMessage = "A non-blank name is required."
                        required
                    />
                    <Input
                        validState = {emailValidState}
                        name = {FormFieldName.EMAIL}
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
                        setValidState = {setPhoneNumberValidState}
                        label = "Phone number"
                        format = {(input) => input.trim().replace(/\D/g, "")}
                        predicate = {InputPredicate.phoneNumber}
                        invalidMessage = "Invalid phone number. Only numbers are allowed and must be at least 7 digits."
                    />
                    <MessageTextarea
                        name = {FormFieldName.MESSAGE}
                        validState = {messageValidState}
                        setValidState = {setMessageValidState}
                        invalidMessage = "A non-blank message is required."
                    />
                </div>
                <p className="text-gray-400 text-xs mt-2">
                    - fields marked with asterisk (*) required.<br/>
                    - an email or phone number is required.
                </p>
                <SubmitButton active={submitBtnActiveState}/>
            </div>
        </form>
    );
}
