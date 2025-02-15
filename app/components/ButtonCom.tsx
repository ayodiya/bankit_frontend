import Button from "@mui/material/Button";
import { ReactNode } from "react";

interface ButtonProps {
  backgroundColor?: string;
  text: string | ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>; // Type for onClick
  type?: "button" | "reset" | "submit";
  disabled?: boolean;
  variant: "contained" | "outlined" | "text";
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  width?: string | { xs: string; md: string };
  borderRadius?: string;
  borderColor?: string;
  color?: string;
  fontWeight?: number;
}

export default function ButtonCom({
  backgroundColor,
  variant,
  text,
  width,
  startIcon,
  endIcon,
  borderRadius,
  borderColor,
  fontWeight,
  color,
  type,
  ...props
}: ButtonProps) {
  return (
    <Button
      type={type}
      disableRipple
      disableFocusRipple
      sx={{
        width,
        borderColor,
        color,
        textTransform: "none",
        borderRadius,
        backgroundColor,
        fontWeight,
        "&:hover": {
          backgroundColor,
        },
      }}
      variant={variant}
      startIcon={startIcon}
      endIcon={endIcon}
      disableElevation
      {...props}
    >
      {text}
    </Button>
  );
}
