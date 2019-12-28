import Typography from 'typography'
import theme from '../theme';

const typography = new Typography({
    baseFontSize: '18px',
    baseLineHeight: 1.666,
    headerFontFamily: [
        'Roboto',
        'sans-serif',
    ],
    bodyFontFamily: [
        'Roboto',
        'sans-serif'
    ],
    overrideStyles: () => ({
        h1: {
            marginBottom: 0
        },
        'a,a:visited': {
            color: theme.color.primary,
            textDecoration: 'none',
        },
        'a:hover,a:active': {
            color: theme.color.primary,
            textDecoration: 'underline',
        },
        figcaption: {
            color: theme.color.secLink,
            marginTop: '2px',
            textAlign: 'center',
            fontSize: '0.6em',
        },
        'figcaption a,figure a:visited': {
            color: 'currentColor',
            textDecoration: 'underline'
        },
        'figcaption a:hover,figure a:active': {
            color: 'currentColor',
            textDecoration: 'underline'
        },
    })
})
export default typography