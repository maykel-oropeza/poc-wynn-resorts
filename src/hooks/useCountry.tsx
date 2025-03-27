export const useCountry = () => {

    const getImgSrc = (isoCountry: string) => `http://purecatamphetamine.github.io/country-flag-icons/3x2/${isoCountry}.svg`
    return { getImgSrc }
}