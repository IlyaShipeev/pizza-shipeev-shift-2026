// components/ui/MyButton.tsx
import React from "react";
import { Button } from "@mui/material";
import type { ButtonProps } from "@mui/material";

const ContentButton: React.FC<ButtonProps> = (props) => {
    const { children } = props;

    return (
        <Button
            variant="contained"
            disableElevation
            disableRipple
            {...props}
            sx={{
                backgroundColor: "#F4511E",
                color: "#FFFFFF",
                width: "100%",
                textTransform: "none",
                fontWeight: 600,
                padding: "16px 32px",
                borderRadius: 16,
                boxShadow: "none",
            }}
        >
            {children}
        </Button>
    );
};

export default ContentButton;
