import SnapperGeeIcon from '../assets/snapper_g_icon.svg';

const AboutMe = () =>
(
    <div className="sm:flex justify-center mt-24">
        <div className="mb-4 flex-shrink-0 sm:mb-0 sm:mr-4 align-self-center">
            <img
                className="h-32 bg-white sm:w-32"
                src={SnapperGeeIcon}
                alt="Snapper G"
            />
        </div>
        <div className="self-center">
            <h4 className="text-lg font-bold">Graham Auger</h4>
            <p className="mt-1">
                Repudiandae sint consequuntur vel. Amet ut nobis explicabo numquam expedita quia omnis voluptatem. Minus
                quidem ipsam quia iusto.
            </p>
        </div>
    </div>
);

export default AboutMe;
