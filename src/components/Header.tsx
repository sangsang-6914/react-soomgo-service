import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="flex items-center md:justify-center p-4 sticky top-0 border-b border-b-light_gray bg-[#fff] h-[3.625rem] z-20">
      <Link to="/">
        <img
          data-v-54e47384=""
          src="https://assets.cdn.soomgo.com/icons/logo/navigation_logo.svg"
          alt="숨고 로고"
          data-testid="main-logo"
          className="h-[1.625rem]"
        ></img>
      </Link>
    </header>
  );
}

export default Header;
