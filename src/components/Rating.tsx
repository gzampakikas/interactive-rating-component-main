import { useNavigate } from 'react-router';
import { useState } from 'react';
import iconStar from '../../images/icon-star.svg';

export default function Rating() {
    const [selectedRating, setSelectedRating] = useState<number | null>(null);
    const ratingNumbers: number[] = [1, 2, 3, 4, 5];
    const navigate = useNavigate();

    function handleSubmit(e: React.SyntheticEvent): void {
        e.preventDefault();
        if (!selectedRating) 
            return alert('select rating');

        navigate('/rate-result', {
            state: {
                rating: selectedRating,
            },
        })
    }

    return (
        <form 
            className="
                max-w-360
                h-full
                bg-grey-900
                rounded-2xl
                text-white
                flex
                flex-col
                gap-4
                p-10
                w-160
                max-[665px]:w-91.25
            "
            onSubmit={handleSubmit}
        >
            <img 
                src={iconStar} 
                alt="Icon Star"
                className="
                w-10
                bg-grey-500
                p-2
                rounded-full
                " 
            />

            <h1 className="text-white text-4xl">How did we do?</h1>

            <p>
                Please let us know how we did with your support
                request. All feedback is apprecieted to help us 
                improve our offering!
            </p>

            <div className="flex justify-between w-full">
                {ratingNumbers.map((num: number) => (
                    <button
                        key={num}
                        type="button"
                        onClick={() => setSelectedRating(num)}
                        className="btns"
                    > 
                        {num} 
                    </button>
                ))}
            </div>

            <button type="submit" className="
                bg-orange-500
                self-center
                w-full
                h-10
                rounded-2xl
                text-grey-950
                font-2xl
                font-normal
                hover:bg-white 
                cursor-pointer
                flex
                justify-center
                items-center
            ">
                SUBMIT
            </button>
        </form>
    );
}