import { Title, TitleProps } from "@mantine/core"
import classes from './titleSection.module.css'

export const TitleSection = ({ children, ...restProps }: TitleProps) => {
    return <Title
        classNames={{ root: classes.titleSection }}
        order={3}
        {...restProps}>
        {children}
    </Title>
}