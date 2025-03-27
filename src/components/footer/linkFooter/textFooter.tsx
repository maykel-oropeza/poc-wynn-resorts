import { rem, Text, TextProps } from "@mantine/core"
import classes from "./linkFooter.module.css"

interface TextFooterProps extends TextProps {
    children: React.ReactNode;
    href?: string;
}

export const TextFooter = ({ children, ...textProps }: TextFooterProps) => {
    return (
        <Text
            classNames={{ root: classes.root }}
            fw="600"
            fz="xs"
            lh={rem(24)}
            {...textProps}
        >
            {children}
        </Text>
    )
}