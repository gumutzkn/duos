import chair from '../../assets/chair.jpg';

const Post = () => {
	return (
		<div className='w-[310px] bg-white border shadow-form border-secondary rounded-lg cursor-pointer'>
			<div
				id='post_img'
				className='relative w-full h-[200px] bg-gray-200'
			>
				<img src={chair} alt='image' className='w-full h-full' />
				<div className='text-2xl font-semibold absolute bottom-4 left-6 text-white'>
					Başlık
				</div>
			</div>
			<div id='post_text' className='p-6'>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Maiores modi nihil inventore enim. At provident aperiam
					maiores eligendi, ex qui sequi minus ea laboriosam dolores
					pariatur ut recusandae. Ipsa, nobis.
				</p>
				<div className='font-bold mt-3 text-primary'>
					Devamını Oku &gt;&gt;
				</div>
			</div>
		</div>
	);
};

export default Post;
