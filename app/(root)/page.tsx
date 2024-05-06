import TotalBalanceBox from '@/components/TotalBalanceBox';
import HeaderBox from '@/components/ui/HeaderBox';
import React from 'react'

const Home = () => {
  const LoggedIn = {firstName : ' Priyansh '};

  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header '>
          <HeaderBox 
            type='greeting'
            title="Welcome"
            user={LoggedIn ?.firstName || "Guest"}
            subtext= "Access and Manage your account and Transaction"
          />
          <TotalBalanceBox 
            accounts={[]} 
            totalBanks={1}
            totalCurrentBalance={12050.20}
          />
        </header>
      </div>
    </section>
  )
}

export default Home;