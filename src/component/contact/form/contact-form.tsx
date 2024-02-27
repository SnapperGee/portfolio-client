import Input from "./input";
import isEmail from "validator/lib/isEmail";

export default function ContactForm()
{
    return (
        <form className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48" autoComplete="off">
            <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 [&>label+div]:sm:col-span-2">
                    <Input
                        name = "name"
                        format = {(input) => input.trimStart().replace(/\s{2,}/, "\u0020")}
                        predicate = {(input) => input.trim().length !== 0}
                        invalidMessage = "A non-blank name is required."
                    />
                    <Input
                        name = "email"
                        type = "email"
                        format = {(input) => input.trim().toLowerCase()}
                        predicate = {isEmail}
                        invalidMessage = "Invalid email format."
                    />
                </div>
            </div>
        </form>
    );
}
