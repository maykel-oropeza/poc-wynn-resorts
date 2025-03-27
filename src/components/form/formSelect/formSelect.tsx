import { Select, SelectProps } from "@mantine/core"
import classes from './formSelect.module.css'
import { CustomLabel } from "../customLabel/customLabel"
import { SelectChevronDown } from "@/components/icons/selectChevronDown";
import { useId } from "react";

interface FormSelectProps extends SelectProps {
    inputRequired?: boolean;
    labelText?: React.ReactNode;
    infoElement?: React.ReactNode;
}

export const FormSelect = ({ inputRequired, labelText, infoElement, ...restProps }: FormSelectProps) => {
    const id = useId();

    return <Select
        id={id}
        size="xl"
        w="100%"
        withCheckIcon={false}
        classNames={{ root: classes.select, label: classes.customLabel, error: classes.customError }}
        labelProps={{ labelElement: 'div' }}
        label={
            <CustomLabel
                htmlFor={id}
                required={inputRequired}
                {...infoElement && { rightSection: infoElement }}
            >
                {labelText}
            </CustomLabel>
        }
        rightSection={< SelectChevronDown color="var(--mantine-color-text)" />}
        comboboxProps={{ size: "md" }}
        {...restProps}
    />
}