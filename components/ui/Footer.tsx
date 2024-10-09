import React from 'react';
import Image from 'next/image';
import { logoutAccount } from '@/lib/actions/user.actions';
import { useRouter } from 'next/navigation';

const Footer = ({ user , type = "desktop" } : FooterProps ) => {

    const router = useRouter();

    const handleLogOut = async () => {
        const LoggedOut = await logoutAccount();

        if(LoggedOut) router.push('/sign-inc')

    }
  return (
    <footer className='footer'>
        <div className={type === 'mobile' 
            ? "footer_name-mobile" :"footer_name"}>
            <p className='text-xl font-bold text-gray-700'>
                {user?.name[0]}
            </p>

        </div>
        <div className={type === 'mobile' 
            ? "footer_email-mobile" :"footer_email"}>
                <h1 className='text-14px truncate font-semibold text-gray-700'>{user?.name}</h1>
                <h2 className='text-14px truncate font-normal text-gray-600'>{user?.email}</h2>
        </div>

        <div className='footer_image' onClick={handleLogOut}>
            <Image src= "/icons/logout.svg" alt= "logout"  fill/>
        </div>

    </footer>
  )
}

export default Footer