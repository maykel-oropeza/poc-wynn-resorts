'use client'

import { rem, Container, Box } from "@mantine/core"
import { FormUserDetails } from "./formUserDetails/formUserDetails";
import { FormSendCode } from "./formSendCode/formSendCode";
import { FormCheckCode } from "./formCheckCode/formChekCode";
import { useRegistration } from "./registrationProvider";
import classes from './registration.module.css'
import { RegistrationHeader } from "./registrationHeader";
import { SuccessRegister } from "./successRegister/successRegister";

export const RegistrationContainer = () => {
    const { step, direction, isRegistering } = useRegistration();

    return (
        <Container size="md" pt={rem(60)} pb={rem(20)}>
            {isRegistering && <RegistrationHeader />}
            <Box className={`${classes.stepContent} ${direction}`}>
                {step === 1 && <FormUserDetails />}
                {step === 2 && <FormSendCode />}
                {step === 3 && <FormCheckCode />}
                {step === 4 && <SuccessRegister />}
            </Box>
        </Container>
    )
}