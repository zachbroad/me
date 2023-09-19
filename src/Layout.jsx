import {Container} from "react-bootstrap";

const Layout = ({children}) => (
  <Container id="root">
    <header>Header here</header>
    {children}
  </Container>
)

export default Layout;