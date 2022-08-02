
import {Header, MainSlider, MoviesList, ReleasesSlider, ShowsSlider} from "./components";


function App() {
    return (
        <>
            <Header/>
            <main>
                <MainSlider/>
                <ReleasesSlider/>
                <MoviesList/>
                <ShowsSlider/>
            </main>
        </>
    );
}

export default App;
