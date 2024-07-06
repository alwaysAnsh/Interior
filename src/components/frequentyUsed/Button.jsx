import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ label = 'Contact', path }) => {
  const handleClick = () => {
    if (label === 'Contact') {
      window.open('https://wa.me/7617231365', '_blank');
      console.log("working");
    }
  };

  return (
    <div className='overflow-hidden text-left w-full z-10'>
      {label === 'Contact' ? (
        <button className="cta" onClick={handleClick}>
          <span>{label}</span>
          <svg width="15px" height="30px" viewBox="0 0 13 10">
            {/* <path d="M1,5 L11,5"></path>
            <polyline points="8 1 12 5 8 9"></polyline> */}
          </svg>
        </button>
      ) : (
        <Link to={path}>
          <button className="cta">
            <span>{label}</span>
            <svg width="15px" height="30px" viewBox="0 0 13 10">
              {/* <path d="M1,5 L11,5"></path>
              <polyline points="8 1 12 5 8 9"></polyline> */}
            </svg>
          </button>
        </Link>
      )}
    </div>
  );
};

export default Button;
















// import React from 'react'
// import '../../App.css'
// const Button = ({label = 'Contact'}) => {
//   return (
//     <div className='overflow-hidden text-left w-full' >
//                 <button className="cta">
//           <span>{label}</span>
//           <svg width="15px" height="30px" viewBox="0 0 13 10">
//             {/* <path d="M1,5 L11,5"></path>
//             <polyline points="8 1 12 5 8 9"></polyline> */}
//           </svg>
//         </button>
// </div> 
//   )
// }

// export default Button