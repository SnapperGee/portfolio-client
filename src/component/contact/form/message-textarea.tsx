import { messagePredicate, type FormFieldName } from "./util";
import { StyleClasses } from "./util";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import { useEffect } from "react";

export default function MessageTextarea(
    {
        name,
        value,
        setValue,
        validState,
        setValidState,
        invalidMessage
    }:
    {
        name: FormFieldName,
        value: string,
        setValue: (value: string) => void,
        validState: boolean | null,
        setValidState: (validState: boolean | null) => void,
        invalidMessage: string
    })
{
    useEffect(() => {
        setValidState(value.length === 0 ? null : value.length !== 0 && messagePredicate(value));
    }, [value, setValidState]);

    return (
        <>
            <label htmlFor={name} className="block text-sm font-semibold leading-6 text-white">
                Message<sup className="ms-0.5">*</sup>
            </label>
            <div>
                <textarea
                    name={name}
                    id={name}
                    value={value}
                    rows={4}
                    onChange={(e) => setValue(e.currentTarget.value)}
                    className={`block w-full rounded-md border-0 ${validState === true ? StyleClasses.VALID : validState === false ? StyleClasses.INVALID : StyleClasses.EMPTY} bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6`}
                    required
                />
                {
                    validState === false &&
                    <div className="mt-2 ps-4 text-red-600">
                        <ExclamationTriangleIcon className="inline-block size-5" aria-hidden="true" />
                        <p className="inline ps-2 text-xs">{invalidMessage}</p>
                    </div>
                }
            </div>
        </>
    );
}
