import Container from "react-bootstrap/esm/Container";
import LoginForm from "./login";

export default function AuthPage({setIsLogin}) {
    return (
        <Container>
            {/* <Routes>
                <Route path="/login" element={<LoginForm />}></Route>
            </Routes> */}
            <LoginForm setLogin={setIsLogin}/>
        </Container>
    )
}