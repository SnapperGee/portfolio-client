import { FormFieldName } from "./util";

export default async function handleContactFormSubmit({
    formElement,
    setNameValidState,
    setEmailValidState,
    setPhoneNumberValidState,
    setMessageValidState,
    setMessageSentSuccess
}: {
    formElement: HTMLFormElement;
    setNameValidState: (nameValidState: boolean | boolean) => void;
    setEmailValidState: (emailValidState: boolean | boolean) => void;
    setPhoneNumberValidState: (phoneNumberValidState: boolean | boolean) => void;
    setMessageValidState: (nameMessageState: boolean | boolean) => void;
    setMessageSentSuccess: (messageSentSuccess: boolean | null) => void;
}): Promise<boolean> {
    const formData = new FormData(formElement);

    const formattedName = formData
        .get(FormFieldName.NAME)
        ?.toString()
        .trim()
        .replace(/\s+/g, "\u0020");

    if (formattedName === undefined || formattedName.length === 0) {
        setNameValidState(false);
    }

    const formattedEmail = formData.get(FormFieldName.EMAIL)?.toString().trim().toLowerCase();
    const formattedPhoneNumber = formData
        .get(FormFieldName.PHONE_NUMBER)
        ?.toString()
        .replace(/\D/g, "");

    if (formattedEmail === undefined || formattedEmail.length === 0) {
        if (formattedPhoneNumber === undefined || formattedPhoneNumber.length === 0) {
            setEmailValidState(false);
        }
    }

    if (formattedPhoneNumber === undefined || formattedPhoneNumber.length === 0) {
        if (formattedEmail === undefined || formattedEmail.length === 0) {
            setPhoneNumberValidState(false);
        }
    }

    const formattedMessage = formData.get(FormFieldName.MESSAGE)?.toString().trim();

    if (formattedMessage === undefined || formattedMessage.length === 0) {
        setMessageValidState(false);
    }

    let success = false;

    if (formattedName && formattedMessage && (formattedEmail || formattedPhoneNumber)) {
        const res = await fetch("/api/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                name: formattedName,
                email: formattedEmail,
                phoneNumber: formattedPhoneNumber,
                message: formattedMessage
            })
        });

        if (res.ok && res.status === 200) {
            setMessageSentSuccess(true);
            success = true;
        } else {
            setMessageSentSuccess(null);
        }
    } else {
        setMessageSentSuccess(false);
    }

    return success;
}
