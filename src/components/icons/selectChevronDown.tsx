interface SelectChevronDownProps extends React.ComponentPropsWithoutRef<'svg'> {
    size?: number | string;
}

export function SelectChevronDown({ size, style, ...others }: SelectChevronDownProps) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 16 17"
            style={{ width: size || 16, height: size || 17, ...style }}
            {...others}
        >
            <path d="M3.20041 6.55729C3.48226 6.25376 3.95681 6.23618 4.26034 6.51804L8 10.0441L11.7397 6.51804C12.0432 6.23618 12.5177 6.25376 12.7996 6.55729C13.0815 6.86082 13.0639 7.33537 12.7603 7.61723L8.51034 11.6172C8.22258 11.8844 7.77743 11.8844 7.48967 11.6172L3.23966 7.61723C2.93613 7.33537 2.91856 6.86082 3.20041 6.55729Z" fill="currentColor" />
        </svg>

    );
}