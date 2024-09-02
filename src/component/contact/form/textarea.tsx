import { messagePredicate, type FormFieldName } from "./util";
import { StyleClasses } from "./util";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import { useEffect } from "react";

export default function Textarea({
    name,
    value,
    setValue,
    validState,
    setValidState,
    invalidMessage,
    label = name.charAt(0).toUpperCase() + name.substring(1),
    subLabel,
    required = false
}: {
    name: FormFieldName;
    value: string;
    setValue: (value: string) => void;
    validState: boolean | null;
    setValidState: (validState: boolean | null) => void;
    invalidMessage: string;
    label?: string | undefined;
    subLabel?: string | undefined;
    required?: boolean | undefined;
}) {
    useEffect(() => {
        setValidState(value.length === 0 ? null : value.length !== 0 && messagePredicate(value));
    }, [value, setValidState]);

    return (
        <>
            <label htmlFor={name} className="block text-sm font-semibold leading-6 text-white select-none">
                {required && <span className="text-red-500">* </span>}{label ?? name}
                {subLabel && <span className="text-xs text-gray-400">{subLabel}</span>}
            </label>
            <div>
                <textarea
                    name={name}
                    id={name}
                    value={value}
                    rows={4}
                    onChange={(e) => setValue(e.currentTarget.value)}
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
}
