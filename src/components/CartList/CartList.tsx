import { Container, Typography } from "@mui/material";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";
import type { RootState } from "../../store";

export default function CartList() {
    const items = useSelector((state: RootState) => state.cart.items);
    if (items.length === 0) {
        return (
            <Container>
                <Typography>Корзина пуста</Typography>
            </Container>
        );
    }

    return (
        <Container>
            {items.map((item) => (
                <CartItem key={item.id} item={item} />
            ))}
        </Container>
    );
}
