import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";

const enum StyleClasses
{
    INVALID = "ring-red-700/80 focus:ring-red-700",
    VALID = "ring-white/10 focus:ring-indigo-500"
}

interface Props
{
    readonly name: string;
    readonly predicate: (input: string) => boolean;
    readonly invalidMessage: string;
    readonly formatter?: ((input: string) => string) | undefined;
    readonly type?: string | undefined;
    readonly label?: string | undefined;
}

const defaultInputFormatter = (input: string) => input;

const Input: React.FC<Readonly<Props>> = ({name, predicate, invalidMessage, formatter = defaultInputFormatter, type = "text", label}) =>
{
    const [ inputValue, setInputValue ] = useState("");
    const inputValueIsValid = predicate(inputValue);

    return (
        <>
            <label htmlFor={name} className={`block${label ? "\u0020" : " capitalize "}text-sm font-semibold leading-6 text-white`}>
                {label ?? name}
            </label>
            <div className="mt-2.5">
                <input
                    type={type}
                    name={name}
                    value={inputValue}
                    onChange={(e) => setInputValue(formatter(e.currentTarget.value))}
                    className={`block w-full rounded-md border-0 ${inputValueIsValid ? StyleClasses.INVALID : StyleClasses.VALID } bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6`}
                />
                <div className={`${inputValueIsValid ? "" : "hidden "}mt-2 ps-4 text-red-600`}>
                    <ExclamationTriangleIcon className="inline-block h-5" aria-hidden="true" />
                    <p className="inline ps-2 text-sm">{invalidMessage}</p>
                </div>
            </div>
        </>
    );
}

export default Input;
