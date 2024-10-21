import React, { useRef } from 'react';
import ServiceHero from '../components/JSservices/ServiceHero';
import Overview from '../components/JSservices/Overview';
import HomeLoan from '../components/JSservices/HomeLoan';

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
            <div ref={homeLoanRef}><HomeLoan /></div>
        </>
    );
};

export default Finance;
