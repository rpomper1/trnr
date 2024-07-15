import { PrismaClient } from "@prisma/client";
const db = new PrismaClient();
const getUser = async (email, password) => {
  try {
    return await db.user.findUnique({
      where: {
        email,
        password
      }
    });
  } catch (error) {
    console.error(error);
  } finally {
    await db.$disconnect();
  }
};
export { getUser };
