import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import GitHub from "next-auth/providers/github";

const login = async () => {
  const login = await fetch("https://google.com");
  return { role: "user" };
};

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google, GitHub],

  callbacks: {
    async signIn({ profile }) {
      return { ...profile, role: "user" };
    },

    async jwt({ token }) {
      const loginToMyServer = await login(token.email);

      token.role = loginToMyServer.role;
      return token;
    },
    session({ session, token }) {
      session.user.id = token.id;
      session.user.role = token.role;
      return session;
    },
  },
});
