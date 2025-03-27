'use client'

import { RegistrationContainer } from "./registrationContainer";
import { RegistrationProvider } from "./registrationProvider";

export const Registration = () => {
    return (
        <RegistrationProvider>
            <RegistrationContainer />
        </RegistrationProvider>
    )
}