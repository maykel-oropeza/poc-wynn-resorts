'use client'

import { FormPinInput } from "@/components/form/formPinInput/formPinInput";
import { TitleSection } from "@/components/form/titleSection/titleSection";
import { Flex, rem, Text, Title, Button } from "@mantine/core"
import { useForm } from "@mantine/form";
import { useTranslation } from "react-i18next";
import { useRegistration } from "../registrationProvider";
import { useOtpCheckCode } from "@/services/useOtpCheckCode";
import { useRegisterUser } from "@/services/useRegisterUser";


export const FormCheckCode = () => {
    const { t } = useTranslation();

    const { nextStep, prevStep, userDetails, sentCodeMethod } = useRegistration();
    const { checkCode, isPending: isCheckinCode } = useOtpCheckCode();
    const { registerUser, isPending: isRegisteringUser } = useRegisterUser();

    const form = useForm({
        mode: 'uncontrolled',
        initialValues: {
            code: '',
        },
        validate: {
            code: (value) => value.length > 3 ? null : "Please enter a valid code"
        }
    });

    const handleResendCode = () => {
        // TODO handle Resend Code
    }

    const handlePrevStep = () => {
        prevStep();
    }

    const handleNextStep = () => {
        if (userDetails) {
            registerUser(userDetails).then(() => {
                nextStep();
            });
        }

    }

    const showError = () => {

    }

    const completeRegister = () => {
        const validation = form.validate();
        if (!validation.hasErrors) {
            const code = parseInt(form.getValues().code, 10);
            checkCode({ code })
                .then(handleNextStep)
                .catch(showError);
        }
    }

    return (
        <Flex direction="column" w="100%">
            <TitleSection>{t("otpVerification")}</TitleSection>
            <Flex direction="column" mt="xl" bg="bgTertiary" justify="center" align="center" p={{ base: "md", sm: "lg" }}>
                <Title mb="md" lh={rem(30)} order={2}>{t("pleaseCheckYourEmail", { phoneOrEmail: sentCodeMethod === "email" ? t("checkEmail") : t("checkPhone") })}</Title>
                <Text mb={rem(20)} c="customGrayBlue" fw="400" lts="0" fz="lg" lh={rem(20)} ta="center" >
                    {t("codeSentTo", { phoneOrEmail: sentCodeMethod === "email" ? userDetails?.email : userDetails?.phoneNumber })}
                </Text>
                <Flex justify="center" align="center" mb={rem(18)}>
                    <FormPinInput
                        type="number"
                        key={form.key("code")}
                        {...form.getInputProps("code")}
                    />
                </Flex>
                <Flex direction={{ base: "column", xs2: "row" }} justify="center" align="center" gap="xs">
                    <Text c="customGrayBlue" fw="600" lts="0" fz="lg">
                        {t("didNotGetCode")}
                    </Text>
                    <Text onClick={handleResendCode} c="customGrayBlue" fw="600" lts="0" fz="lg" td="underline" style={{ cursor: "pointer" }} >
                        {t("clickToResend")}
                    </Text>
                </Flex>
            </Flex>
            <Flex gap="lg" mt={rem(40)} w="100%">
                <Button w="100%" size="4xl" mb="xs" variant="outline" onClick={handlePrevStep}>
                    <Text fz="lg" lh={rem(24)} lts={rem(1)} fw="600">{t("back")}</Text>
                </Button>
                <Button w="100%" size="4xl" mb="xs" variant="filled" onClick={completeRegister} loading={isCheckinCode || isRegisteringUser}>
                    <Text fz="lg" lh={rem(24)} lts={rem(1)} fw="600">{t("next")}</Text>
                </Button>
            </Flex>
        </Flex>
    )
}