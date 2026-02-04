import { Container, Typography } from "@mui/material";
import CartList from "../../components/CartList/CartList";
export default function CartPage() {
    return (
        <Container
            maxWidth="lg"
            sx={{ display: "flex", flexDirection: "column", gap: "24px" }}
        >
            <Typography variant="h2">Корзина</Typography>
            <CartList />
        </Container>
    );
}
