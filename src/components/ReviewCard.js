import Star from '../assets/img/review-star.svg';

export default function ReviewCard({ review }) {
  return (
    <div className='p-4 md:p-6 bg-[#1E2728] shadow-lg rounded-lg flex flex-col justify-between items-start space-y-8 md:space-y-12 w-full md:max-w-[367px] h-full md:h-[415px] mx-auto'>
      <div className='flex justify-center pt-6'>
        {[...Array(5)].map((star, i) => {
          const ratingValue = i + 1;
          return (
            <img
              src={Star}
              alt='star'
              className={
                ratingValue <= review.rating
                  ? 'text-yellow-500'
                  : 'text-gray-300'
              }
            />
          );
        })}
      </div>
      <div className='text-lg text-white text-start px-2'>
        {review.text}
      </div>
      <div className='flex items-center pb-10'>
        <img
          className='-full md:max-w-[52px] h-full md:h-[52px] rounded-full'
          src={review.profilePic}
          alt={review.name}
        />
        <div className='text-lg ml-4 text-start'>
          <p className='text-white leading-none'>{review.name}</p>
          <p className='text-white opacity-80'>{review.jobTitle}</p>
        </div>
      </div>
    </div>
  );
}
