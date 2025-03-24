import { useMediaQuery } from "@mantine/hooks";
import { useMemo } from "react";

export const MOBILE_MEDIA_QUERY = `(max-width: 30rem)`;
export const XS_HEIGHT = 58;
export const DEFAULT_HEIGHT = 78;
export const XS_WIDTH = 120;
export const DEFAULT_WIDTH = 161;

export const useGetSizes = () => {
    const isXs = useMediaQuery(MOBILE_MEDIA_QUERY);

    const sizes = useMemo(() => {
        const height = isXs ? XS_HEIGHT : DEFAULT_HEIGHT;
        const width = isXs ? XS_WIDTH : DEFAULT_WIDTH;
        return { height, width };
    }, [isXs]);

    return sizes;
}