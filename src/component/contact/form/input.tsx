import { StyleClasses } from "../../../constant/contact-form";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";

interface InputProps
{
    readonly name: string;
    readonly predicate: (input: string) => boolean;
    readonly invalidMessage: string;
    readonly format?: ((input: string) => string) | undefined;
    readonly type?: string | undefined;
    readonly label?: string | undefined;
    readonly required?: boolean | undefined;
}

const defaultInputFormatter = (input: string) => input;

const Input: React.FC<Readonly<InputProps>> = ({
    name,
    predicate,
    invalidMessage,
    format = defaultInputFormatter,
    type = "text",
    label = name.charAt(0).toUpperCase() + name.substring(1),
    required = false
}) =>
{
    const [ inputValue, setInputValue ] = useState("");
    const inputValueIsEmpty = inputValue.length === 0;
    const inputValueIsValid = predicate(inputValue);

    return (
        <>
            <label htmlFor={name} className="block text-sm font-semibold leading-6 text-white">
                {label ?? name}
            </label>
            <div>
                <input
                    type={type}
                    name={name}
                    id={name}
                    value={inputValue}
                    onChange={(e) => setInputValue(format(e.currentTarget.value))}
                    className={`block w-full rounded-md border-0 ${inputValueIsEmpty ? StyleClasses.EMPTY : inputValueIsValid ? StyleClasses.VALID : StyleClasses.INVALID } bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6`}
                    required={required}
                />
                <div className={`${inputValueIsEmpty || inputValueIsValid ? "hidden " : ""}mt-2 ps-4 text-red-600`}>
                    <ExclamationTriangleIcon className="inline-block size-5" aria-hidden="true" />
                    <p className="inline ps-2 text-xs">{invalidMessage}</p>
                </div>
            </div>
        </>
    );
}

export default Input;
