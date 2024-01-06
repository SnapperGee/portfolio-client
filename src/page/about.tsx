import "../sass/about-me.scss";
import SnapperGeeIcon from "../assets/snapper_g_icon.svg";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";

const Paragraphs = () =>
(
    <>
        <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui assumenda veritatis deleniti ad est illum in
            aut non nostrum vel ex neque nulla harum, reiciendis ipsum. Dolore nam, obcaecati deserunt fuga minus libero
            eligendi! Nulla perspiciatis molestias dicta, pariatur quo quidem obcaecati quisquam veniam nam optio, esse
            voluptatem consequuntur maiores odio. Blanditiis voluptas sequi, hic odio fuga autem quisquam corporis.
        </p>

        <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum maiores eius nobis sapiente modi eligendi
            fugiat impedit soluta voluptatem doloremque animi pariatur laudantium, velit ipsam. Atque impedit optio sit
            dignissimos tenetur, ipsum accusamus distinctio architecto incidunt sed id sunt velit culpa ab dolores
            veritatis mollitia. Mollitia in nostrum, temporibus vitae quidem fuga, itaque deserunt dicta deleniti ex
            maiores, neque eius.
        </p>

        <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate labore minus rem eaque commodi minima
            optio? Est dolor placeat eaque, aliquid aliquam delectus ipsam fugiat eos maxime possimus, quasi repellendus
            dolorem corrupti iusto optio illum ea beatae esse facere dicta nostrum temporibus? Odit repellat quas,
            possimus soluta reprehenderit at nobis et eos cumque, voluptate a. Hic illo soluta magni quia?
        </p>
    </>
);

const About = () =>
(
    <div className="flex flex-col sm:flex-row justify-center items-center px-8 my-24">
        <div className="mb-4 sm:mb-0 sm:mr-4">
            <img
                className="h-32 bg-white min-w-32 rounded-lg"
                src={SnapperGeeIcon}
                alt="Snapper G profile icon picture"
            />
        </div>
        <div className="self-center sm:text-left text-gray-300">
            <h4 className="text-lg font-bold">Graham Auger</h4>
            <p className="mt-1">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. At commodi distinctio deserunt facilis
                suscipit porro dolore quas voluptatem sit animi! Optio nostrum provident sequi dicta dolorum quaerat
                omnis, explicabo sit nihil, voluptate dignissimos, minima officia repudiandae tempore quam similique
                neque magnam beatae? Non doloribus necessitatibus sunt fuga vel, autem earum. Itaque tempora dicta
                labore voluptas! Ut autem dolor a corporis?
            </p>

            <div className="hidden md:block mt-4 space-y-4">
                <Paragraphs />
            </div>

            <div className="md:hidden mx-auto w-full rounded-2xl p-2 mt-4">
                <Disclosure>
                {({ open }) => (
                    <>
                    <Disclosure.Button
                        className="flex w-full justify-between rounded-lg bg-indigo-600 px-4 py-2 text-left text-sm font-medium text-white hover:bg-indigo-500 focus:outline-none focus-visible:ring focus-visible:ring-indigo-500/75"
                        aria-expanded={String(open)}
                        aria-controls="additionalInfo"
                    >
                        <span>More info</span>
                        <ChevronUpIcon
                            id="arrow"
                            className={`${
                                open ? "rotateDown" : ""
                            } h-5 w-5 text-white`}
                        />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pb-2 pt-4 text-md text-gray-300 space-y-4" id="additionalInfo">
                        <Paragraphs />
                    </Disclosure.Panel>
                    </>
                )}
                </Disclosure>
            </div>
        </div>
    </div>
);

export default About;
