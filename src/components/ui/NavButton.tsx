import React from "react";
import {
    IconButton,
    Typography,
    Box,
    Badge,
    type BadgeProps,
} from "@mui/material";

interface NavButtonProps {
    icon: React.ReactNode;
    text?: string;
    onClick?: () => void;
    badgeContent?: number;
    badgeColor?: BadgeProps["color"];
}

const NavButton: React.FC<NavButtonProps> = ({
    icon,
    text,
    onClick,
    badgeContent,
    badgeColor = "error",
}) => {
    const renderIcon = () => {
        if (badgeContent !== undefined) {
            return (
                <Badge

                    badgeContent={badgeContent}
                    color={badgeColor}
                    sx={{
                        "& .MuiBadge-badge": {
                            fontSize: "0.6rem",
                            minWidth: "20px",
                            top: 0,
                            right: 2,
                        },
                    }}
                >
                    {icon}
                </Badge>
            );
        }
        return icon;
    };

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: "8px",
                cursor: "pointer",
                color: "black",
                transition: "color 0.2s ease",
                "&:hover": {
                    color: "#e53935",
                },
            }}
            onClick={onClick}
        >
            <IconButton
                disableRipple
                className="nav-icon-button"
                sx={{
                    color: "inherit",
                    p:0.5,
                    "& .MuiSvgIcon-root": {
                        fontSize: "1.5rem",
                    },
                }}
            >
                {renderIcon()}
            </IconButton>
            {text && <Typography variant="caption">{text}</Typography>}
        </Box>
    );
};

export default NavButton;
