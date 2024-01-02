import { EnvelopeIcon, ExclamationTriangleIcon, CheckCircleIcon } from "@heroicons/react/24/outline";
import { XMarkIcon } from "@heroicons/react/20/solid";
import { Fragment, useState } from "react";
import { Transition } from "@headlessui/react";
import isEmail from "validator/lib/isEmail";

const enum ErrorMessageText
{
    MISSING_EMAIL = "A non-blank email address is required if no phone number is provided.",
    EMAIL_FORMAT = 'Email in the format of "address@domain.com" expected.',
    MISSING_PHONE_NUMBER = "A non-blank phone number is required if no email address is provided.",
    PHONE_NUMBER_FORMAT = "Only digit characters expected."
}

const handleContactFormSubmit = (event: React.FormEvent<HTMLFormElement>) =>
{
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
        const formattedEmailInputValue = emailInputValue?.toLowerCase().trim();
        const formattedPhoneNumberInputValue = phoneNumberInputValue?.replace(/\D/g, "");

        if (formattedEmailInputValue?.length !== 0)
        {
            if (formattedEmailInputValue === undefined || ! isEmail(formattedEmailInputValue))
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

        if (formattedPhoneNumberInputValue?.length !== 0)
        {
            if (formattedPhoneNumberInputValue === undefined || /^.*\D.*$/g.test(formattedPhoneNumberInputValue))
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

    console.log(form);
};

const Contact = () =>
{
    // State for contact form inputs
    const [ name, setName ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ phoneNumber, setPhoneNumber ] = useState("");
    const [ message, setMessage ] = useState("");

    // Visibility state for contact form submission notification panel
    const [show, setShow] = useState(true)

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) =>
        setName(event.currentTarget.value);

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) =>
        setEmail(event.currentTarget.value.toLowerCase());

    const handlePhoneNumberChange = (event: React.ChangeEvent<HTMLInputElement>) =>
        setPhoneNumber(event.currentTarget.value.replace(/\D/g, ""));

    const handleMessageChange = (event: React.ChangeEvent<HTMLTextAreaElement>) =>
        setMessage(event.currentTarget.value);

    return (
        <>
            <div className="relative isolate">
                <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
                    <div className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48">
                        <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
                            <div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden ring-1 ring-white/5 lg:w-1/2">
                                <svg
                                    className="absolute inset-0 h-full w-full stroke-gray-600 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
                                    aria-hidden="true"
                                >
                                    <defs>
                                        <pattern
                                            id="54f88622-e7f8-4f1d-aaf9-c2f5e46dd1f2"
                                            width={200}
                                            height={200}
                                            x="100%"
                                            y={-1}
                                            patternUnits="userSpaceOnUse"
                                        >
                                            <path d="M130 200V.5M.5 .5H200" fill="none" />
                                        </pattern>
                                    </defs>
                                    <svg x="100%" y={-1} className="overflow-visible fill-gray-800/20">
                                        <path d="M-470.5 0h201v201h-201Z" strokeWidth={0} />
                                    </svg>
                                    <rect width="100%" height="100%" strokeWidth={0} fill="url(#54f88622-e7f8-4f1d-aaf9-c2f5e46dd1f2)" />
                                </svg>
                            <div
                                className="absolute -left-56 top-[calc(100%-13rem)] transform-gpu blur-3xl lg:left-[max(-14rem,calc(100%-59rem))] lg:top-[calc(50%-7rem)]"
                                aria-hidden="true"
                            >
                                <div
                                    className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-br from-[#80caff] to-[#4f46e5] opacity-20"
                                    style={{
                                        clipPath:
                                        "polygon(74.1% 56.1%, 100% 38.6%, 97.5% 73.3%, 85.5% 100%, 80.7% 98.2%, 72.5% 67.7%, 60.2% 37.8%, 52.4% 32.2%, 47.5% 41.9%, 45.2% 65.8%, 27.5% 23.5%, 0.1% 35.4%, 17.9% 0.1%, 27.6% 23.5%, 76.1% 2.6%, 74.1% 56.1%)",
                                    }}
                                />
                                </div>
                            </div>
                            <h2 className="text-3xl font-bold tracking-tight text-white">Contact</h2>
                            <p className="mt-6 text-lg leading-8 text-gray-300">
                                Feel free to contact me via the provided form and/or email address provided below.
                            </p>
                            <dl className="mt-10 space-y-4 text-base leading-7 text-gray-300">
                                <div className="flex gap-x-4">
                                    <dt className="flex-none">
                                        <span className="sr-only">Email</span>
                                        <EnvelopeIcon className="h-7 w-6 text-gray-400" aria-hidden="true" />
                                    </dt>
                                    <dd>
                                        <a className="hover:text-white" href="mailto:gauger1992@gmail.com">
                                            gauger1992@gmail.com
                                        </a>
                                    </dd>
                                </div>
                            </dl>
                        </div>
                    </div>
                    <form onSubmit={handleContactFormSubmit} method="POST" className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48" autoComplete="off">
                        <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
                            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                                <div className="sm:col-span-2">
                                    <label htmlFor="name" className="block text-sm font-semibold leading-6 text-white">
                                        Name
                                    </label>
                                    <div className="mt-2.5">
                                        <input
                                            type="text"
                                            name="name"
                                            id="name"
                                            value={name}
                                            onChange={handleNameChange}
                                            className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                                        />
                                        <div className="hidden mt-2 ps-4 text-red-600" id="nameErrorMessage">
                                            <ExclamationTriangleIcon className="inline-block h-5" aria-hidden="true" />
                                            <p className="inline ps-2 text-sm">Name can&apos;t be blank.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="sm:col-span-2">
                                    <label htmlFor="email" className="block text-sm font-semibold leading-6 text-white">
                                        Email
                                    </label>
                                    <div className="mt-2.5">
                                        <input
                                            type="text"
                                            name="email"
                                            id="email"
                                            value={email}
                                            onChange={handleEmailChange}
                                            className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                                        />
                                        <div className="hidden mt-2 ps-4 text-red-600" id="emailErrorMessage">
                                            <ExclamationTriangleIcon className="inline-block h-5" aria-hidden="true" />
                                            <p className="inline ps-2 text-sm"></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="sm:col-span-2">
                                    <label htmlFor="phoneNumber" className="block text-sm font-semibold leading-6 text-white">
                                        Phone number
                                    </label>
                                    <div className="mt-2.5">
                                        <input
                                            type="tel"
                                            name="phoneNumber"
                                            id="phoneNumber"
                                            value={phoneNumber}
                                            onChange={handlePhoneNumberChange}
                                            className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                                        />
                                        <div className="hidden mt-2 ps-4 text-red-600" id="phoneNumberErrorMessage">
                                            <ExclamationTriangleIcon className="inline-block h-5" aria-hidden="true" />
                                            <p className="inline ps-2 text-sm"></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="sm:col-span-2">
                                    <label htmlFor="message" className="block text-sm font-semibold leading-6 text-white">
                                        Message
                                    </label>
                                    <div className="mt-2.5">
                                        <textarea
                                            name="message"
                                            id="message"
                                            value={message}
                                            onChange={handleMessageChange}
                                            rows={4}
                                            className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                                        />
                                        <div className="hidden mt-2 ps-4 text-red-600" id="messageErrorMessage">
                                            <ExclamationTriangleIcon className="inline-block h-5" aria-hidden="true" />
                                            <p className="inline ps-2 text-sm">Message can&apos;t be blank.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-8 flex justify-end">
                                <button
                                    type="submit"
                                    className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                                >
                                    Send message
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            {/* Global notification live region, render this permanently at the end of the document */}
            <div
                aria-live="assertive"
                className="pointer-events-none fixed inset-0 flex items-end px-4 py-6 sm:items-start sm:p-6"
            >
                <div className="flex w-full flex-col items-center space-y-4 sm:items-end">
                {/* Notification panel, dynamically insert this into the live region when it needs to be displayed */}
                    <Transition
                        show={show}
                        as={Fragment}
                        enter="transform ease-out duration-300 transition"
                        enterFrom="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
                        enterTo="translate-y-0 opacity-100 sm:translate-x-0"
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-gray-600 shadow-lg ring-1 ring-black ring-opacity-5">
                            <div className="p-4">
                                <div className="flex items-start">
                                    <div className="flex-shrink-0">
                                        <CheckCircleIcon className="h-6 w-6 text-green-400" aria-hidden="true" />
                                    </div>
                                    <div className="ml-3 w-0 flex-1 pt-0.5">
                                        <p className="text-sm font-medium text-gray-900">Message sent</p>
                                        <p className="mt-1 text-sm text-gray-400">Your message has been successfully sent.</p>
                                    </div>
                                    <div className="ml-4 flex flex-shrink-0">
                                        <button
                                            type="button"
                                            className="inline-flex rounded-md text-gray-300 hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                            onClick={() => { setShow(false) }}
                                            >
                                            <span className="sr-only">Close</span>
                                            <XMarkIcon className="h-5 w-5" aria-hidden="true" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Transition>
                </div>
            </div>
        </>
    );
};

export default Contact;
