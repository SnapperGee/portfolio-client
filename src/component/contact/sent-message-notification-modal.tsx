import XMarkIcon from "../../assets/x_mark_icon.svg";
import CheckCircleIcon from "../../assets/check_circle_icon.svg";
import XCircleIcon from "../../assets/x_circle_icon.svg";
import { Transition } from "@headlessui/react";
import { Fragment } from "react";

export default function SentMessageNotificationModal({
    success,
    show,
    setShow
}: {
    success: boolean | null;
    show: boolean;
    setShow: (show: boolean) => void;
}) {
    return (
        <div
            aria-live="assertive"
            className="pointer-events-none fixed inset-0 flex items-end px-4 py-6 sm:items-start sm:p-6"
        >
            <div className="flex w-full flex-col items-center space-y-4 sm:items-end">
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
                                    {success ? (
                                        <img src={CheckCircleIcon} alt="Check" height={24} width={24} className="size-6" aria-hidden="true" />
                                    ) : (
                                        <img src={XCircleIcon} alt="X" height={24} width={24} className="size-6" aria-hidden="true" />
                                    )}
                                </div>
                                <div className="ml-3 w-0 flex-1 pt-0.5">
                                    <p className="text-sm font-medium text-gray-900">
                                        {success ? "Message sent" : "Unable to send message"}
                                    </p>
                                    <p className="mt-1 text-sm text-gray-400">
                                        {success
                                            ? "Your message has been successfully sent."
                                            : success === false
                                              ? "Please ensure that all required message form fields are filled out correctly and try again."
                                              : "Your message could not be sent. Please try again later."}
                                    </p>
                                </div>
                                <div className="ml-4 flex flex-shrink-0">
                                    <button
                                        type="button"
                                        className="inline-flex rounded-md text-gray-300 hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                        onClick={() => {
                                            setShow(false);
                                        }}
                                    >
                                        <span className="sr-only">Close</span>
                                        <img src={XMarkIcon} alt="Close" height={20} width={20} className="size-5" aria-hidden="true" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Transition>
            </div>
        </div>
    );
}
