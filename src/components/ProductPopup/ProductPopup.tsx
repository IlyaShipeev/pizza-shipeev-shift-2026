import React, { useState } from "react";
import {
    Dialog,
    DialogContent,
    Box,
    Typography,
    Button,
    IconButton,
    Chip,
    Grid,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import type {
    ProductDto,
    SizeDto,
    DoughDto,
    IngredientDto,
} from "../../types/catalog.types";
import CustomTabs from "../Tabs/CustomTabs";
import ToppingCard from "../ToppingCard/ToppingCard";

interface ProductPopupProps {
    product: ProductDto;
    open: boolean;
    onClose: () => void;
    onAddToCart: (selection: ProductSelection) => void;
}

interface ProductSelection {
    product: ProductDto;
    selectedSize: SizeDto;
    selectedDough: DoughDto;
    selectedIngredients: IngredientDto[];
    quantity: number;
    totalPrice: number;
}

const ProductPopup: React.FC<ProductPopupProps> = ({
    product,
    open,
    onClose,
    onAddToCart,
}) => {
    const [selectedSize, setSelectedSize] = useState<SizeDto>(product.sizes[0]);
    const [selectedDough, setSelectedDough] = useState<DoughDto>(
        product.doughs[0],
    );
    const [selectedToppings, setSelectedToppings] = useState<IngredientDto[]>(
        [],
    );
    const [quantity, setQuantity] = useState(1);

    const calculateTotalPrice = () => {
        const basePrice = selectedSize.price;
        const doughPrice = selectedDough.price;
        const ingredientsPrice = selectedToppings.reduce(
            (sum, ing) => sum + ing.price,
            0,
        );
        return (basePrice + doughPrice + ingredientsPrice) * quantity;
    };

    const toggleTopping = (ingredient: IngredientDto) => {
        setSelectedToppings((prev) =>
            prev.find((i) => i.type === ingredient.type)
                ? prev.filter((i) => i.type !== ingredient.type)
                : [...prev, ingredient],
        );
    };

    const handleAddToCart = () => {
        const selection: ProductSelection = {
            product,
            selectedSize,
            selectedDough,
            selectedIngredients: selectedToppings,
            quantity,
            totalPrice: calculateTotalPrice(),
        };
        onAddToCart(selection);
        onClose();
    };

    return (
        <Dialog
            open={open}
            onClose={onClose}
            maxWidth="md"
            fullWidth
            PaperProps={{
                sx: {
                    borderRadius: 3,
                    backgroundColor: "white",
                },
            }}
        >
            <DialogContent sx={{ p: 0, maxHeight: "676px" }}>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "flex-end",
                        p: "24px 24px 24px 0px",
                    }}
                >
                    <IconButton onClick={onClose} size="small">
                        <CloseIcon sx={{ color: "#CED2DA" }} />
                    </IconButton>
                </Box>
                <Grid
                    container
                    sx={{
                        padding: "24px 64px",
                    }}
                >
                    <Grid size={{ xs: 12, sm: 4 }}>
                        {" "}
                        {/*узнать че да как*/}
                        <Box
                            sx={{
                                width: "100%",
                                height: "100%",
                                display: "flex",
                            }}
                        >
                            <img
                                src={product.img}
                                alt={product.name}
                                style={{
                                    maxWidth: "100%",
                                    maxHeight: 220,
                                    objectFit: "contain",
                                    borderRadius: 8,
                                }}
                            />
                        </Box>
                    </Grid>

                    <Grid
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                        }}
                        size={{ xs: 12, sm: 8 }}
                    >
                        <Box
                            sx={{
                                p: 3,
                                height: "100%",
                                display: "flex",
                                flexDirection: "column",
                                overflow: "auto",
                                maxHeight: "80vh",
                                "&::-webkit-scrollbar": {
                                    width: "9px",
                                    height: "94px",
                                },

                                "&::-webkit-scrollbar-thumb": {
                                    background: "#CED2DA",
                                    borderRadius: "10px",
                                },
                                "&::-webkit-scrollbar-thumb:hover": {
                                    background: "#a8a8a8",
                                },
                            }}
                        >
                            <Typography
                                variant="h2"
                                fontWeight={700}
                                sx={{ color: "#1a1a1a" }}
                            >
                                {product.name}
                            </Typography>
                            <Typography
                                sx={{
                                    color: (theme) =>
                                        theme.palette.text.secondary,
                                    mb: 3,
                                }}
                            >
                                {product.ingredients
                                    .map((ing) => ing.type)
                                    .join(", ")}
                            </Typography>

                            <Box sx={{ mb: 3 }}>
                                <CustomTabs
                                    options={product.sizes.map((size) => ({
                                        value: size.type,
                                        label:
                                            size.type === "SMALL"
                                                ? "Маленькая"
                                                : size.type === "MEDIUM"
                                                  ? "Средняя"
                                                  : "Большая",
                                        price: size.price,
                                    }))}
                                    value={selectedSize.type}
                                    onChange={(type) =>
                                        setSelectedSize(
                                            product.sizes.find(
                                                (s) => s.type === type,
                                            )!,
                                        )
                                    }
                                />
                            </Box>

                            <Box sx={{ mb: 3 }}>
                                <Typography
                                    variant="body1"
                                    fontWeight={600}
                                    gutterBottom
                                >
                                    Тесто
                                </Typography>
                                <CustomTabs
                                    options={product.doughs.map((dough) => ({
                                        value: dough.type,
                                        label:
                                            dough.type === "THIN"
                                                ? "Тонкое"
                                                : "Традиционное",
                                        price: dough.price,
                                    }))}
                                    value={selectedDough.type}
                                    onChange={(type) =>
                                        setSelectedDough(
                                            product.doughs.find(
                                                (d) => d.type === type,
                                            )!,
                                        )
                                    }
                                />
                            </Box>

                            <Box sx={{ mb: 3, maxHeight: "10vh" }}>
                                <Typography
                                    variant="body1"
                                    fontWeight={600}
                                    gutterBottom
                                >
                                    Добавить по вкусу
                                </Typography>
                                <Grid container spacing={2}>
                                    {product.toppings.map((topping) => (
                                        <Grid
                                            size={{ xs: 6, sm: 3, md: 4 }}
                                            key={topping.type}
                                        >
                                            <ToppingCard topping={topping} />
                                        </Grid>
                                    ))}
                                </Grid>
                            </Box>
                        </Box>
                        <Box>
                            <Box>
                                <Button
                                    size="large"
                                    onClick={handleAddToCart}
                                    sx={{
                                        p: "16px 32px",
                                        width: "100%",
                                        bgcolor: "#F4511E",
                                        textTransform: "none",
                                        color: "white",
                                        borderRadius: 16,
                                        fontWeight: 600,
                                    }}
                                >
                                    Добавить в корзину
                                </Button>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </DialogContent>
        </Dialog>
    );
};

export default ProductPopup;
