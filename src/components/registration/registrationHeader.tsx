'use client'

import { Flex, rem, Text, Title } from "@mantine/core"
import { useTranslation } from "react-i18next";
import { useRegistration } from "./registrationProvider";

export const RegistrationHeader = () => {
    const { t } = useTranslation();
    const { step } = useRegistration();

    return (
        <>
            <Flex direction={{ base: "column", xs2: "row" }} justify="space-between" align="center" mb={rem(24)}>
                <Title order={1}>{t("registration")}</Title>
                <Title order={2}>{t("steps", { current: step, total: '3' })}</Title>
            </Flex>
            <Text mb={rem(40)} ta={{ base: "center", xs2: "left" }}>{t("enterYourInformation")}</Text>
        </>
    )
}