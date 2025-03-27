interface ChevronDownProps extends React.ComponentPropsWithoutRef<'svg'> {
    size?: number | string;
}

export function ChevronDown({ size, style, ...others }: ChevronDownProps) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 9 6"
            fill="none"
            width="9"
            height="6"
            style={{ width: size || 9, height: size || 6, ...style }}
            {...others}
        >
            <path d="M4.5 4.90881L8 0.908813L4.5 3.23609L1 0.908813L4.5 4.90881Z" fill="currentColor" stroke="currentColor" strokeLinejoin="round" />
        </svg>
    )
}