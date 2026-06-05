import { useLocation } from 'react-router';
import IllustrationIcon from '../../images/illustration-thank-you.svg';

export default function RateResult() {
    const location = useLocation();
    const rating = location.state!.rating;

    return(
        <div
            className="
                max-w-360
                h-full
                bg-grey-900
                rounded-2xl
                text-white
                flex
                flex-col
                justify-center
                items-center
                gap-4
                p-10
                w-160
                max-[665px]:w-91.25
            "
        >
            <img 
                src={IllustrationIcon}
                alt="Illustration Thank You" 
                className="w-50"
            />

            <span className="
                bg-gray-700 
                rounded-2xl
                p-2
                text-orange-500
            ">
                You selected {rating} out of 5
            </span>

            <h1 className="text-white text-4xl">Thank you!</h1>

            <p className="text-grey-500 mx-15">
                We appreciete you Taking the time to give a rating. If you ever need more 
                support, don't hesitate to get in touch
            </p>
        </div>
    );
}