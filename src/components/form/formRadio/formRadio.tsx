import { Radio, RadioProps, rem, Text } from "@mantine/core"
import classes from "./formRadio.module.css"

interface FormRadioProps extends RadioProps {
    labelContent: React.ReactNode;
}

export const FormRadio = (props: FormRadioProps) => {
    const { labelContent, ...restProps } = props;
    return (
        <Radio
            classNames={{ radio: classes.radio, icon: classes.icon }}
            label={<Text fw="600" lts={rem(0.5)} fz="lg">{labelContent}</Text>}
            name="sendToPhone"
            value="check"
            {...restProps}
        />
    )
}