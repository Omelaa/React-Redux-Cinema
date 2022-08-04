import {Outlet} from 'react-router-dom';

import {Header} from "../../components";

const MainLayout = ({switchTheme, theme}) => {

    return (
        <>
            <Header switchTheme={switchTheme} theme={theme}/>
            <main>
                <Outlet/>
            </main>
        </>
    );
};

export {MainLayout};