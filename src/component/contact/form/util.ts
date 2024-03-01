import isEmail from "validator/lib/isEmail";

export const enum FormFieldName
{
    NAME = "name",
    EMAIL = "email",
    PHONE_NUMBER = "phoneNumber",
    MESSAGE = "message"
}

export const enum StyleClasses
{
    EMPTY = "ring-white/10 focus:ring-indigo-500",
    INVALID = "ring-red-700/80 focus:ring-red-700",
    VALID = "ring-green-700/60 focus:ring-green-600/80"
}

export function namePredicate(aString: string): boolean { return aString.trim().length !== 0; }

export function emailPredicate(aString: string): boolean { return aString.length !== 0 && isEmail(aString); }

export function phoneNumberPredicate(aString: string): boolean { return aString.length >= 7 && ! /\D/.test(aString); }

export function messagePredicate(aString: string): boolean { return namePredicate(aString); }

export const InputPredicate = Object.freeze({
    name: namePredicate,
    email: emailPredicate,
    phoneNumber: phoneNumberPredicate
});
