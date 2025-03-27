interface SearchProps extends React.ComponentPropsWithoutRef<'svg'> {
    size?: number | string;
}

export function Search({ size, style, ...others }: SearchProps) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="none"
            style={{ width: size || 20, height: size || 20, ...style }}
            {...others}
        >
            <path d="M17.5 17.4998L13.875 13.8748M15.8333 9.16642C15.8333 12.8483 12.8486 15.8331 9.16667 15.8331C5.48477 15.8331 2.5 12.8483 2.5 9.16642C2.5 5.48452 5.48477 2.49976 9.16667 2.49976C12.8486 2.49976 15.8333 5.48452 15.8333 9.16642Z" stroke="currentColor" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}