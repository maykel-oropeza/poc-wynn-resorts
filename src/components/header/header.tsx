'use client'

import { Burger, Flex, Grid } from "@mantine/core"
import { LanguageSelector } from "../languageSelector"
import { NavigationLinks } from "./navigationLinks/navigationLinks"
import { useDisclosure } from "@mantine/hooks"
import { Logo } from "../logo"
import classes from './header.module.css'

export const Header = () => {
    const [openMenuMobile, { toggle }] = useDisclosure();

    return <Flex direction="column" bg="bgSecondary" p={0}>
        <Grid justify="space-between" align="center" p={0} gutter={0}>
            <Grid.Col span="content" p={0}>
                <Flex classNames={{ root: classes.logoContainer }}>
                    <Logo />
                </Flex>
            </Grid.Col>
            <Grid.Col span="auto" visibleFrom="lg">
                <NavigationLinks />
            </Grid.Col>
            <Grid.Col span="content" p={0}>
                <Flex classNames={{ root: classes.languageContainer }}>
                    <LanguageSelector />
                    <Burger hiddenFrom="lg" size="md" opened={openMenuMobile} onClick={toggle} aria-label="Close" />
                </Flex>
            </Grid.Col>
        </Grid>
        {
            openMenuMobile &&
            <Flex classNames={{ root: classes.containerMobile }}>
                <NavigationLinks />
            </Flex>
        }
    </Flex>


}