import { rem, Text, TextProps } from "@mantine/core"
import Link from "next/link"
import classes from "./linkFooter.module.css"

interface LinkFooterProps extends TextProps {
    children: React.ReactNode;
    href?: string;
}

export const LinkFooter = ({ href, children, ...textProps }: LinkFooterProps) => {
    return (
        <Text
            classNames={{ root: classes.root }}
            component={Link}
            href="/under-construction"
            fw="600"
            fz="xs"
            lh={rem(24)}
            {...textProps}
        >
            {children}
        </Text>
    )
}