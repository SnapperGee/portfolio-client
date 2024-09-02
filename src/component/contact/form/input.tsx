import { StyleClasses, type FormFieldName } from "./util";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import { FC, HTMLInputTypeAttribute, useEffect } from "react";

interface InputProps {
    readonly name: FormFieldName;
    readonly predicate: (input: string) => boolean;
    readonly value: string;
    readonly validState: boolean | null;
    readonly invalidMessage: string;
    readonly setValue: (value: string) => void;
    readonly setValidState: (validState: boolean | null) => void;
    readonly format?: ((input: string) => string) | undefined;
    readonly type?: HTMLInputTypeAttribute | undefined;
    readonly label?: string | undefined;
    readonly subLabel?: string | undefined;
    readonly required?: boolean | undefined;
}

const defaultInputFormatter = (input: string) => input;

const Input: FC<Readonly<InputProps>> = ({
    validState,
    name,
    value,
    setValue,
    predicate,
    invalidMessage,
    setValidState,
    format = defaultInputFormatter,
    type = "text",
    label = name.charAt(0).toUpperCase() + name.substring(1),
    subLabel,
    required = false
}) => {
    useEffect(() => {
        setValidState(value.length === 0 ? null : predicate(value));
    }, [value, predicate, setValidState]);

    return (
        <>
            <label htmlFor={name} className="block text-sm font-semibold leading-6 text-white select-none">
                {required && <span className="text-red-500">* </span>}{label ?? name}
                {subLabel && <span className="text-xs text-gray-400">{subLabel}</span>}
            </label>
            <div>
                <input
                    type={type}
                    name={name}
                    id={name}
                    value={value}
                    onChange={(e) => setValue(format(e.currentTarget.value))}
                    className={`block w-full rounded-md border-0 ${validState === true ? StyleClasses.VALID : validState === false ? StyleClasses.INVALID : StyleClasses.EMPTY} bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6`}
                    required={required}
                />
                {validState === false && (
                    <div className="mt-2 ps-4 text-red-600">
                        <ExclamationTriangleIcon
                            className="inline-block size-5"
                            aria-hidden="true"
                        />
                        <p className="inline ps-2 text-xs">{invalidMessage}</p>
                    </div>
                )}
            </div>
        </>
    );
};

export default Input;
