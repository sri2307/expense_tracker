import NextAuth from "next-auth";
import OktaProvider from "next-auth/providers/okta";

const options = {
  providers: [
    OktaProvider({
      clientId: process.env.OKTA_CLIENT_ID,
      clientSecret: process.env.OKTA_CLIENT_SECRET,
      issuer: process.env.OKTA_ISSUER,
      // idToken: true,
    }),
  ],
  session: {
    jwt: true,
  },
  secret: "1234",
  jwt: {
    secret: "1234",
    encryption: true,
  },
  callbacks: {
    async jwt(token, user, account, profile, isNewUser) {
      // Store the token in your database
      if (account?.accessToken) {
        token.accessToken = account.accessToken;
      }

      return token;
    },

    async session(session, token) {
      // Store the token in your database
      return session;
    },
  },
};

export const config = {
  api: {
    externalResolver: true,
  },
};

export default async (req, res) => {
  NextAuth(req, res, options);
};
