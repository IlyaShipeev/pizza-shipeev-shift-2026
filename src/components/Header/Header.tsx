import { AppBar, Toolbar, IconButton, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import WatchLaterOutlinedIcon from "@mui/icons-material/WatchLaterOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import { ROUTES } from "../../constants/routes";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NavButton from "../ui/NavButton"; 
import styles from "./Header.module.scss";
import { useSelector } from "react-redux";
import type{ RootState } from "../../store";
export default function Header() {
    const navigate = useNavigate();
    const cartItemsCount = useSelector((state:RootState)=> state.cart.totalQuantity)

    return (
        <AppBar position="fixed" className={styles.header}>
            <Toolbar className={styles.toolbar}>
                <Box className={styles.logoSection}>
                    <IconButton
                        onClick={() => navigate(ROUTES.HOME)}
                        className={styles.logoButton}
                        disableRipple
                    >
                        <img
                            src="src\assets\images\image.png"
                            className={styles.img}
                            alt="Логотип"
                        />
                    </IconButton>
                </Box>

                <Box className={styles.nav}>
                    <Box className={styles.navSection}>
                        <NavButton
                            icon={<PersonOutlineOutlinedIcon />}
                            text="Профиль"
                            onClick={() => navigate(ROUTES.PROFILE)}
                        />
                        <NavButton
                            icon={<WatchLaterOutlinedIcon />}
                            text="Заказы"
                            onClick={() => navigate(ROUTES.ORDERS)}
                        />
                    </Box>

                    <NavButton
                        icon={<ShoppingCartOutlinedIcon/>}
                        text="Корзина"
                        onClick={() => navigate(ROUTES.CART)}
                        badgeContent={cartItemsCount}
                        badgeColor="error"
                    />
                    <NavButton
                        icon={<DarkModeOutlinedIcon sx={{color:"#97A1AF"}} />}
                        onClick={() => console.log("toggle theme")}
                    />
                </Box>
            </Toolbar>
        </AppBar>
    );
}
