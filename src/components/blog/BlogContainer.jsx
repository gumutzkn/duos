import { SectionWrapper } from '../../hoc';

import Post from './Post';

const BlogContainer = () => {
	return (
		<div className='my-40 flex flex-col'>
			<h1 className='text-center text-primary text-5xl'>Blog</h1>
			<div
				id='posts_container'
				className='flex mt-20 justify-between'
			>
				<Post />
				<Post />
				<Post />
				<Post />
			</div>
			<button className='bg-primary text-white self-center py-2 px-6 rounded-full mt-10'>
				Tüm Bloglar
			</button>
		</div>
	);
};

export default SectionWrapper(BlogContainer);
