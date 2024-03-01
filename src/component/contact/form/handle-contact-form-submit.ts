export default function handleContactFormSubmit(
    setSendingMessage: (arg: boolean) => void,
    setSentMsgNotificationIcon: (arg: boolean) => void,
    setSentMsgNotificationHeader: (arg: string) => void,
    setSentMsgNotificationBody: (arg: string) => void,
    showMsgSentNotification: (arg: boolean) => void )
{
    return async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
        event.preventDefault();

        const form = new FormData(event.currentTarget);

        const formattedName = form.get("name")?.toString().trim().replace(/\s+/g, "\u0020");
        const nameInput = event.currentTarget.querySelector<HTMLInputElement>("#name");
        const nameErrMsg = event.currentTarget.querySelector<HTMLDivElement>("#nameErrorMessage");

        if (formattedName === undefined || formattedName.length === 0)
        {
            nameInput?.classList.replace("ring-1", "ring-2");
            nameInput?.classList.add("ring-red-600/80");
            nameErrMsg?.classList.remove("hidden");
        }
        else
        {
            nameInput?.classList.replace("ring-2", "ring-1");
            nameInput?.classList.remove("ring-red-600/80");
            nameErrMsg?.classList.add("hidden");
        }

        const emailInputValue = form.get("email")?.toString();
        const phoneNumberInputValue = form.get("phoneNumber")?.toString();
        const emailInput = event.currentTarget.querySelector<HTMLInputElement>("#email");
        const phoneNumberInput = event.currentTarget.querySelector<HTMLInputElement>("#phoneNumber");
        const emailErrMsg = event.currentTarget.querySelector<HTMLDivElement>("#emailErrorMessage");
        const phoneNumberErrMsg = event.currentTarget.querySelector<HTMLDivElement>("#phoneNumberErrorMessage");
        const emailErrMsgParagraph = emailErrMsg?.querySelector("p");
        const phoneNumberErrMsgParagraph = phoneNumberErrMsg?.querySelector("p");

        const formattedEmail = emailInputValue?.toLowerCase().trim();
        const formattedPhoneNumber = phoneNumberInputValue?.replace(/\D/g, "");

        if (emailInputValue?.length === 0 && phoneNumberInputValue?.length === 0)
        {
            emailInput?.classList.replace("ring-1", "ring-2");
            emailInput?.classList.add("ring-red-600/80");
            phoneNumberInput?.classList.replace("ring-1", "ring-2");
            phoneNumberInput?.classList.add("ring-red-600/80");
            emailErrMsgParagraph!.textContent = ErrorMessageText.MISSING_EMAIL;
            phoneNumberErrMsgParagraph!.textContent = ErrorMessageText.MISSING_PHONE_NUMBER;
            emailErrMsg?.classList.remove("hidden");
            phoneNumberErrMsg?.classList.remove("hidden");
        }
        else
        {
            if (formattedEmail?.length !== 0)
            {
                if (formattedEmail === undefined || ! isEmail(formattedEmail))
                {
                    emailInput?.classList.replace("ring-1", "ring-2");
                    emailInput?.classList.add("ring-red-600/80");
                    emailErrMsgParagraph!.textContent = ErrorMessageText.EMAIL_FORMAT;
                    emailErrMsg?.classList.remove("hidden");
                }
                else
                {
                    emailInput?.classList.replace("ring-2", "ring-1");
                    emailInput?.classList.remove("ring-red-600/80");
                    emailErrMsg?.classList.add("hidden");
                    emailErrMsgParagraph!.textContent = "";
                }
            }
            else
            {
                emailInput?.classList.replace("ring-2", "ring-1");
                emailInput?.classList.remove("ring-red-600/80");
                emailErrMsg?.classList.add("hidden");
                emailErrMsgParagraph!.textContent = "";
            }

            if (formattedPhoneNumber?.length !== 0)
            {
                if (formattedPhoneNumber === undefined || /^.*\D.*$/g.test(formattedPhoneNumber))
                {
                    phoneNumberInput?.classList.replace("ring-1", "ring-2");
                    phoneNumberInput?.classList.add("ring-red-600/80");
                    phoneNumberErrMsgParagraph!.textContent = ErrorMessageText.PHONE_NUMBER_FORMAT;
                    phoneNumberErrMsg?.classList.remove("hidden");
                }
                else
                {
                    phoneNumberInput?.classList.replace("ring-2", "ring-1");
                    phoneNumberInput?.classList.remove("ring-red-600/80");
                    phoneNumberErrMsg?.classList.add("hidden");
                    phoneNumberErrMsgParagraph!.textContent = "";
                }
            }
            else
            {
                phoneNumberInput?.classList.replace("ring-2", "ring-1");
                phoneNumberInput?.classList.remove("ring-red-600/80");
                phoneNumberErrMsg?.classList.add("hidden");
                phoneNumberErrMsgParagraph!.textContent = "";
            }
        }

        const formattedMessage = form.get("message")?.toString().trim();
        const messageInput = event.currentTarget.querySelector<HTMLTextAreaElement>("#message");
        const msgErrMsg = event.currentTarget.querySelector<HTMLDivElement>("#messageErrorMessage");

        if (formattedMessage === undefined || formattedMessage.length === 0)
        {
            messageInput?.classList.replace("ring-1", "ring-2");
            messageInput?.classList.add("ring-red-600/80");
            msgErrMsg?.classList.remove("hidden");
        }
        else
        {
            messageInput?.classList.replace("ring-2", "ring-1");
            messageInput?.classList.remove("ring-red-600/80");
            msgErrMsg?.classList.add("hidden");
        }

        if (formattedName && formattedMessage && (formattedEmail || formattedPhoneNumber))
        {
            setSendingMessage(true);

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

            if (res.ok && res.status === 200)
            {
                setSentMsgNotificationIcon(true);
                setSentMsgNotificationHeader("Message sent");
                setSentMsgNotificationBody("Your message has been successfully sent.");
            }
            else
            {
                setSentMsgNotificationIcon(false);
                setSentMsgNotificationHeader("Unable to send message");
                setSentMsgNotificationBody("Your message could not be sent. Please try again later.");
            }

            setSendingMessage(false);
        }
        else
        {
            setSentMsgNotificationIcon(false);
            setSentMsgNotificationHeader("Message is missing required fields");
            setSentMsgNotificationBody("Please ensure that all required message form fields are filled out correctly and try again.");
        }

        showMsgSentNotification(true);

        setTimeout(
            () => showMsgSentNotification(false),
            6000);
    };
}
