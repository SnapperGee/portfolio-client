import NameInput from "./input/name";
import EmailInput from "./input/email";

export default function ContactForm()
{
    return (
        <form className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48" autoComplete="off">
            <NameInput />
            <EmailInput />
        </form>
    );
}
