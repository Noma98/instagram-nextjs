import NextAuth, { NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
    }),
  ],

  pages: {
    //signIn 했을 때 기본 페이지가 아닌 특정 페이지로 이동시키기 위해 설정하는 것
    signIn: '/auth/signin', //
  },
};
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
