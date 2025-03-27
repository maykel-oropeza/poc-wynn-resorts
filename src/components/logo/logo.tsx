'use client'

import { Flex, useMantineColorScheme } from "@mantine/core"
import { useGetSizes } from "./useGetSizes";
import { useGetSrc } from "./useGetSrc";
import Link from "next/link";
import { LogoSvg } from "./logoSvg";

export const Logo = () => {

    const { height, width } = useGetSizes();
    const logoSrc = useGetSrc();
    const { colorScheme } = useMantineColorScheme();

    return <Flex p="0" m="0" h={height} justify="center" align="center">
        <Link href="/">
            <LogoSvg
                width={`${width}px`}
                height={`${height}px`}
                colorLogo={colorScheme === "light" ? "#775c3d" : "white"}
            />
        </Link>
    </Flex>
}