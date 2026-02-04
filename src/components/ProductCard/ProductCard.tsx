import React, { useState } from "react";
import styles from "./ProductCard.module.scss";
import {
    Card,
    CardMedia,
    CardContent,
    Typography,
    Box,
    Chip,
    IconButton,
    Button,
    Divider,
} from "@mui/material";
import type { ProductDto } from "../../types/catalog.types";
import ContentButton from "../ui/Button";
import ProductPopup from "../ProductPopup/ProductPopup";
interface ProductCardProps {
    product: ProductDto;
}

const  ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    const { name, description, sizes, img } = product;
    const [popupOpen, setPopupOpen] = useState(false);

    const basePrice = sizes?.[0]?.price ?? 0;

    return (
        <Card
            sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                boxShadow: "0",
                backgroundColor: "white",
                gap: "24px",
                overflow: "hidden",
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    height: "220px",
                    width: "220px",
                    margin: "0 auto",
                }}
            >
                <CardMedia
                    component="img"
                    image={img}
                    alt={name}
                    sx={{
                        maxWidth: "100%",
                        maxHeight: "100%",
                    }}
                />
            </Box>

            <CardContent
                className={styles.cardContent}
                sx={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    padding: 0,
                }}
            >
                <Box
                    sx={{
                        flex: 1,
                        display: "flex",
                        flexDirection: "column",
                        paddingBottom: "24px",
                        gap: "8px",
                    }}
                >
                    <Typography variant="h3" sx={{ color: "black" }}>
                        {name}
                    </Typography>

                    {description && (
                        <Typography
                            sx={{
                                color: "#344051",
                                fontSize: 16,
                                display: "-webkit-box",

                                WebkitBoxOrient: "vertical",
                                overflow: "hidden",
                                lineHeight: 1.5,
                            }}
                        >
                            {description}
                        </Typography>
                    )}
                </Box>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "24px",
                    }}
                >
                    <Typography variant="h3" color="black">
                        от {basePrice} ₽
                    </Typography>

                    <ContentButton
                        onClick={(e) => {
                            setPopupOpen(true);
                        }}
                    >
                        Выбрать
                    </ContentButton>
                </Box>
            </CardContent>
            {popupOpen && (
                <ProductPopup
                    product={product}
                    open={popupOpen}
                    onClose={() => setPopupOpen(false)}
                    onAddToCart={(selection) => {
                        console.log("Добавлено в корзину:", selection);
                        // Здесь будет логика добавления в корзину
                    }}
                />
            )}
        </Card>
    );
};

export default ProductCard;
