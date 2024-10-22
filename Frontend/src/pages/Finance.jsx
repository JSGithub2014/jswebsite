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
                return;
        }
        if (ref.current) {
            ref.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <ServiceHero scrollToSection={scrollToSection} />
            <Overview />

            <div className="my-10">
                <div ref={homeLoanRef}><HomeLoan /></div>
                <div className="flex justify-center">
                    <hr className="w-1/2 border-gray-300 my-6" />
                </div>
            </div>

            <div className="my-10">
                <div ref={mortgageLoanRef}><MortgageLoan /></div>
                <div className="flex justify-center">
                    <hr className="w-1/2 border-gray-300 my-6" />
                </div>
            </div>

            <div className="my-10">
                <div ref={balanceTransferRef}><BalanceTransfer /></div>
                <div className="flex justify-center">
                    <hr className="w-1/2 border-gray-300 my-6" />
                </div>
            </div>

            <div className="my-10">
                <div ref={overDraftRef}><OverDraft /></div>
                <div className="flex justify-center">
                    <hr className="w-1/2 border-gray-300 my-6" />
                </div>
            </div>

            <div className="my-10">
                <div ref={cashCreditRef}><CashCredit /></div>
                <div className="flex justify-center">
                    <hr className="w-1/2 border-gray-300 my-6" />
                </div>
            </div>

            <div className="my-10">
                <div ref={cgtmseRef}><CGTMSE /></div>
                <div className="flex justify-center">
                    <hr className="w-1/2 border-gray-300 my-6" />
                </div>
            </div>

            <div className="my-10">
                <div ref={msmeLoansRef}><MSMELoans /></div>
                <div className="flex justify-center">
                    <hr className="w-1/2 border-gray-300 my-6" />
                </div>
            </div>
        </>
    );
};

export default Finance;
