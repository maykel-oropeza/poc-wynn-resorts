'use client'

import { Flex, rem, Text } from "@mantine/core"
import { Newsletter } from "./newsletter/newsletter"
import { useTranslation } from "react-i18next"
import Link from "next/link"
import { Facebook } from "../icons/facebook"
import { Android } from "../icons/android"
import { Apple } from "../icons/apple"
import { Instagram } from "../icons/instagram"
import { X } from "../icons/x"

export const Footer = () => {
    const { t } = useTranslation();
    return <Flex direction="column" maw="100vw" wrap="wrap">
        <Newsletter />
        <Flex bg="var(--mantine-color-colorRed-filled)" direction="column" justify={{ base: "flex-start", sm: "center" }} align="center" pb={rem(40)} pt={rem(20)} wrap="wrap">
            <Flex miw="auto" w={{ base: "auto", lg: 1120 }} px={{ base: rem(40), md: 0 }} maw={1120} gap="xs" wrap="wrap">
                <Flex direction="column" miw="auto" w="100%" maw={270} gap="sm" mt="md2" wrap="wrap">
                    <Text component={Link} href="/under-construction" fw="600" fz="xs" lh={rem(24)} c="white">{t("shopHome")}</Text>
                    <Text component={Link} href="/under-construction" fw="600" fz="xs" lh={rem(24)} c="white">{t("giftCards")}</Text>
                    <Text component={Link} href="/under-construction" fw="600" fz="xs" lh={rem(24)} c="white">{t("wynnStories")}</Text>
                    <Text component={Link} href="/under-construction" fw="600" fz="xs" lh={rem(24)} c="white">{t("wynnSlotApp")}</Text>
                    <Text component={Link} href="/under-construction" fw="600" fz="xs" lh={rem(24)} c="white">{t("mobileApp")}</Text>
                    <Text component={Link} href="/under-construction" fw="600" fz="xs" lh={rem(24)} c="white">{t("responsibleGaming")}</Text>
                </Flex>
                <Flex direction="column" miw="auto" w="100%" maw={270} gap="sm" mt="md2">
                    <Text component={Link} href="/under-construction" fw="600" fz="xs" lh={rem(24)} c="white">{t("aboutUs")}</Text>
                    <Text component={Link} href="/under-construction" fw="600" fz="xs" lh={rem(24)} c="white">{t("Careers")}</Text>
                    <Text component={Link} href="/under-construction" fw="600" fz="xs" lh={rem(24)} c="white">{t("wynnStories")}</Text>
                    <Text component={Link} href="/under-construction" fw="600" fz="xs" lh={rem(24)} c="white">{t("investorRelations")}</Text>
                    <Text component={Link} href="/under-construction" fw="600" fz="xs" lh={rem(24)} c="white">{t("PrivateNotice")}</Text>
                    <Text component={Link} href="/under-construction" fw="600" fz="xs" lh={rem(24)} c="white">{t("cookieNotice")}</Text>
                    <Text component={Link} href="/under-construction" fw="600" fz="xs" lh={rem(24)} c="white">{t("termsLinkText")}</Text>
                    <Text component={Link} href="/under-construction" fw="600" fz="xs" lh={rem(24)} c="white">{t("hotelInfo")}</Text>
                </Flex>
                <Flex direction="column" miw="auto" w="100%" maw={270} gap="sm" mt="md2">
                    <Text component={Link} href="/under-construction" fw="600" fz="xs" lh={rem(24)} c="white">{t("wynnPalace")}</Text>
                    <Text component={Link} href="/under-construction" fw="600" fz="xs" lh={rem(24)} c="white">{t("wynnBoston")}</Text>
                    <Text component={Link} href="/under-construction" fw="600" fz="xs" lh={rem(24)} c="white">{t("wynnMacau")}</Text>
                </Flex>
                <Flex direction="column" miw="auto" w="100%" maw={270} gap="sm" mt="md2">
                    <Text fw="600" fz="xs" lh={rem(24)} c="white">{t("wynnLasVegas")}</Text>
                    <Text fw="600" fz="xs" lh={rem(24)} c="white">{t("bussinesAddress")}</Text>
                    <Text fw="600" fz="xs" lh={rem(24)} c="white">{t("phoneNumberFooter")}</Text>
                    <Text fw="600" fz="xs" lh={rem(24)} c="white">{t("connectWithUs")}</Text>
                    <Flex c="white" gap="sm">
                        <Facebook />
                        <Android />
                        <Apple />
                        <Instagram />
                        <X />
                    </Flex>
                </Flex>
            </Flex>
            <Flex direction="column" miw="auto" justify="center" align="center" mt={rem(60)}>
                <Text fw="600" fz="xs2" lh={rem(14.4)} c="white">{t("dontSellMyData")}</Text>
                <Text fw="600" fz="xs" lh={rem(17)} c="white" mt={rem(10)}>{t("copyRight", { year: new Date().getFullYear() })}</Text>
            </Flex>
        </Flex>
    </Flex>
}