import { useEffect, useState } from 'react';

import {
	FaChevronLeft,
	FaChevronRight,
	FaRegCircle,
	FaRegCircleDot,
} from 'react-icons/fa6';

import './image-slider.css';

const ImageSlider = ({ images }) => {
	const [imageIndex, setImageIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			showNext();
		}, 3000);

		return () => clearInterval(interval);
	}, [imageIndex]);

	const showPrev = () => {
		setImageIndex((index) => {
			if (index === 0) {
				return images.length - 1;
			}
			return index - 1;
		});
	};

	const showNext = () => {
		setImageIndex((index) => {
			if (index === images.length - 1) {
				return 0;
			}

			return index + 1;
		});
	};

	return (
		<div className='h-full w-full relative'>
			<div className='img_container relative h-full flex w-full overflow-hidden'>
				<div className='absolute w-full h-full top-0 bottom-0 left-0 right-0 bg-black/30 z-20' />
				{images.map(({ url, alt }, index) => (
					<div
						key={index}
						className='h-full w-full shrink-0 grow-0 bg-black/20 transition-all duration-700
            ease-in-out'
						style={{ translate: `${imageIndex * -100}%` }}
					>
						<img className='img-slider-img' src={url} alt={alt} />
					</div>
				))}
			</div>
			<button
				onClick={showPrev}
				className='img-slider-btn left-0 ml-5'
			>
				<FaChevronLeft size={90} className='text-white' />
			</button>
			<button
				onClick={showNext}
				className='img-slider-btn right-0 mr-5'
			>
				<FaChevronRight size={90} className='text-white' />
			</button>
			<div className='absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2 z-30'>
				{images.map((_, idx) => (
					<button
						key={idx}
						className='font-bold text-2xl text-white'
						onClick={() => setImageIndex(idx)}
					>
						{idx === imageIndex ? (
							<FaRegCircleDot />
						) : (
							<FaRegCircle />
						)}
					</button>
				))}
			</div>
		</div>
	);
};

export default ImageSlider;
