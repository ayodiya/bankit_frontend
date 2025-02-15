import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import React from "react";

interface InputFieldProps {
    name: string;
    error?: boolean;
    onBlur?: React.FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>;
    onChange?: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
    label: string;
    type?: string;
    value?: string;
    height?: string;
    width?: string;
    helperText?: string;
    placeholder?: string;
    multiline?: boolean;
    minRows?: number;
    backgroundColor?: string;
    borderColor?: string;
    color?: string;
    select?: boolean;
    children?: React.ReactNode;
}

export default function InputField({
    helperText,
    error,
    name,
    label,
    onChange,
    onBlur,
    height,
    placeholder,
    multiline,
    minRows,
    backgroundColor,
    borderColor = "#2D3047",
    color = "black",
    select,
    width,
    value,
    children,
    ...props
}: InputFieldProps) {
    return (
        <Box>
            <TextField
                focused
                minRows={minRows}
                multiline={multiline}
                fullWidth
                value={value}
                sx={{
                    backgroundColor,
                    borderRadius: "8px",
                    color: color,
                    height,
                    width,
                    "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                            borderColor: borderColor,
                        },
                    },
                    "& .mui-ost6ue-MuiFormLabel-root-MuiInputLabel-root": {
                        color: color,
                    },
                    "& .mui-16wblaj-MuiInputBase-input-MuiOutlinedInput-input": {
                        color: color,
                    },
                }}
                onBlur={onBlur}
                error={error}
                name={name}
                label={label}
                onChange={onChange}
                placeholder={placeholder}
                variant="outlined"
                select={select}
                {...props}
            >
                {children}
            </TextField>
            <Box
                sx={{
                    fontSize: "12px",
                    color: "red",
                    paddingTop: "3px",
                }}
            >
                {helperText}
            </Box>
        </Box>
    );
}
