'use client'

import { FormRadio } from "@/components/form/formRadio/formRadio";
import { TitleSection } from "@/components/form/titleSection/titleSection";
import { Flex, rem, Text, Title, Box, Button, Radio } from "@mantine/core"
import { useTranslation } from "react-i18next";
import { useRegistration } from "../registrationProvider";
import { SendCodeMethod } from "@/types/otp";
import { useOtpRequestCode } from "@/services/useOtpRequestCode";

export const FormSendCode = () => {
    const { t } = useTranslation();
    const { nextStep, prevStep, userDetails, setSentCodeMethod, sentCodeMethod } = useRegistration();
    const { requestCode, isPending } = useOtpRequestCode();

    const handlePrevStep = () => {
        prevStep();
    }

    const handleNextStep = () => {
        const methodMap = {
            email: userDetails?.email,
            phone: userDetails?.phoneNumber,
        };

        const data = methodMap[sentCodeMethod as keyof typeof methodMap];

        if (data) {
            requestCode({
                method: sentCodeMethod!,
                data,
            }).then(() => {
                nextStep();
            });
        }
    }

    const handleOnChangeSendMethod = (value: string) => {
        setSentCodeMethod(value as SendCodeMethod)
    }

    return (
        <Flex direction="column" w="100%">
            <TitleSection>{t("otpVerification")}</TitleSection>
            <Flex direction="column" mt="xl" bg="bgTertiary" justify="center" align="center" p="lg">
                <Title mb="md" order={2}>{t("sendCode")}</Title>
                <Text mb={rem(20)} c="customGrayBlue" fw="600" lts="0" fz="lg" ta="center">{t("receiveMethodQuestion")}</Text>
                <Radio.Group value={sentCodeMethod} onChange={handleOnChangeSendMethod}>
                    <Flex direction={{ base: "column", sm: "row" }} justify="center" align="center" gap={rem(20)} mih={rem(74)}>
                        <Box w={rem(200)} px="md">
                            <FormRadio labelContent={t("sendToPhone")} value="phone" />
                        </Box>
                        <Box w={rem(200)} px="md">
                            <FormRadio labelContent={t("sendToEmail")} value="email" />
                        </Box>
                    </Flex>
                </Radio.Group>
            </Flex>
            <Flex gap="lg" mt={rem(40)} w="100%">
                <Button w="100%" size="4xl" mb="xs" variant="outline" onClick={handlePrevStep}>
                    <Text fz="lg" lh={rem(24)} lts={rem(1)} fw="600">{t("back")}</Text>
                </Button>
                <Button w="100%" size="4xl" mb="xs" variant="filled" onClick={handleNextStep} loading={isPending}>
                    <Text fz="lg" lh={rem(24)} lts={rem(1)} fw="600">{t("next")}</Text>
                </Button>
            </Flex>
        </Flex>
    )
}