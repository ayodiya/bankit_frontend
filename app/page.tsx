"use client";

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import CircularProgress from "@mui/material/CircularProgress";
import { Formik } from "formik";
import { useRouter } from "next/navigation";
import { Notify } from "notiflix/build/notiflix-notify-aio";
import { useEffect } from "react";

import InputField from "@/app/components/InputField";
import Button from "@/app/components/ButtonCom";


import adminLoginValidator, {
  PASSWORD,
  PASSWORD_LABEL,
  EMAIL,
  EMAIL_LABEL,
} from "@/app/validators/loginValidator";

const initialValues = {
  [PASSWORD]: "",
  [EMAIL]: "",
};

export default function Login() {
  const { push } = useRouter();



  return (
    <>
      <Box
        sx={{
          backgroundColor: 'white',
          minHeight: "100vh",
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Container maxWidth="lg">
          <Box>
            <Box
              sx={{
                fontWeight: 700,
                fontSize: "48px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              Log In
            </Box>
            <Formik
              style={{
                width: "100%",
              }}
              initialValues={initialValues}
              validationSchema={adminLoginValidator}
              onSubmit={async (values, { resetForm }) => {
                try {
                  console.log(values)

                  Notify.success("Login successful");
                  push("/");

                } catch (error) {
                  Notify.failure(
                    (error as any)?.data?.message || "Login failed",
                  );
                }
                resetForm();
              }}
            >
              {({
                handleChange,
                handleSubmit,
                errors,
                isSubmitting,
                handleBlur,
              }) => (
                <Box
                  onSubmit={handleSubmit}
                  component="form"
                  sx={{
                    paddingTop: "40px",
                    width: "100%",
                  }}
                >
                  <Stack
                    justifyContent="center"
                    alignItems="center"
                    spacing={2}
                    sx={{ width: "100%" }}
                  >
                    <Box
                      sx={{
                        display: { md: "flex" },
                        justifyContent: { md: "center" },
                        width: "100%",
                      }}
                    >
                      <InputField
                        name={EMAIL}
                        error={errors[EMAIL] !== undefined}
                        helperText={errors[EMAIL] || ""}
                        type="text"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        label={EMAIL_LABEL}
                        placeholder={EMAIL_LABEL}
                      />
                    </Box>
                    <Box
                      sx={{
                        display: { md: "flex" },
                        justifyContent: { md: "center" },
                        width: "100%",
                      }}
                    >
                      <InputField
                        name={PASSWORD}
                        error={errors[PASSWORD] !== undefined}
                        helperText={errors[PASSWORD] || ""}
                        type="password"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        label={PASSWORD_LABEL}
                        placeholder={PASSWORD_LABEL}
                      />
                    </Box>
                    <Box
                      sx={{
                        display: { md: "flex" },
                        justifyContent: { md: "center" },
                        width: { xs: "100%", md: "50%" },
                      }}
                    >
                      <Button
                        disabled={isSubmitting}
                        type="submit"
                        color="white"
                        backgroundColor="primary.main"
                        text={isSubmitting ? <CircularProgress /> : "Log in"}
                        width={{ xs: "100%", md: "35%" }}
                        variant="contained"
                      />
                    </Box>
                  </Stack>
                </Box>
              )}
            </Formik>
          </Box>
        </Container>
      </Box>
    </>
  );
}
