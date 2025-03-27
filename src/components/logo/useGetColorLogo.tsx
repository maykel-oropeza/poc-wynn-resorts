import { MantineColorScheme } from "@/providers/theme/theme";
import { useMantineColorScheme } from "@mantine/core";
import { useMemo } from "react";

export const color_dark = "white";
export const color_light = "#775c3d";

export const useGetColorLogo = () => {
    const { colorScheme } = useMantineColorScheme();

    const colorLogo = useMemo(() => {
        return colorScheme === MantineColorScheme.Dark ? color_dark : color_light;
    }, [colorScheme])

    return colorLogo as string;
}