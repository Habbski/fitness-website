import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import ReviewCard from './ReviewCard';

export default function ReviewCarousel() {
  // Dummy Data
  const reviews = [
    {
      name: 'John Doe',
      jobTitle: 'Software Developer',
      profilePic:
        'https://as2.ftcdn.net/v2/jpg/00/64/67/63/1000_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg',
      rating: 5,
      text: 'Great product, would definitely recommend!',
    },
    {
      name: 'Billy Bob',
      jobTitle: 'CEO of Paperplane AS',
      profilePic:
        'https://as2.ftcdn.net/v2/jpg/00/64/67/63/1000_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg',
      rating: 5,
      text: 'Ut leo lorem, sodales efficitur commodo sed, ullamcorper eget sapien. Nullam at magna lorem. Aenean quis laoreet velit. Aliquam accumsan lectus magna. ',
    },
    {
      name: 'Sindy Sand',
      jobTitle: 'PT at SATS',
      profilePic:
        'https://as2.ftcdn.net/v2/jpg/00/64/67/63/1000_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg',
      rating: 5,
      text: 'Ut leo lorem, sodales efficitur commodo sed, ullamcorper eget sapien. Nullam at magna lorem. Aenean quis laoreet velit. Aliquam accumsan lectus magna. ',
    },
  ];
  return (
    <div className='flex flex-col items-center justify-center min-h-screen container mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
      <h2 className='mb-[60px] text-5xl font-bold text-white'>
        What people say about Sweat
      </h2>
      <Carousel
        autoPlay
        showThumbs={false}
        showStatus={false}
        infiniteLoop={true}
        emulateTouch={true}
        swipeable={true}
        centerMode={true}
        centerSlidePercentage={33.33}
        slidesToShow={3}
      >
        {reviews.map((review, index) => (
          <div key={index}>
            <ReviewCard review={review} />
          </div>
        ))}
      </Carousel>
    </div>
  );
}
