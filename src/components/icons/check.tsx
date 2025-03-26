interface CheckProps extends React.ComponentPropsWithoutRef<'svg'> {
    size?: number | string;
}

export function Check({ size, style, ...others }: CheckProps) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="none"
            width="20"
            height="20"
            style={{ width: size || 20, height: size || 20, ...style }}
            {...others}
        >
            <path d="M16.6668 4.99976L7.50016 14.1664L3.3335 9.99976" stroke="currentColor" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}