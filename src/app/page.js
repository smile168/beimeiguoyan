// 'use client';
// import { useEffect, useState } from 'react';
// import MobileHome from '../app/mobile/page';

export default function Home(props) {
  // const [isMobile, setIsMobile] = useState(false);

  // useEffect(() => {
  //   const userAgent = window.navigator.userAgent;
  //   const mobileRegex =
  //     /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
  //   setIsMobile(mobileRegex.test(userAgent));
  // });
  // return <>{!isMobile ? <p>Desktop Home Page</p> : <MobileHome />}</>;
  return <p className='text-blue-600'>hello from home page</p>;
}
