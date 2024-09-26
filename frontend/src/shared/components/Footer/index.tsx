import { CommonConstant } from "../../constants/commonConstants";

const Footer = () => {
  const commonConstant = CommonConstant;

  return (
    <footer className=' text-black py-4'>
      <div className='container mx-auto text-center'>
        <p className='text-sm'>{ commonConstant.COPYRIGHT_TEXT }</p>
        <p className='text-sm'>
          <a href='#' className='hover:text-blue-700'>
            { commonConstant.PRIVACY_POLICY }
          </a>{" "}
          |
          <a href="#" className="hover:text-blue-700">
            {" "}
            { commonConstant.TERMS_OF_SERVICE }
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
