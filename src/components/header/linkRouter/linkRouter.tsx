import { rem, Text } from "@mantine/core"
import Link from "next/link"
import { useParams } from "next/navigation"

interface LinkRouterProps {
    children: React.ReactNode
    href: string
}

export const LinkRouter = ({ children, href }: LinkRouterProps) => {
    const params = useParams();

    return <Text fz={{ base: rem(12), md: rem(13), xl: rem(14) }} fw={600} lh={rem(17)} lts={rem(0.5)}>
        <Link href={`/${params.locale}${href}`} style={{ color: 'inherit', textDecoration: "none" }}>
            {children}
        </Link>
    </Text>
}