import React, { useRef } from 'react';
import ServiceHero from '../components/JSservices/Finance/FinanceHero';
import Overview from '../components/JSservices/Finance/Overview';
import HomeLoan from '../components/JSservices/Finance/HomeLoan';
import MortgageLoan from '../components/JSservices/Finance/MortgageLoan';
import BalanceTransfer from '../components/JSservices/Finance/BalanceTransfer';
import OverDraft from '../components/JSservices/Finance/OverDraft';
import CashCredit from '../components/JSservices/Finance/CashCredit';
import CGTMSE from '../components/JSservices/Finance/CGTMSE';
import MSMELoans from '../components/JSservices/Finance/MSMELoans';
import { Helmet } from 'react-helmet';

const Finance = () => {
    const homeLoanRef = useRef(null);
    const mortgageLoanRef = useRef(null);
    const balanceTransferRef = useRef(null);
    const overDraftRef = useRef(null);
    const cashCreditRef = useRef(null);
    const cgtmseRef = useRef(null);
    const msmeLoansRef = useRef(null);

    const scrollToSection = (section) => {
        let ref;
        switch (section) {
            case 'homeLoan':
                ref = homeLoanRef;
                break;
            case 'mortgageLoan':
                ref = mortgageLoanRef;
                break;
            case 'balanceTransfer':
                ref = balanceTransferRef;
                break;
            case 'overDraft':
                ref = overDraftRef;
                break;
            case 'cashCredit':
                ref = cashCreditRef;
                break;
            case 'cgtmse':
                ref = cgtmseRef;
                break;
            case 'msmeLoans':
                ref = msmeLoansRef;
                break;
            default:
                console.error('Invalid section:', section);
                return;
        }
        if (ref.current) {
            ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
            console.warn('Reference not found for section:', section);
        }
    };

    return (
        <>
            <Helmet>
                <title>Finance Services | Expert Loan Solutions</title>
                <meta name="description" content="Explore our comprehensive finance services, including home loans, mortgage loans, and more. Get expert guidance for all your financial needs." />
                <meta name="keywords" content="Finance, Loans, Home Loans, Mortgage Loans, Financial Services" />
            </Helmet>

            <header>
                <ServiceHero scrollToSection={scrollToSection} />
                <Overview />
            </header>

            <main>
                <section ref={homeLoanRef} className="my-10">
                    <HomeLoan />
                    <div className="flex justify-center">
                        <hr className="w-1/2 border-gray-300 md:my-6 my-0" />
                    </div>
                </section>

                <section ref={mortgageLoanRef} className="my-10">
                    <MortgageLoan />
                    <div className="flex justify-center">
                        <hr className="w-1/2 border-gray-300 md:my-6 my-0" />
                    </div>
                </section>

                <section ref={balanceTransferRef} className="my-10">
                    <BalanceTransfer />
                    <div className="flex justify-center">
                        <hr className="w-1/2 border-gray-300 md:my-6 my-0" />
                    </div>
                </section>

                <section ref={overDraftRef} className="my-10">
                    <OverDraft />
                    <div className="flex justify-center">
                        <hr className="w-1/2 border-gray-300 md:my-6 my-0" />
                    </div>
                </section>

                <section ref={cashCreditRef} className="my-10">
                    <CashCredit />
                    <div className="flex justify-center">
                        <hr className="w-1/2 border-gray-300 md:my-6 my-0" />
                    </div>
                </section>

                <section ref={cgtmseRef} className="my-10">
                    <CGTMSE />
                    <div className="flex justify-center">
                        <hr className="w-1/2 border-gray-300 md:my-6 my-0" />
                    </div>
                </section>

                <section ref={msmeLoansRef} className="my-10">
                    <MSMELoans />
                    <div className="flex justify-center">
                        <hr className="w-1/2 border-gray-300 md:my-6 my-0" />
                    </div>
                </section>
            </main>
        </>
    );
};

export default Finance;
