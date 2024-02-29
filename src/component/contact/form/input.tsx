import { StyleClasses } from "../../../constant/contact-form";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import React, { useState, useEffect } from "react";

interface InputProps
{
    readonly name: string;
    readonly predicate: (input: string) => boolean;
    readonly valid: boolean | null;
    readonly invalidMessage: string;
    readonly format?: ((input: string) => string) | undefined;
    readonly type?: string | undefined;
    readonly label?: string | undefined;
    readonly subLabel?: string | undefined;
    readonly required?: boolean | undefined;
}

const defaultInputFormatter = (input: string) => input;

const Input: React.FC<Readonly<InputProps>> = ({
    valid,
    name,
    predicate,
    invalidMessage,
    format = defaultInputFormatter,
    type = "text",
    label = name.charAt(0).toUpperCase() + name.substring(1),
    subLabel,
    required = false
}) =>
{
    const [ inputValue, setInputValue ] = useState("");
    const [ inputValueIsValid, setInputValueIsValid ] = useState(valid);

    const inputIsValid = predicate(inputValue);

    useEffect(() => {
        if (inputValue.length === 0)
        {
            setInputValueIsValid(null);
        }
        else
        {
            setInputValueIsValid(inputIsValid);
        }
    }, [inputValue, inputIsValid]);

    return (
        <>
            <label htmlFor={name} className="block text-sm font-semibold leading-6 text-white">
                {label ?? name}{required && <sup className="ms-0.5">*</sup>}{subLabel && <span className="text-xs text-gray-400">{subLabel}</span>}
            </label>
            <div>
                <input
                    type={type}
                    name={name}
                    id={name}
                    value={inputValue}
                    onChange={(e) => setInputValue(format(e.currentTarget.value))}
                    className={`block w-full rounded-md border-0 ${inputValueIsValid === true ? StyleClasses.VALID : inputValueIsValid === false ? StyleClasses.INVALID : StyleClasses.EMPTY} bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6`}
                    required={required}
                />
                {
                    inputValueIsValid === false &&
                    <div className="mt-2 ps-4 text-red-600">
                        <ExclamationTriangleIcon className="inline-block size-5" aria-hidden="true" />
                        <p className="inline ps-2 text-xs">{invalidMessage}</p>
                    </div>
                }
            </div>
        </>
    );
}

export default Input;
