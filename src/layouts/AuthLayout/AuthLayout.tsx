// src/layouts/AuthLayout/AuthLayout.tsx
import { Outlet } from "react-router-dom";
import { Box, Container } from "@mui/material";
import styles from "./AuthLayout.module.scss";

export const AuthLayout = () => {
    return (
        <Container maxWidth="sm">
            <Box className={styles.authLayout}>
                <Outlet />
            </Box>
        </Container>
    );
};
