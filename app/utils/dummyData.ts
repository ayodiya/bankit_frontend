interface BankAccount {
    name: string;
    account_number: string;
    bank_name: string;
  }
  
  interface Transaction {
    id: string;
    user_id: string;
    date: string;
    description: string;
    amount: number;
    currency: string;
    status: "Completed" | "Pending";
    transaction_type: "Debit" | "Credit";
    receiver?: BankAccount;
    sender?: BankAccount | string;
  }
  
  const dummyData: Transaction[] = [
    {
      id: "1",
      user_id: "201",
      date: "2025-02-10T09:30:00Z",
      description: "POS Payment - Jumia",
      amount: 15000.0,
      currency: "NGN",
      status: "Completed",
      transaction_type: "Debit",
      receiver: {
        name: "Adeoluwa Johnson",
        account_number: "3056789123",
        bank_name: "GTBank",
      },
    },
    {
      id: "2",
      user_id: "202",
      date: "2025-02-09T14:20:00Z",
      description: "Salary Deposit",
      amount: 250000.0,
      currency: "NGN",
      status: "Completed",
      transaction_type: "Credit",
      sender: {
        name: "XYZ Corp Ltd",
        account_number: "1023456789",
        bank_name: "GTBank",
      },
    },
    {
      id: "3",
      user_id: "203",
      date: "2025-02-08T18:45:00Z",
      description: "Airtime Purchase - MTN",
      amount: 2000.0,
      currency: "NGN",
      status: "Completed",
      transaction_type: "Debit",
      receiver: {
        name: "Tunde Balogun",
        account_number: "2089765432",
        bank_name: "First Bank",
      },
    },
    {
      id: "4",
      user_id: "204",
      date: "2025-02-07T08:15:00Z",
      description: "Electricity Bill - Ikeja Electric",
      amount: 12000.5,
      currency: "NGN",
      status: "Pending",
      transaction_type: "Debit",
      receiver: {
        name: "Amaka Okechukwu",
        account_number: "3098654321",
        bank_name: "Zenith Bank",
      },
    },
    {
      id: "5",
      user_id: "205",
      date: "2025-02-06T20:10:00Z",
      description: "Cash Deposit",
      amount: 50000.0,
      currency: "NGN",
      status: "Completed",
      transaction_type: "Credit",
      sender: {
        name: "Peter Adeyemo",
        account_number: "2056789432",
        bank_name: "Zenith Bank",
      },
    },
    {
      id: "6",
      user_id: "206",
      date: "2025-02-05T13:05:00Z",
      description: "Subscription Renewal - Netflix",
      amount: 5000.0,
      currency: "NGN",
      status: "Completed",
      transaction_type: "Debit",
      receiver: {
        name: "Ngozi Chukwu",
        account_number: "4087654321",
        bank_name: "UBA",
      },
    },
    {
      id: "7",
      user_id: "207",
      date: "2025-02-04T16:30:00Z",
      description: "Supermarket Purchase - Shoprite",
      amount: 35000.25,
      currency: "NGN",
      status: "Completed",
      transaction_type: "Debit",
      receiver: {
        name: "Emeka Obi",
        account_number: "5098765432",
        bank_name: "Stanbic IBTC",
      },
    },
    {
      id: "8",
      user_id: "208",
      date: "2025-02-03T11:40:00Z",
      description: "Freelance Payment Received",
      amount: 180000.0,
      currency: "NGN",
      status: "Completed",
      transaction_type: "Credit",
      sender: {
        name: "Upwork Inc.",
        account_number: "3065432198",
        bank_name: "Access Bank",
      },
    },
    {
      id: "9",
      user_id: "209",
      date: "2025-02-02T22:50:00Z",
      description: "Loan Repayment - Access Bank",
      amount: 50000.0,
      currency: "NGN",
      status: "Pending",
      transaction_type: "Debit",
      receiver: {
        name: "Oluwakemi Adepoju",
        account_number: "1076543210",
        bank_name: "Access Bank",
      },
    },
    {
      id: "10",
      user_id: "210",
      date: "2025-02-01T07:25:00Z",
      description: "Restaurant Payment - Kilimanjaro",
      amount: 12000.0,
      currency: "NGN",
      status: "Completed",
      transaction_type: "Debit",
      receiver: {
        name: "Samuel Okoro",
        account_number: "6076543211",
        bank_name: "Fidelity Bank",
      }
    },
  ];
  
  export default dummyData;
  