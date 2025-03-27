'use client'

import { Flex } from "@mantine/core"
import { useGetSizes } from "./useGetSizes";
import { useGetSrc } from "./useGetSrc";
import Image from "next/image";
import Link from "next/link";

export const Logo = () => {

    const { height, width } = useGetSizes();
    const logoSrc = useGetSrc();

    return <Flex p="0" m="0" h={height} justify="center" align="center">
        <Link href="/">
            <Image
                alt="Wynn Resorts"
                width={width}
                height={height}
                src={logoSrc}
                priority
                unoptimized
            />
        </Link>
    </Flex>
}