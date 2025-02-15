import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

export default function TransactionHistoryCard({ history }) {
  const isCredit = history?.transaction_type === "Credit";

  return (
    <Card
      sx={{
        width: 600,
        backgroundColor: "#F5F5F5",
        padding: 2,
      }}
      aria-labelledby={`transaction-${history?.id}`}
      role="region"
    >
      <CardContent>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            height: "100px",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              width: "56px",
              height: "56px",
              borderRadius: "50%",
              backgroundColor: isCredit ? "#4CAF50" : "#FF4D4D",
              alignItems: "center",
              display: "flex",
              justifyContent: "center",
            }}
            role="img"
            aria-label={isCredit ? "Credit transaction" : "Debit transaction"}
          >
            {isCredit ? (
              <ArrowDownwardIcon sx={{ color: "white" }} />
            ) : (
              <ArrowUpwardIcon sx={{ color: "white" }} />
            )}
          </Box>
          <Box>
            <Stack spacing={1}>
              <Typography id={`transaction-${history?.id}`} variant="h6">
                {isCredit
                  ? `From ${history?.sender?.name}`
                  : `To ${history?.receiver?.name}`}
              </Typography>
              <Typography variant="body2">
                {isCredit
                  ? `${history?.sender?.bank_name} - ${history?.sender?.account_number}`
                  : `${history?.receiver?.bank_name} - ${history?.receiver?.account_number}`}
              </Typography>
            </Stack>
          </Box>
          <Box
            sx={{
              fontSize: "24px",
              fontWeight: 900,
              color: isCredit ? "#4CAF50" : "#FF4D4D",
            }}
            aria-live="polite"
          >
            {isCredit ? `+ ₦${history?.amount}` : `- ₦${history?.amount}`}
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}
