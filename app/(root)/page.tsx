import TotalBalanceBox from '@/components/ui/TotalBalanceBox';
import HeaderBox from '@/components/ui/HeaderBox';
import React from 'react'
import RightSideBar from '@/components/ui/RightSideBar';
import { getLoggedInUser } from '@/lib/actions/user.actions';

const Home = async() => {
  const LoggedIn = await getLoggedInUser();

  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header '>
          <HeaderBox 
            type='greeting'
            title="Welcome "
            user={LoggedIn ?.name || "Guest"}
            subtext= "Access and Manage your account and Transaction"
          />
          <TotalBalanceBox 
            accounts={[]} 
            totalBanks={1}
            totalCurrentBalance={12050.20}
          />
        </header>

          RECENT TRANSITION
      </div>
      
      <RightSideBar 
        user = {LoggedIn}
        transactions = {[]}
        banks = {[{currentBalance: 3403.2}, {currentBalance : 244}]}
      />
    </section>
  )
}

export default Home;