import './index.css'
import { ThemeProvider } from '@mui/material/styles';
import React, {Suspense, lazy} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import PageLoad from './components/js/PageLoad'
import theme from './theme'

const LandingPage = lazy(() => import ('./pages/LandingPage'))
const PamsPage = lazy(()=> import ('./pages/PamsPage'))
const ComsPage = lazy(()=>import('./pages/ComsPage'))

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
                            <Route path='/pams' element={< PamsPage />} />
                            <Route path='/coms' element={<ComsPage />} />
                        </Routes>
                    </Suspense>
                </Router>
        </ThemeProvider>
                

    );
}

export default App;
