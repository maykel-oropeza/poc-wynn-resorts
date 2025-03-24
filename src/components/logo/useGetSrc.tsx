import { MantineColorScheme } from "@/providers/theme/theme";
import { useMantineColorScheme } from "@mantine/core";
import { useMemo } from "react";

export const logo_dark = "/images/logo_dark.svg";
export const logo_light = "/images/logo_light.svg";

export const useGetSrc = () => {
    const { colorScheme } = useMantineColorScheme();

    const logoSrc = useMemo(() => {
        return colorScheme === MantineColorScheme.Dark ? logo_dark : logo_light;
    }, [colorScheme])

    return logoSrc;
}