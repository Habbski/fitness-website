import workoutImg1 from '../assets/img/home-image1.jpg';
import workoutImg2 from '../assets/img/home-image2.jpg';

export default function Info() {
  return (
    <div className='container mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
      <div className='flex flex-col w-full justify-center items-center text-white'>
        <div className='flex flex-col w-full justify-around'>
          <div className='flex justify-between items-center mb-4'>
            <div className='relative max-w-[556px] max-h-[556px] mt-40 mb-20'>
              <img
                src={workoutImg1}
                alt='WorkoutImg1'
                className='top-0 left-0 w-full h-full object-cover'
              />
            </div>
            <div className='flex flex-col max-w-[556px] max-h-[556px] ml-8'>
              <h2 className='text-3xl font-semibold'>Purpose For Working out</h2>
              <p className='text-white text-opacity-80 xl:text-lg lg:text-base md:text-sm sm:text-xs text-xs 2xl:my-6 xl:my-6 lg:my-4 my-2 xl:max-w-lg'>
                Regular physical activity can improve your muscle strength and
                boost your endurance. Exercise delivers oxygen and nutrients to
                your tissues and helps your cardiovascular system work more
                efficiently. And when your heart and lung health improve, you
                have more energy to tackle daily chores.
              </p>
              <a
                href='your-link-url'
                className='text-[#ABDF3B] hover:text-opacity-60'
              >
                Learn more
              </a>
            </div>
          </div>

          <div className='flex justify-between items-center'>
            <div className='flex flex-col max-w-[556px] max-h-[556px] mr-8'>
              <h2 className='text-3xl font-semibold'>Choosing Exercises</h2>
              <p className='text-white text-opacity-80 xl:text-lg lg:text-base md:text-sm sm:text-xs text-xs 2xl:my-6 xl:my-6 lg:my-4 my-2 xl:max-w-lg'>
                Choosing the correct exercises can make your workouts a whole
                lot more than the sum of their parts. However, you don't need to
                take a shot in the dark at picking the best movement for every
                muscle. Armed with the right knowledge, you'll be able to
                confidently stride into every workout knowing you've picked the
                proper tools to get the job done
              </p>
              <a
                href='your-link-url'
                className='text-[#ABDF3B] hover:text-opacity-60'
              >
                Learn more
              </a>
            </div>
            <div className='relative max-w-[556px] max-h-[556px]'>
              <img
                src={workoutImg2}
                alt='WorkoutImg2'
                className='top-0 left-0 w-full h-full object-cover'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
