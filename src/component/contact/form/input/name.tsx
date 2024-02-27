import { InputStyleClasses } from "../../../../constant/contact-form";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";

interface NameInputProps
{
    readonly name?: string | undefined;
}

const NameInput: React.FC<NameInputProps> = ({name = "name"}) =>
{
    const [ inputValue, setInputValue ] = useState("");
    const inputValueIsBlank = inputValue.length !== 0 && inputValue.trim().length === 0;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    {
        setInputValue(e.currentTarget.value);
    }

    return (
        <>
            <label htmlFor={name} className="block text-sm font-semibold leading-6 text-white">
                Name
            </label>
            <div className="mt-2.5">
                <input
                    type="text"
                    name={name}
                    value={inputValue}
                    onChange={handleChange}
                    className={`block w-full rounded-md border-0 ${inputValueIsBlank ? InputStyleClasses.INVALID : InputStyleClasses.VALID } bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6`}
                />
                <div className={`${inputValueIsBlank ? "" : "hidden "}mt-2 ps-4 text-red-600`}>
                    <ExclamationTriangleIcon className="inline-block h-5" aria-hidden="true" />
                    <p className="inline ps-2 text-sm">A non-blank name is required.</p>
                </div>
            </div>
        </>
    );
}

export default NameInput;
