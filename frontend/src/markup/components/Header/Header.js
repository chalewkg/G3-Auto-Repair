// import React from "react";
// // Import the Link component from react-router-dom
// import { Link } from "react-router-dom";
// // Import the logo image
// //import logo from "../../../assets/images/logo.png";
// import logo from "../../../assets/images/g3logo.png";
// // Import the login service to access the logout function
// // Import the login service to access the logout function
// import loginService from "../../../services/login.service";
// // Import the custom context hook
// import { useAuth } from "../../../Contexts/AuthContext";

// function Header(props) {
//   // Use the custom hook to access the data in the context
//   const { isAdmin, isLogged, setIsLogged, employee } = useAuth();
//   // console.log(useAuth());

//   // Log out event handler function
//   const logOut = () => {
//     // Call the logout function from the login service
//     loginService.logOut();
//     // Set the isLogged state to false
//     setIsLogged(false);
//   };

//   return (
//     <div>
//       <header className='main-header header-style-one'>
//         <div className='header-top'>
//           <div className='auto-container'>
//             <div className='inner-container'>
//               <div className='left-column'>
//                 <div className='text'>
//                   Quality service and expert care for your vehicle
//                 </div>
//                 <div className='office-hour'>
//                   Monday - Saturday 7:00AM - 6:00PM
//                 </div>
//               </div>
//               <div className='right-column'>
//                 {isLogged ? (
//                   <div className='link-btn'>
//                     <div className='phone-number'>
//                       <strong>Welcome {employee?.employee_first_name}</strong>
//                     </div>
//                   </div>
//                 ) : (
//                   <div className='phone-number'>
//                     Schedule Appointment: <strong>+251713829204 </strong>{" "}
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className='header-upper'>
//           <div className='auto-container'>
//             <div className='inner-container'>
//               <div className='logo-box'>
//                 <div className='logo'>
//                   <Link to='/'>
//                     <img src={logo} alt='' />
//                   </Link>
//                 </div>
//               </div>
//               <div className='right-column'>
//                 <div className='nav-outer'>
//                   <div className='mobile-nav-toggler'>
//                     <img src='assets/images/icons/icon-bar.png' alt='' />
//                   </div>
//                   <nav className='main-menu navbar-expand-md navbar-light'>
//                     <div
//                       className='collapse navbar-collapse show clearfix'
//                       id='navbarSupportedContent'>
//                       <ul className='navigation'>
//                         <li className='dropdown'>
//                           <Link to='/'>Home</Link>
//                         </li>
//                         <li className='dropdown'>
//                           <Link to='/about'>About Us</Link>
//                         </li>
//                         <li className='dropdown'>
//                           <Link to='/services'>Services</Link>
//                         </li>
//                         <li>
//                           <Link to='/contact'>Contact Us</Link>
//                         </li>
//                         {isLogged && isAdmin && (
//                           <li>
//                             <Link to='/admin'>Admin</Link>
//                           </li>
//                         )}
//                       </ul>
//                     </div>
//                   </nav>
//                 </div>
//                 <div className='search-btn'></div>
//                 {isLogged ? (
//                   <div className='link-btn'>
//                     <Link
//                       to='/'
//                       className='theme-btn btn-style-one blue'
//                       onClick={logOut}>
//                       Log out
//                     </Link>
//                   </div>
//                 ) : (
//                   <div className='link-btn'>
//                     <Link to='/login' className='theme-btn btn-style-one'>
//                       Login
//                     </Link>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className='sticky-header'>
//           <div className='header-upper'>
//             <div className='auto-container'>
//               <div className='inner-container'>
//                 <div className='logo-box'>
//                   <div className='logo'>
//                     <Link to='/'>
//                       <img src='assets/images/custom/logo.png' alt='' />
//                     </Link>
//                   </div>
//                 </div>
//                 <div className='right-column'>
//                   <div className='nav-outer'>
//                     <div className='mobile-nav-toggler'>
//                       <img src='assets/images/icons/icon-bar.png' alt='' />
//                     </div>

