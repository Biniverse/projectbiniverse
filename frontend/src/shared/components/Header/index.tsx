const Header = () => {
  return (
    <header className='bg-white shadow-md'>
      <div className='container mx-auto flex justify-between items-center py-4 px-6'>
        <div className='text-2xl font-bold text-gray-800'>
          <a href='#'>Biniverse</a>
        </div>

        <div className='md:hidden'>
          <button className='text-gray-600 hover:text-gray-800 focus:outline-none'>
            <svg
              className='w-6 h-6'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h16M4 18h16'
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
