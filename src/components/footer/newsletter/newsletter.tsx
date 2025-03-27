'use client'

import { Box, Button, Flex, rem, Text, TextInput, Title } from "@mantine/core"
import { useTranslation } from "react-i18next"
import classes from "./newsletter.module.css"

export const Newsletter = () => {

    const { t } = useTranslation();

    return (
        <Flex direction={{ base: "column", xs: "row" }} justify="center" bg="bgFooter" p={0}>
            <Flex direction={{ base: "column", lg: "row" }} w={{ base: "100%", lg: "unset" }} miw="auto" maw={1300} align="center" wrap="wrap">
                <Box miw="auto" w={{ base: "auto", xl: 330 }} maw={330}>
                    <Title order={4} pb="md" pt="lg" pr="xl">{t("getNewsUpdates")}</Title>
                </Box>
                <Flex miw="auto" w={{ base: "auto", xl: 440 }} maw={440} wrap="wrap" my={rem(20)}>
                    <Text miw="auto" w={{ base: "auto", sm: 369 }} ta={{ base: "center", lg: "left" }} maw={369} fw="600" fz="lg" c="customGrayMuted">{t("getLatestInfo")}</Text>
                </Flex>
                <Box miw="auto" w={{ base: "100%", sm: 650 }} maw={{ base: "100%", sm: 650, lg: 530 }} my={rem(20)} px={{ base: rem(20), md: 0 }}>
                    <TextInput
                        placeholder={t("yourEmailAddress")}
                        classNames={{
                            input: classes.inputNewsletter,
                            section: classes.inputNewsletterSection
                        }}
                        rightSection={
                            <Button classNames={{
                                root: classes.buttonNewsletterRoot,
                            }} size="3xl" variant="outline">{t("joinNewsletter")}</Button>
                        }
                    />
                </Box>
            </Flex>
        </Flex>
    )
}