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
const createUser = async (
  firstName,
  lastName,
  email,
  password,
  role,
  disabled
) => {
  try {
    return await db.user.create({
      data: {
        first_name: firstName,
        last_name: lastName,
        email,
        password,
        role,
        disabled
      }
    });
  } catch (error) {
    console.error(error);
  } finally {
    await db.$disconnect();
  }
};
const createTrainer = async (userId, subscriptionPlan) => {
  try {
    return await db.trainer.create({
      data: {
        subscription_plan: subscriptionPlan,
        status: "unapproved",
        paid_until: new Date(),
        user: {
          connect: {
            id: userId
          }
        }
      }
    });
  } catch (error) {
    console.error(error);
  } finally {
    await db.$disconnect();
  }
};
const getTrainers = async () => {
  try {
    return await db.$queryRaw`SELECT 
    u.id,
    u.first_name, 
    u.last_name,
    u.email, 
    t.*
FROM 
    trainer t
JOIN 
    "user" u
ON 
    t.user_id = u.id
WHERE 
    t.status != 'unapproved'`;
  } catch (error) {
    console.error(error);
  } finally {
    await db.$disconnect();
  }
};
const getUnapprovedTrainers = async () => {
  try {
    return await db.$queryRaw`SELECT 
    u.first_name, 
    u.last_name, 
    t.*
FROM 
    trainer t
JOIN 
    "user" u
ON 
    t.user_id = u.id
WHERE 
    t.status = 'unapproved'`;
  } catch (error) {
    console.error(error);
  } finally {
    await db.$disconnect();
  }
};
const approveTrainer = async (trainerId, paid_until) => {
  try {
    return await db.trainer.update({
      where: {
        id: trainerId
      },
      data: {
        paid_until,
        status: "active"
      }
    });
  } catch (error) {
    console.error(error);
  } finally {
    await db.$disconnect();
  }
};
const updateTrainer = async (
  trainerId,
  subscriptionPlan,
  paidUntil,
  status
) => {
  try {
    return await db.trainer.update({
      where: {
        id: trainerId
      },
      data: {
        subscription_plan: subscriptionPlan,
        paid_until: paidUntil,
        status
      }
    });
  } catch (error) {
    console.error(error);
  } finally {
    await db.$disconnect();
  }
};
export {
  getUser,
  createUser,
  createTrainer,
  getUnapprovedTrainers,
  approveTrainer,
  getTrainers,
  updateTrainer
};
