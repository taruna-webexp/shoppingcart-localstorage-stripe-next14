import { useRouter } from 'next/navigation';
import { protectedRoutes, unprotectedRoutes } from './routes/routes';
import { useEffect } from 'react';
import Toaster from './utility/toaster';

const Protector = ({ children }) => {
  const router = useRouter();

    const loginData = localStorage.getItem("loginData");

    if (loginData && protectedRoutes.includes(router.pathname)) {
      router.push('/filterapi');
    }
     else if (!loginData && unprotectedRoutes.includes(router.pathname))  {
      router.push('/');
    }
  return (
    <>
      {children}
    </>
  )
}

export default Protector    