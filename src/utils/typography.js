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
        figure: {
            color: theme.color.secLink,
            textAlign: 'center',
            fontSize: '0.7em',
        },
        'figure a,figure a:visited': {
            color: 'currentColor',
            textDecoration: 'underline'
        },
        'figure a:hover,figure a:active': {
            color: 'currentColor',
            textDecoration: 'underline'
        },
    })
})
export default typography