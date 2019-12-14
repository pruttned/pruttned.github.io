import Typography from 'typography'
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
        }
    })
})
export default typography