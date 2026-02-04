import { Box, IconButton, Typography } from "@mui/material";
import { Add, Remove, Delete } from "@mui/icons-material";
import type { CartItem } from "../../types/cart.types";
import { useDispatch } from "react-redux";
import {
    removeFromCart,
    updateQuantity,
} from "../../store/slices/cart/cartSlice";

interface Props {
    item: CartItem;
}

export default function CartItem({ item }: Props) {
    const dispatch = useDispatch();
    const onIncrement = (id: string) => {
        dispatch(
            updateQuantity({
                id,
                quantity: item.quantity + 1,
            }),
        );
    };
    const onDecrement = (id: string) => {
        dispatch(
            updateQuantity({
                id,
                quantity: item.quantity - 1,
            }),
        );
    };

    const onRemove = (id: string) => {
        dispatch(removeFromCart(id));
    };
    return (
        <Box
            sx={{
                display: "flex",
                alignItems: "center",
                gap: 3,
                p: 2,
                borderBottom: 1,
                borderColor: "divider",
            }}
        >
            <Box sx={{ width: 80, height: 80 }}>
                <img
                    src={item.img}
                    alt={item.name}
                    style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        borderRadius: 8,
                    }}
                />
            </Box>
            <Box sx={{ flex: 1 }}>
                <Typography variant="body1" fontWeight={500}>
                    {item.name}
                </Typography>
            </Box>
            <Box>
                {item.toppings && item.toppings.length > 0 && (
                    <Typography variant="body2" color="black">
                        {item.toppings.join(", ")}
                    </Typography>
                )}
            </Box>

            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    bgcolor: "#F3F4F6",
                    gap: 1,
                }}
            >
                <IconButton
                    size="small"
                    onClick={() => onDecrement(item.id)}
                    disabled={item.quantity <= 1}
                >
                    <Remove fontSize="small" sx={{ color: "black" }} />
                </IconButton>

                <Typography
                    sx={{
                        minWidth: 40,
                        textAlign: "center",
                        fontWeight: 500,
                    }}
                >
                    {item.quantity}
                </Typography>

                <IconButton size="small" onClick={() => onIncrement(item.id)}>
                    <Add fontSize="small" sx={{ color: "black" }} />
                </IconButton>
            </Box>
            <Typography variant="h6" sx={{ minWidth: 100, textAlign: "right" }}>
                {item.total} ₽
            </Typography>
            <IconButton
                onClick={() => onRemove(item.id)}
                color="error"
                size="small"
            >
                <Delete />
            </IconButton>
        </Box>
    );
}
