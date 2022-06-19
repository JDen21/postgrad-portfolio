import './index.css'
import { ThemeProvider } from '@mui/material/styles';
import React, {Suspense, lazy} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import PageLoad from './components/js/PageLoad'
import theme from './theme'

const LandingPage = lazy(() => import ('./pages/LandingPage'))

function App() {
    return (
        <ThemeProvider theme={theme} >
            <Router>
                    <Suspense fallback={< PageLoad />}>
                        <Routes>
                            <Route path='/test-loader' element={< PageLoad />}/>
                        </Routes>
                        <Routes>
                            <Route path='/' element={< LandingPage />}/>
                        </Routes>
                    </Suspense>
                </Router>
        </ThemeProvider>
                

    );
}

export default App;
