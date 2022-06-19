import { createTheme } from "@mui/material/styles";


const theme = createTheme({
    palette : {
        primary : {
            main : '#fff'
        },
        secondary : {
            main : '#0f0'
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