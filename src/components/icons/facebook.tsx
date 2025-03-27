interface FacebookProps extends React.ComponentPropsWithoutRef<'svg'> {
    size?: number | string;
}

export function Facebook({ size, style, ...others }: FacebookProps) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 29 28"
            width="29"
            height="28"
            style={{ width: size || 29, height: size || 28, ...style }}
            {...others}
        >
            <rect x="0.978516" y="0.317627" width="27.3066" height="27.3066" rx="13.6533" fill="white" />
            <path d="M12.9235 21.8772V14.8048H10.5537V11.9944H12.9235V9.78002C12.9235 7.37417 14.3941 6.0647 16.5414 6.0647C17.5703 6.0647 18.4539 6.14191 18.7103 6.17588V8.68982H17.2211C16.0532 8.68982 15.8277 9.24573 15.8277 10.058V11.9944H18.4632L18.1017 14.8048H15.8277V21.8772" fill="black" />
        </svg>
    )

}