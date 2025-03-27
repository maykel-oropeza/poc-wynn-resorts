import { PinInputProps, PinInput } from "@mantine/core"
import classes from "./formPinInput.module.css"

export const FormPinInput = (props: PinInputProps) => {
    return (
        <PinInput
            classNames={{ root: classes.root, input: classes.input, pinInput: classes.pinInput }}
            gap="sm"
            {...props}
        />
    )
}