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
import classes from "./footer.module.css"
import { LinkFooter } from "./linkFooter/linkFooter"
import { TextFooter } from "./linkFooter/textFooter"

export const Footer = () => {
    const { t } = useTranslation();

    return <Flex direction="column" maw="100vw" wrap="wrap">
        <Newsletter />
        <Flex bg="bgBrown" direction="column" justify={{ base: "flex-start", sm: "center" }} align="center" pb={rem(40)} pt={rem(20)} wrap="wrap">
            <Flex miw="auto" w={{ base: "auto", lg: 1120 }} px={{ base: rem(40), md: 0 }} maw={1120} gap="xs" wrap="wrap">
                <Flex direction="column" miw="auto" w="100%" maw={270} gap="sm" mt="md2" wrap="wrap">
                    <LinkFooter href="/under-construction">{t("shopHome")}</LinkFooter>
                    <LinkFooter href="/under-construction">{t("giftCards")}</LinkFooter>
                    <LinkFooter href="/under-construction">{t("wynnStories")}</LinkFooter>
                    <LinkFooter href="/under-construction">{t("wynnSlotApp")}</LinkFooter>
                    <LinkFooter href="/under-construction">{t("mobileApp")}</LinkFooter>
                    <LinkFooter href="/under-construction">{t("responsibleGaming")}</LinkFooter>
                </Flex>
                <Flex direction="column" miw="auto" w="100%" maw={270} gap="sm" mt="md2">
                    <LinkFooter href="/under-construction">{t("aboutUs")}</LinkFooter>
                    <LinkFooter href="/under-construction">{t("Careers")}</LinkFooter>
                    <LinkFooter href="/under-construction">{t("wynnStories")}</LinkFooter>
                    <LinkFooter href="/under-construction">{t("investorRelations")}</LinkFooter>
                    <LinkFooter href="/under-construction">{t("PrivateNotice")}</LinkFooter>
                    <LinkFooter href="/under-construction">{t("cookieNotice")}</LinkFooter>
                    <LinkFooter href="/under-construction">{t("termsLinkText")}</LinkFooter>
                    <LinkFooter href="/under-construction">{t("hotelInfo")}</LinkFooter>
                </Flex>
                <Flex direction="column" miw="auto" w="100%" maw={270} gap="sm" mt="md2">
                    <LinkFooter href="/under-construction">{t("wynnPalace")}</LinkFooter>
                    <LinkFooter href="/under-construction">{t("wynnBoston")}</LinkFooter>
                    <LinkFooter href="/under-construction">{t("wynnMacau")}</LinkFooter>
                </Flex>
                <Flex direction="column" miw="auto" w="100%" maw={270} gap="sm" mt="md2">
                    <TextFooter>{t("wynnLasVegas")}</TextFooter>
                    <TextFooter>{t("bussinesAddress")}</TextFooter>
                    <TextFooter>{t("phoneNumberFooter")}</TextFooter>
                    <TextFooter>{t("connectWithUs")}</TextFooter>
                    <Flex c="footerColor" gap="sm">
                        <Facebook />
                        <Android />
                        <Apple />
                        <Instagram />
                        <X />
                    </Flex>
                </Flex>
            </Flex>
            <Flex direction="column" miw="auto" justify="center" align="center" mt={rem(60)}>
                <TextFooter lh={rem(14.4)}>{t("dontSellMyData")}</TextFooter>
                <TextFooter lh={rem(17)} mt={rem(10)}>{t("copyRight", { year: new Date().getFullYear() })}</TextFooter>
            </Flex>
        </Flex>
    </Flex>
}