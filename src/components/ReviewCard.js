import Star from '../assets/img/review-star.svg';

export default function ReviewCard({ review }) {
  return (
    <div className='p-4 md:p-6 bg-white shadow-lg rounded-lg flex flex-col items-start space-y-8 md:space-y-12 w-full md:max-w-[367px] h-full md:h-[415px] mx-auto'>
      <div className='flex justify-center'>
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
      <div className='text-sm text-gray-600 text-center px-2'>
        {review.text}
      </div>
      <div className='flex items-center'>
        <img
          className='w-14 h-14 rounded-full'
          src={review.profilePic}
          alt={review.name}
        />
        <div className='text-sm ml-4'>
          <p className='text-gray-900 leading-none'>{review.name}</p>
          <p className='text-gray-600'>{review.jobTitle}</p>
        </div>
      </div>
    </div>
  );
}
