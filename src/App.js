import {Route, Routes} from 'react-router-dom'
import useLocalStorage from "use-local-storage";

import {MainLayout} from "./layout";
import {MoviePage, MoviesPage, NotFoundPage} from "./pages";


function App() {
    const [theme, setTheme] = useLocalStorage('theme' ? 'light' : 'dark');

    const switchTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
    }

    return (
        <>
            <body data-theme={theme}>
            <Routes>
                <Route path={'/'} element={<MainLayout switchTheme={switchTheme} theme={theme}/>}>
                    <Route index element={<MoviesPage/>}/>
                    <Route path={'*'} element={<NotFoundPage/>}/>
                    <Route path={'movie/:id'} element={<MoviePage/>}/>
                </Route>
            </Routes>
            </body>
        </>
    );
}

export default App;
