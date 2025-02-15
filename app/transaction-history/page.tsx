import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";

import TransactionHistoryCard from "@/app/components/transactionHistoryCard";
import dummyData from "@/app/utils/dummyData";

export default function TransactionHistory() {
    return (
        <Container
            sx={{
                paddingBottom: "50px",
            }}
            maxWidth="lg"
        >
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    fontWeight: 900,
                    fontSize: "30px",
                    paddingTop: "70px",
                }}
            >
                Transaction History
            </Box>
            <Box
                sx={{ display: "flex", justifyContent: "center", paddingTop: "50px" }}
            >
                <Stack spacing={2}>
                    {dummyData.map((item, index) => (
                        <TransactionHistoryCard key={index} history={item} />
                    ))}
                </Stack>
            </Box>
        </Container>
    );
}
