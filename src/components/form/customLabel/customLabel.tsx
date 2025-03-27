import { Box, Flex } from "@mantine/core";
import clasess from './customLabel.module.css';

interface CustomLabelProps {
    htmlFor?: string;
    children: React.ReactNode;
    required?: boolean;
    rightSection?: React.ReactNode;
}

export const CustomLabel = ({ children, required, rightSection, htmlFor }: CustomLabelProps) => {
    return <Flex justify="space-between" align="center">
        <label htmlFor={htmlFor} className={clasess.label}>
            <Box content="span" className={clasess.labelContent}>{children}</Box>
            {required && <Box component="span" ml="xs" c="colorBrown">*</Box>}
        </label>
        {rightSection}
    </Flex>
}