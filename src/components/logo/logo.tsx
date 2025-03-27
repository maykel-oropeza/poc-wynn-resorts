'use client'

import { Flex } from "@mantine/core"
import { useGetSizes } from "./useGetSizes";
import { useGetColorLogo } from "./useGetColorLogo";
import Link from "next/link";
import dynamic from "next/dynamic";

const LogoSvg = dynamic(() => import("./logoSvg"), { ssr: false })

export const Logo = () => {

    const { height, width } = useGetSizes();
    const colorLogo = useGetColorLogo();

    return <Flex p="0" m="0" h={height} justify="center" align="center">
        <Link href="/">
            <LogoSvg
                suppressHydrationWarning
                width={`${width}px`}
                height={`${height}px`}
                colorLogo={colorLogo}
            />
        </Link>
    </Flex>
}