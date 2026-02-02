import {
    Container,
    Typography,
    Grid,
    Alert,
    CircularProgress,
    Box,
} from "@mui/material";
import ProductCard from "../../components/ProductCard/ProductCard";
import { useQuery } from "@tanstack/react-query";
import { PizzaListApi } from "../../api/pizzaAppi/pizzaApi";
import styles from "./HomePage.module.scss";

const HomePage = () => {
    const { data, isLoading, isError, error, isFetching } = useQuery(
        PizzaListApi.getPizzaListQueryOptions(),
    );

    const products = data?.catalog ?? [];

    if (isLoading || isFetching) {
        return (
            <Box className={styles.loaderWrapper}>
                <CircularProgress size={60} color="primary" />
                <Typography
                    variant="h6"
                    className={styles.subtitle}
                    sx={{ mt: 3 }}
                >
                    Загружаем меню...
                </Typography>
            </Box>
        );
    }

    if (isError) {
        return (
            <Container maxWidth="lg" className={styles.homePage}>
                <Alert
                    severity="error"
                    variant="filled"
                    className={styles.errorAlert}
                >
                    <Typography variant="h6">
                        Не удалось загрузить меню
                    </Typography>
                    <Typography variant="body2" sx={{ mt: 1 }}>
                        {error instanceof Error
                            ? error.message
                            : "Неизвестная ошибка"}
                    </Typography>
                </Alert>
            </Container>
        );
    }

    return (
        <Container maxWidth="lg" className={styles.homePage}>
            {products.length > 0 ? (
                <Grid
                    container
                    justifyContent="center"
                    spacing={{ xs: 12, sm: 6, md: 3 }}
                    className={styles.gridContainer}
                >
                    {products.map((pizza) => (
                        <Grid
                            size={{ xs: 12, sm: 6, md: 4, lg: 3 }}
                            key={pizza.id}
                        >
                            <ProductCard product={pizza} />
                        </Grid>
                    ))}
                </Grid>
            ) : (
                <Box className={styles.emptyState}>
                    <Typography variant="h5" gutterBottom>
                        Меню пока пустое 😔
                    </Typography>
                    <Typography variant="body1">
                        Скоро здесь появятся вкусные новинки!
                    </Typography>
                </Box>
            )}
        </Container>
    );
};

export default HomePage;
