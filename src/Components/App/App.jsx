import Home from "../../pages/Home/Home";
import { Routes,Route, Navigate } from "react-router-dom";
const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </>
    );
}

export default App;