//                     <nav className='main-menu navbar-expand-md navbar-light'></nav>
//                   </div>
//                   <div className='search-btn'></div>
//                   <div className='link-btn'>
//                     <Link to='/login' className='theme-btn btn-style-one'>
//                       Login
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className='mobile-menu'>
//           <div className='menu-backdrop'></div>
//           <div className='close-btn'>
//             <span className='icon flaticon-remove'></span>
//           </div>

//           <nav className='menu-box'>
//             <div className='nav-logo'>
//               <Link to='index.html'>
//                 <img src='assets/images/logo-two.png' alt='' title='' />
//               </Link>
//             </div>
//             <div className='menu-outer'></div>
//           </nav>
//         </div>

//         <div className='nav-overlay'>
//           <div className='cursor'></div>
//           <div className='cursor-follower'></div>
//         </div>
//       </header>
//     </div>
//   );
// }

// export default Header;
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/images/g3logo.png";
import loginService from "../../../services/login.service";
import { useAuth } from "../../../Contexts/AuthContext";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
// Make sure to import the stylesheet where you added the CSS

function Header() {
  const { isAdmin, isLogged, setIsLogged, employee } = useAuth();

  const logOut = () => {
    loginService.logOut();
    setIsLogged(false);
  };

  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);
    handleResize();
    handleScroll();
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header
      className={`main-header header-style-one ${
        isScrolled ? "fixed-header" : ""
      }`}>
      <div className='header-top'>
        <div className='auto-container'>
          <div className='inner-container'>
            <div className='left-column'>
              <div className='text'>
                Quality service and expert care for your vehicle
              </div>
              <div className='office-hour'>
                Monday - Saturday 7:00AM - 6:00PM
              </div>
            </div>
            <div className='right-column'>
              {isLogged ? (
                <div className='link-btn'>
                  <div className='phone-number'>
                    <strong>Welcome {employee?.employee_first_name}</strong>
                  </div>
                </div>
              ) : (
                <div className='phone-number'>
                  Schedule Appointment: <strong>+251713829204</strong>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className='header-upper'>
        <div className='auto-container'>
          <div className='inner-container'>
            <div className='logo-box'>
              <div className='logo'>
                <Link to='/'>
                  <img src={logo} alt='Logo' />
                </Link>
              </div>
            </div>
            <div className='right-column'>
              <div className='nav-outer'>
                <button className='navbar-toggler' onClick={toggleMenu}>
                  <div className='navbar-toggler-icon'>
                    <MenuIcon className='navbar-icon' />
                  </div>
                </button>
                <ul
                  className={`navigation ${isOpen && isMobile ? "show" : ""}`}>
                  <button className='close-btn' onClick={toggleMenu}>
                    <CloseIcon className='navbar-icon' />
                  </button>
                  <li className='dropdown'>
                    <Link to='/'>Home</Link>
                  </li>
                  <li className='dropdown'>
                    <Link to='/about'>About Us</Link>
                  </li>
                  <li className='dropdown'>
                    <Link to='/services'>Services</Link>
                  </li>
                  <li>
                    <Link to='/contact'>Contact Us</Link>
                  </li>
                  {isLogged && isAdmin && (
                    <li>
                      <Link to='/admin'>Admin</Link>
                    </li>
                  )}
                  {isLogged && isMobile && (
                    <li>
                      <Link className='' onClick={logOut} to='/'>
                        Log Out
                      </Link>
                    </li>
                  )}
                  {!isLogged && isMobile && (
                    <li>
                      <Link to='/login' className=''>
                        Login
                      </Link>
                    </li>
                  )}
                </ul>
              </div>
              <div className='link-btn'>
                {isLogged ? (
                  <Link
                    to='/'
                    className='theme-btn btn-style-one blue'
                    onClick={logOut}>
                    Log out
                  </Link>
                ) : (
                  <Link to='/login' className='theme-btn btn-style-one'>
                    Login
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
export default Header;
