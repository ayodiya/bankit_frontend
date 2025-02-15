### **Section A: General Knowledge**

1. **What are the key security considerations when developing financial applications?**  
    Financial apps must be very secure to protect people's money and personal information. This means using strong encryption to keep data safe, multi-factor authentication (like OTPs or fingerprints) to stop hackers, and role-based access to control who can see what. Apps must also follow important rules like PCI-DSS, GDPR, and KYC to prevent fraud and protect privacy. Other security measures include AI-powered fraud detection, digital signatures for big transactions, and secure APIs to block hackers from attacking the system.  
     
2. **Why are compliance standards like PCI-DSS and GDPR important for financial apps?**  
    Imagine a banking app that lets you send money and store your card details. To keep your card info safe, the app must follow PCI-DSS rules, which require strong encryption and secure login methods. Since the app also collects personal details, it must follow GDPR laws—giving you control over your data, letting you delete it if needed, and quickly reporting any security breaches. Following these rules builds trust and keeps the app from getting fined or hacked.

3. **What is "idempotency" in financial transactions, and why does it matter?**  
    Idempotency makes sure that if you accidentally send the same request multiple times, it only goes through once. For example, if a bank app is lagging, and you hit "Pay" three times, idempotency prevents you from paying three times. It uses a special idempotency key to ensure only one transaction is processed. This stops people from losing extra money and keeps banking systems reliable and error-free.

4. **What are the risks of handling customer data, and how can they be reduced?**  
    Handling personal and financial data comes with risks like hacking, identity theft, and fraud. If this data gets into the wrong hands, people can lose money, and companies can get sued. To prevent this, financial apps use strong encryption (like AES-256), multi-factor authentication, and strict access controls to limit who sees the data. They also follow laws like PCI-DSS and GDPR, use tokenization to replace sensitive data with fake values, and keep security logs to track unusual activity. Regular security checks help stop problems before they happen.

### **Section B: Frontend Development**

1.  **How can a banking web app be both easy to use and secure?**  
    A good banking app should be simple and clear, with easy navigation, fast loading, and smart features like auto-fill and real-time feedback when filling forms. It must also be mobile-friendly so it works well on all devices. For security, it should have multi-factor authentication (like OTPs), hidden passwords (data masking), and strong session management to prevent hacking. Encryption, fraud detection, and CSRF protection also help keep transactions safe. A well-designed banking app makes it easy to use while keeping hackers out.  
     
2.  **What is the role of form validation and data masking in financial apps**?  
    Form validation makes sure users enter correct information—like valid bank account numbers and secure passwords—to prevent mistakes and fraud. It also stops hackers from adding bad code that could break the system. Data masking hides sensitive details (like showing only the last 4 digits of a card number) to protect privacy. These two features work together to keep user data safe and prevent identity theft.  
     
3.  **How do React apps handle real-time data updates, like balance changes?**  
    To instantly update things like bank balances, React apps use WebSockets for live updates or polling to check for new data every few seconds. Tools like React Query help manage data without constantly refreshing the page. Optimistic updates can also show changes instantly while waiting for confirmation. These methods ensure users always see the latest information while keeping the app fast and reliable.

4.  **What are PWAs, and why are they good for financial institutions?**  
    A Progressive Web App (PWA) is a website that works like a mobile app, offering offline access, fast performance, and push notifications. For a bank, this means customers can check balances and get fraud alerts even with weak internet. PWAs are also cheaper to develop than separate mobile apps and work on all devices. They use HTTPS, caching, and secure logins to keep banking safe. This makes PWAs a cost-effective, secure, and convenient option for financial services.




This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.



