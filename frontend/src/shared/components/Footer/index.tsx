const Footer = () => {
  return (
    <footer className=' text-black py-4'>
      <div className='container mx-auto text-center'>
        <p className='text-sm'>© 2024 BiniVerse. All rights reserved.</p>
        <p className='text-sm'>
          <a href='#' className='hover:text-blue-700'>
            Privacy Policy
          </a>{" "}
          |
          <a href='#' className='hover:text-blue-700'>
            {" "}
            Terms of Service
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
