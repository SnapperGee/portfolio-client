import { messagePredicate } from "./util";
import { StyleClasses } from "./util";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import { useState, useEffect } from "react";

const NAME = "message";

export default function MessageTextarea({validState, setValidState, invalidMessage}: {validState: boolean | null, setValidState: (validState: boolean | null) => void, invalidMessage: string})
{
    const [ inputValue, setInputValue ] = useState("");

    useEffect(() => {
        setValidState(inputValue.length === 0 ? null : inputValue.length !== 0 && messagePredicate(inputValue));
    }, [inputValue, setValidState]);

    return (
        <>
            <label htmlFor={NAME} className="block text-sm font-semibold leading-6 text-white">
                Message<sup className="ms-0.5">*</sup>
            </label>
            <div>
                <textarea
                    name={NAME}
                    id={NAME}
                    value={inputValue}
                    rows={4}
                    onChange={(e) => setInputValue(e.currentTarget.value)}
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
