'use client'

import { SendCodeMethod } from '@/types/otp';
import { UserDetails } from '@/types/user';
import React, { createContext, useState, useContext, ReactNode, useMemo } from 'react';

// Step context types
interface RegistrationType {
    isRegistering: boolean,
    step: number;
    direction: 'forward' | 'backward';
    nextStep: () => void;
    prevStep: () => void;
    userDetails?: UserDetails;
    setUserDetails: (user: UserDetails) => void;
    sentCodeMethod?: SendCodeMethod;
    setSentCodeMethod: (method: SendCodeMethod) => void;
}

const totalStep = 4;

// Initial context value
const defaultContextValue: RegistrationType = {
    isRegistering: true,
    step: 1,
    direction: 'forward',
    nextStep: () => { },
    prevStep: () => { },
    setUserDetails: () => { },
    setSentCodeMethod: () => { }
};

// Create the context
const Registration = createContext<RegistrationType>(defaultContextValue);

// Provider component
interface StepProviderProps {
    children: ReactNode;
}

export const RegistrationProvider: React.FC<StepProviderProps> = ({ children }) => {

    const [step, setStep] = useState<number>(defaultContextValue.step);
    const [userDetails, setUserDetails] = useState<UserDetails>();

    const [sentCodeMethod, setSentCodeMethod] = useState<SendCodeMethod>("email");
    const [direction, setDirection] = useState<'forward' | 'backward'>('forward');

    const isRegistering = useMemo(() => step < totalStep, [step]);

    const nextStep = () => {
        if (isRegistering) {
            setDirection('forward');
            setStep(step + 1);
        }
    };

    const prevStep = () => {
        if (step > 1) {
            setDirection('backward');
            setStep(step - 1);
        }
    };

    const providerStore = {
        isRegistering,
        step,
        direction,
        nextStep,
        prevStep,
        userDetails,
        setUserDetails,
        sentCodeMethod,
        setSentCodeMethod
    }

    return (
        <Registration.Provider value={providerStore}>
            {children}
        </Registration.Provider>
    );
};

export const useRegistration = (): RegistrationType => useContext(Registration);