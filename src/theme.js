import { createTheme } from "@mui/material/styles";


const theme = createTheme({
    palette : {
        primary : {
            main : '#fff'
        },
        secondary : {
            main : '#4C0871'
        },
        major : {
            main : '#282828'
        }
    },
    typography : {
        fontFamily : [
            'Montserrat',
            'Roboto',
            '-apple-system',
            'sans-serif'
        ].join(',')
    }
})

export default theme