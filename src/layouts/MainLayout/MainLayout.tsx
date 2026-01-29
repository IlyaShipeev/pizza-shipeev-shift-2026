// src/layouts/MainLayout/MainLayout.tsx
import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";
import { Container } from "@mui/material";
import styles from "./MainLayout.module.scss";

export const MainLayout = () => {
    return (
        <div className={styles.layout}>
            <Header />
            <Container maxWidth="lg" className={styles.container}>
                <main className={styles.main}>
                    <Outlet />
                </main>
            </Container>
        </div>
    );
};
