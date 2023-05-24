export default function Footer() {
  return (
    <footer className='bg-gray-900 text-white p-8'>
      <div className='container mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-5 gap-[30px]'>
          {/* First column */}
          <div className='col-span-1 max-w-[160px]'>
            <p className='text-2xl mb-4'>MyLogo</p>
            <p className='text-sm opacity-80'>Platform for every type of athletes.</p>
          </div>

          {/* Second column */}
          <div className='col-span-1 max-w-[160px]'>
            <p className='text-xl mb-4'>Workouts</p>
            <div className='opacity-80'>
              <a href='#' className='text-sm'>
                All
              </a>
              <br />
              <a href='#' className='text-sm'>
                Routines
              </a>
              <br />
              <a href='#' className='text-sm'>
                Styles
              </a>
            </div>
          </div>

          {/* Third column */}
          <div className='col-span-1 max-w-[160px]'>
            <p className='text-xl mb-4'>Exercises</p>
            <div className='opacity-80'>
              <a href='#' className='text-sm'>
                All
              </a>
              <br />
              <a href='#' className='text-sm'>
                Body Parts
              </a>
              <br />
              <a href='#' className='text-sm'>
                Compound Exercises
              </a>
              <br />
              <a href='#' className='text-sm'>
                Isolation Exercises
              </a>
            </div>
          </div>

          {/* Fourth column */}
          <div className='col-span-1 max-w-[160px]'>
            <p className='text-xl mb-4'>Contact</p>
            <div className='opacity-80'>
              <a href='mailto:info@sweatapp.com' className='text-sm'>
                info@sweatapp.com
              </a>
              <br />
              <a href='tel:myPhone nr' className='text-sm'>
                1-800-200-300
              </a>
              <br />
              <a href='#' className='text-sm'>
                8008 Potato Street
                <br />
                Red Fu, Mars
              </a>
            </div>
          </div>

          {/* Fifth column */}
          <div className='col-span-1 max-w-[160px]'>
            <p className='text-xl mb-4'>Stay Up To Date</p>
            <div className='opacity-80'>
              <a href='#' className='text-sm'>
                Blog
              </a>
              <br />
              <a href='#' className='text-sm'>
                Subscribe to our newsletter
              </a>
            </div>
            <br />
            <input
              type='email'
              placeholder='Enter your email'
              className='bg-gray-800 text-white px-4 py-2 rounded text-sm'
            />
          </div>
        </div>

        <p className='text-gray-400 mt-8 text-sm'>
          &copy; Copyright SWEAT Inc.
        </p>
      </div>
    </footer>
  );
}
