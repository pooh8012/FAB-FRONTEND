import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId:
        "729348536715-tdiqlpbvdf36b0ogamrdfa78bppbhmcc.apps.googleusercontent.com",
      clientSecret: "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",
    }),
  ],
  theme: {
    colorScheme: "light",
  },
};

export default NextAuth(authOptions);
