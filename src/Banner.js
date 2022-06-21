import React from 'react';
import {
	CarouselControl,
	Carousel,
	CarouselItem,
	CarouselIndicators,
} from 'reactstrap';

function Banner() {
	const [activeIndex, setActiveIndex] = React.useState(0);
	const items = [
		{
            src: 'https://raw.githubusercontent.com/Aishwarya-Venkatraman/gallery/master/banner1.jpg',
			altText: 'Image 1'
		},
		{
            src: 'https://raw.githubusercontent.com/Aishwarya-Venkatraman/gallery/master/banner2.jpg',
			altText: 'Image 2'
		},
		{
            src: 'https://raw.githubusercontent.com/Aishwarya-Venkatraman/gallery/master/banner3.jpg',
			altText: 'Image 3'
		}
	];
	const itemLength = items.length - 1

	const previousButton = () => {
		const nextIndex = activeIndex === 0 ? itemLength : activeIndex - 1;
		setActiveIndex(nextIndex);
	}

	const nextButton = () => {
		const nextIndex = activeIndex === itemLength ? 0 : activeIndex + 1;
		setActiveIndex(nextIndex);
	}

	const carouselItemData = items.map((item, index) => {
		return (
			<CarouselItem key={index}>
				<img className="d-block w-100" src={item.src} alt={item.altText} />
			</CarouselItem>
		);
	});

	return (
		<div className='bannerContainer'>
			<Carousel previous={previousButton} next={nextButton}
				activeIndex={activeIndex}>
				<CarouselIndicators items={items}
					activeIndex={activeIndex}
					onClickHandler={(newIndex) => {
						setActiveIndex(newIndex);
					}} />
				{carouselItemData}
				<CarouselControl directionText="Prev"
					direction="prev" onClickHandler={previousButton} />
				<CarouselControl directionText="Next"
					direction="next" onClickHandler={nextButton} />
			</Carousel>
		</div >
	);
}

export default Banner;