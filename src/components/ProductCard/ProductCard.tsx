import React from "react";
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
interface ProductCardProps {
    product: ProductDto;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    const {
        name,
        description,
        sizes,
        isNew,
        isHit,
        isVegetarian,
        isGlutenFree,
    } = product;

    const basePrice = sizes?.[0]?.price ?? 0;

    return (
        <Card
            sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                boxShadow: "0",
                backgroundColor: "white",
                overflow: "hidden",
            }}
        >
            <Box sx={{ position: "relative" }}>
                <CardMedia
                    component="img"
                    height="220"
                    image={`https://shift-intensive.ru${product.img}`}
                    alt={name}
                    sx={{
                        objectFit: "cover",
                        transition: "transform 0.4s ease",
                    }}
                />
            </Box>

            <CardContent
                className={styles.cardContent}
                sx={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    padding:0
                }}
            >
                <Box
                    sx={{
                        flex: 1,
                        display: "flex",
                        flexDirection: "column",
                        gap: "8px",
                        paddingBottom: "24px",
                    }}
                >
                    <Typography variant="h3" sx={{ color: "black" }}>
                        {name}
                    </Typography>

                    {description && (
                        <Typography
                            
                            sx={{
                                color: "#344051",
                                flexGrow: 1,
                                fontSize: 16,
                                display: "-webkit-box",
                                WebkitLineClamp: 4,
                                WebkitBoxOrient: "vertical",
                                overflow: "hidden",
                                lineHeight: 1.5,
                            }}
                        >
                            {/* make !!!fonts like in header*/}
                            {description.length > 80
                                ? description.slice(0, 77) + "..."
                                : description}
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
                        fullWidth
                        onClick={(e) => {
                            e.stopPropagation();
                            console.log("Добавлена в корзину:", name);
                        }}
                    >
                        Выбрать
                    </ContentButton>
                </Box>
            </CardContent>
        </Card>
    );
};

export default ProductCard;
