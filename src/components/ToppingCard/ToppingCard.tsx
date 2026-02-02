import {
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Typography,
    Box,
} from "@mui/material";
import type { ToppingDto } from "../../types/catalog.types";

interface ProductCardProps {
    topping: ToppingDto;
    onClick?: () => void;
}

const ToppingCard: React.FC<ProductCardProps> = ({ topping, onClick }) => {
    return (
        <Card
            sx={{
                borderRadius: "16px",
                display: "flex",
                flexDirection: "column",
                height: "192px",
                overflow: "hidden",
                boxShadow: "0px 4px 12px rgba(26, 26, 30, 0.15)",
                background: "#FFFFFF",
            }}
            onClick={onClick}
        >
            <CardActionArea sx={{ height: "100%", p: 0 }}>
                <Box
                    sx={{
                        height: "60%",
                        position: "relative",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        p: 2,
                        bgcolor: "#fafafa",
                    }}
                >
                    <CardMedia
                        component="img"
                        image={topping.img}
                        alt={topping.type}
                        sx={{
                            maxHeight: "100%",
                            maxWidth: "100%",
                            objectFit: "contain",
                        }}
                    />
                </Box>

                <CardContent
                    sx={{
                        flex: 1,
                        p: 2,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        height: "40%",
                    }}
                >
                    <Typography
                        sx={{ color: (theme) => theme.palette.text.primary }}
                        variant="body2"
                    >
                        {topping.type}
                    </Typography>

                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "flex-end",
                            mt: "auto",
                        }}
                    >
                        <Typography
                            variant="body1"
                            sx={{
                                color: (theme) => theme.palette.text.primary,
                            }}
                        >
                            {`${topping.price} ₽`}
                        </Typography>
                        <Typography
                            variant="body2"
                            sx={{
                                color: "#666666",
                                fontSize: "14px",
                                lineHeight: "20px",
                            }}
                        >
                            
                        </Typography>
                    </Box>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default ToppingCard;
