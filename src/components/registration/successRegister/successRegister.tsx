'use client'

import { Flex, rem, Title } from "@mantine/core"
import { useTranslation } from "react-i18next";

export const SuccessRegister = () => {
    const { t } = useTranslation();
    return (
        <Flex direction={{ base: "column" }} justify="center" align="center" mb={rem(140)} mt={100}>
            <Title order={1} mt="lg" ta="center">{t("userRegisteredSuccessfully")}</Title>
            <Title order={2} ta="center" mt="xl">{t("userRegisteredSuccessfullySubLabel")}</Title>
        </Flex>
    )
}