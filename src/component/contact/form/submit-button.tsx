import { EnvelopeIcon } from "@heroicons/react/24/outline";

const Spinner = () => (
    <svg
        className="-ml-1 mr-3 h-5 w-5 animate-spin text-white"
        fill="none"
        viewBox="0 0 24 24"
        aria-hidden="true"
    >
        <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
        ></circle>
        <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
    </svg>
);

export default function SubmitButton({ active }: { active: boolean | null }) {
    return (
        <button
            type="submit"
            className={`flex items-center gap-x-1.5 rounded-md px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 ${active ? "bg-indigo-500 hover:bg-indigo-400 " : active === false ? "cursor-default bg-gray-500" : "cursor-wait bg-indigo-500"}`}
            disabled={!active ?? true}
        >
            {active === null ? (
                <>
                    <Spinner />
                    <span className="animate-pulse">Sending...</span>
                </>
            ) : (
                <>
                    <EnvelopeIcon
                        className="-ml-0.5 size-5"
                        aria-hidden="true"
                    />
                    Send message
                </>
            )}
        </button>
    );
}
