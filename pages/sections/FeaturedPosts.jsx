import React, { useState, useEffect} from 'react'
import Carousel from 'react-multi-carousel';
import { FeaturedPostCard } from '../../components';

import { getFeaturedPosts } from '../../services'

const FeaturedPosts = () => {
	const [featuredPosts, setFeaturedPosts] = useState([])
	const [dataLoaded, setDataLoaded] = useState(false)

	useEffect(() => {
	  getFeaturedPosts()
	  	.then(result => {
			setFeaturedPosts(result)
			setDataLoaded(true)
		})
	
	}, [])

	
	const responsive = {
		superLargeDesktop: {
			breakpoint: { max: 4000, min: 3000 },
			items: 3
		},
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 3
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 2
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1
		}
	};

	const customLeftArrow = (
		<div className="absolute arrow-btn left-0 text-center py-3 cursor-pointer bg-pink-600 rounded-full">
		<svg xmlns="http://www.w3.org/2000/svg" className="h-6 text-white w-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
			<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
		</svg>
		</div>
	);

	const customRightArrow = (
		<div className="absolute arrow-btn right-0 text-center py-3 cursor-pointer bg-pink-600 rounded-full">
		<svg xmlns="http://www.w3.org/2000/svg" className="h-6 text-white w-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
			<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
		</svg>
		</div>
	);

	return (
		<div className="container h-96">
			<Carousel infinite responsive={responsive} itemClass="px-4" customLeftArrow={customLeftArrow} customRightArrow={customRightArrow}>
				{dataLoaded && featuredPosts.map((post, index) => (
				<FeaturedPostCard key={index} post={post} />
				))}
			</Carousel>
		</div>
	)
}

export default FeaturedPosts