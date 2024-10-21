import React from 'react';
import ServiceHeroImg from '../../assets/Services/ServiceHero.png';

function ServiceHero({ scrollToSection }) {
  return (
    <div className='w-full flex flex-col justify-center items-center'>
      <h1 className='pt-20 text-5xl heading-font text-[rgb(255,102,0)]'>Finance</h1>
      <div className='w-5/6 h-5/6'>
        <img src={ServiceHeroImg} alt="Finance Services" className='w-full h-1/2 object-cover' />
        <div className='flex justify-center items-center flex-wrap mt-4'>
          <a 
            onClick={() => scrollToSection('homeLoan')} 
            className='px-4 py-2 bg-orange-400 text-black text-sm mx-2 hover:text-zinc-100 hover:bg-orange-500 rounded-full cursor-pointer'
            aria-label="Home Loan"
          >
            Home Loan
          </a>
          <a 
            onClick={() => scrollToSection('mortgageLoan')} 
            className='px-4 py-2 bg-orange-400 text-black text-sm mx-2 hover:text-zinc-100 hover:bg-orange-500 rounded-full cursor-pointer'
            aria-label="Mortgage Loan"
          >
            Mortgage Loan
          </a>
          <a 
            onClick={() => scrollToSection('balanceTransfer')} 
            className='px-4 py-2 bg-orange-400 text-black text-sm mx-2 hover:text-zinc-100 hover:bg-orange-500 rounded-full cursor-pointer'
            aria-label="Balance Transfer"
          >
            Balance Transfer
          </a>
          <a 
            onClick={() => scrollToSection('overDraft')} 
            className='px-4 py-2 bg-orange-400 text-black text-sm mx-2 hover:text-zinc-100 hover:bg-orange-500 rounded-full cursor-pointer'
            aria-label="Over Draft"
          >
            Over Draft
          </a>
          <a 
            onClick={() => scrollToSection('cashCredit')} 
            className='px-4 py-2 bg-orange-400 text-black text-sm mx-2 hover:text-zinc-100 hover:bg-orange-500 rounded-full cursor-pointer'
            aria-label="Cash Credit"
          >
            Cash Credit
          </a>
          <a 
            onClick={() => scrollToSection('cgtmse')} 
            className='px-4 py-2 bg-orange-400 text-black text-sm mx-2 hover:text-zinc-100 hover:bg-orange-500 rounded-full cursor-pointer'
            aria-label="CGTMSE"
          >
            CGTMSE
          </a>
          <a 
            onClick={() => scrollToSection('msmeLoans')} 
            className='px-4 py-2 bg-orange-400 text-black text-sm mx-2 hover:text-zinc-100 hover:bg-orange-500 rounded-full cursor-pointer'
            aria-label="MSME Loans"
          >
            MSME Loans
          </a>
        </div>
      </div>
    </div>
  );
}

export default ServiceHero;
