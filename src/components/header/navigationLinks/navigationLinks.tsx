import { Flex } from "@mantine/core"
import { LinkRouter } from "../linkRouter"
import { useTranslation } from "react-i18next";
import classes from './navigationLinks.module.css'

export const NavigationLinks = () => {
    const { t } = useTranslation();

    return <Flex classNames={{ root: classes.navigationLinks }}>
        <LinkRouter href="/rooms-and-suites">{t("roomAndSuites")}</LinkRouter>
        <LinkRouter href="/wynn-and-rewards">{t("wynnRewards")}</LinkRouter>
        <LinkRouter href="/offers">{t("offers")}</LinkRouter>
        <LinkRouter href="/dining">{t("dining")}</LinkRouter>
        <LinkRouter href="/entertainment">{t("entertainment")}</LinkRouter>
        <LinkRouter href="/meetings-and-events">{t("meetingsAndEvents")}</LinkRouter>
    </Flex>
}
