import {
    Box,
    Typography,
    ToggleButton,
    ToggleButtonGroup,
} from "@mui/material";

interface TabOption {
    value: string;
    label: string;
    price: number;
    extraLabel?: string;
}

interface CustomTabsProps {
    options: TabOption[];
    value: string;
    onChange: (value: string) => void;
}

const CustomTabs: React.FC<CustomTabsProps> = ({
    options,
    value,
    onChange,
}) => {
    const handleChange = (
        _: React.MouseEvent<HTMLElement>,
        newValue: string | null,
    ) => {
        if (newValue) onChange(newValue);
    };

    return (
        <Box
            sx={{
                backgroundColor: "#F3F4F6",
                borderRadius: 2,
                p: 0.5,
            }}
        >
            <ToggleButtonGroup
                value={value}
                exclusive
                onChange={handleChange}
                sx={{
                    display: "flex",
                    gap: 0.5,
                    width: "100%",
                    
                }}
            >
                {options.map((option) => (
                    <ToggleButton
                        key={option.value}
                        value={option.value}
                        sx={{
                            flex: 1,
                            borderRadius:"10px",
                            backgroundColor:
                                value === option.value
                                    ? "white"
                                    : "transparent",

                            "&.Mui-selected": {
                                backgroundColor: "white",
            
                            },
                            "&:hover": {
                                backgroundColor:
                                    value === option.value
                                        ? "white"
                                        : "rgba(255, 255, 255, 0.5)",
                            },
                        }}
                    >
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                gap: 0.5,
                            }}
                        >
                            <Typography
                                variant="body1"
                                sx={{
                                    lineHeight: "20px",
                                    textTransform: "capitalize",
                                    color:
                                        value === option.value
                                            ?  (theme) =>
                                            theme.palette.text.primary
                                            : "#637083",
                                }}
                            >
                                {option.label.toLowerCase()}
                            </Typography>
                            <Typography
                                variant="body1"
                                sx={{
                                    color:
                                        value === option.value
                                            ?  (theme) =>
                                            theme.palette.text.primary
                                            : "#637083",
                                    fontWeight: 600,
                                }}
                            >
                            </Typography>
                        </Box>
                    </ToggleButton>
                ))}
            </ToggleButtonGroup>
        </Box>
    );
};

export default CustomTabs;
