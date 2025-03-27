'use client'

import { Flex, rem, Title } from "@mantine/core"
import { useTranslation } from "react-i18next";

export const UnderConstruction = ({ keyTranslationTitle }: { keyTranslationTitle: string }) => {
    const { t } = useTranslation();
    return (
        <Flex direction={{ base: "column" }} justify="center" align="center" pb={rem(200)} mt={200}>
            <Title order={1} mt="lg" ta="center">{t(keyTranslationTitle)}</Title>
            <Title order={2} ta="center" mt="xl">{t("sectionUnderConstruction")}</Title>
        </Flex>
    )
}