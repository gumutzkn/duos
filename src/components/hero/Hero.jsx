import raf1 from '../../assets/raf1.jpg';
import raf2 from '../../assets/raf2.jpg';
import raf3 from '../../assets/raf3.jpg';

import ImageSlider from './ImageSlider';

const IMAGES = [
	{ url: raf1, alt: 'Raf 1' },
	{ url: raf2, alt: 'Raf 2' },
	{ url: raf3, alt: 'Raf 3' },
];

const Hero = () => {
	return (
		<div className='h-[700px]'>
			<ImageSlider images={IMAGES} />
		</div>
	);
};

export default Hero;
