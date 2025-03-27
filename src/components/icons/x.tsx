interface XProps extends React.ComponentPropsWithoutRef<'svg'> {
    size?: number | string;
}

export function X({ size, style, ...others }: XProps) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 28 28"
            width="28"
            height="28"
            style={{ width: size || 28, height: size || 28, ...style }}
            {...others}
        >
            <rect x="0.205078" y="0.317627" width="27.3066" height="27.3066" rx="13.6533" fill="white" />
            <path
                d="M17.9442 7.54712H20.1246L15.3624 12.9888L20.9647 20.3948H16.5792L13.1418 15.9043L9.21339 20.3948H7.02991L12.1226 14.5732L6.75195 7.54712H11.2486L14.3525 11.6516L17.9442 7.54712ZM17.1783 19.0915H18.3859L10.5908 8.78247H9.29369L17.1783 19.0915Z"
                fill="black"
            />
        </svg>
    );
}