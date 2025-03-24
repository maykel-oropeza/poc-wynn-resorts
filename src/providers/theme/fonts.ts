import localFont from "next/font/local";

export const avanirLTStdFont = localFont({
    src: [
        {
            path: './../../../public/fonts/AvenirLTStd35Light.otf',
            weight: '300',
            style: 'normal',
        },
        {
            path: './../../../public/fonts/AvenirLTStd45Book.otf',
            weight: '400',
            style: 'normal',
        },
        {
            path: './../../../public/fonts/AvenirLTStd45BookOblique.otf',
            weight: '400',
            style: 'italic',
        },
        {
            path: './../../../public/fonts/AvenirLTStd55Oblique.otf',
            weight: '500',
            style: 'italic',
        },
        {
            path: './../../../public/fonts/AvenirLTStd55Roman.otf',
            weight: '500',
            style: 'normal',
        },
        {
            path: './../../../public/fonts/AvenirLTStd65Medium.otf',
            weight: '600',
            style: 'normal',
        },
        {
            path: './../../../public/fonts/AvenirLTStd65MediumOblique.otf',
            weight: '600',
            style: 'italic',
        },
        {
            path: './../../../public/fonts/AvenirLTStd85HeavyOblique.otf',
            weight: '800',
            style: 'italic',
        },
        {
            path: './../../../public/fonts/AvenirLTStd85Heavy.otf',
            weight: '800',
            style: 'normal',
        },
        {
            path: './../../../public/fonts/AvenirLTStd95Black.otf',
            weight: '900',
            style: 'normal',
        },
        {
            path: './../../../public/fonts/AvenirLTStd95BlackOblique.otf',
            weight: '900',
            style: 'italic',
        }
    ],
    variable: '--font-avenirLTStd',
});

export const bigCaslonFont = localFont({
    src: [
        {
            path: './../../../public/fonts/BigCaslonMedium.woff2',
            weight: '500',
            style: 'normal',
        }
    ],
    variable: '--font-bigCaslon',
});