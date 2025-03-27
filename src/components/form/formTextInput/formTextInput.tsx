import { TextInput, TextInputProps } from "@mantine/core"
import classes from './formTextInput.module.css'
import { CustomLabel } from "../customLabel/customLabel"
import { useId } from "react";

interface FormTextInputProps extends TextInputProps {
    inputRequired?: boolean;
    labelText?: React.ReactNode;
    infoElement?: React.ReactNode;
}

export const FormTextInput = ({ inputRequired, labelText, infoElement, ...restProps }: FormTextInputProps) => {
    const id = useId();
    return <TextInput
        id={id}
        size="xl"
        classNames={{
            root: classes.textInput,
            label: classes.customLabel,
            input: classes.customInput,
            error: classes.customError
        }}
        label={
            <CustomLabel
                htmlFor={id}
                required={inputRequired}
                {...infoElement && { rightSection: infoElement }}
            >
                {labelText}
            </CustomLabel>
        }
        labelProps={{ labelElement: 'div' }}
        {...restProps}
    />
}       