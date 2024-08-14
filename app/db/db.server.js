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
const getTrainees = async (trainerId) => {
  try {
    return await db.$queryRaw`SELECT 
    u.first_name, 
    u.last_name, 
    t.*
FROM
    trainee t
JOIN
    "user" u
ON
    t.user_id = u.id
WHERE
    t.trainer_id = ${trainerId}
    AND t.status != 'unapproved'`;
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
const getUnapprovedTrainees = async (trainerId) => {
  try {
    return await db.$queryRaw`SELECT 
    u.first_name, 
    u.last_name, 
    t.*
FROM
    trainee t
JOIN
    "user" u
ON
    t.user_id = u.id
WHERE
    t.trainer_id = ${trainerId}
AND
    t.status = 'unapproved'`;
  } catch (error) {
    console.error(error);
  } finally {
    await db.$disconnect();
  }
};
const getTrainer = async (trainerId) => {
  try {
    return await db.$queryRaw`SELECT 
    u.*,
    t.*
FROM 
    trainer t
JOIN 
    "user" u ON t.user_id = u.id
WHERE 
    t.id = ${trainerId}`;
  } catch (error) {
    console.error(error);
  } finally {
    await db.$disconnect();
  }
  db.$disconnect();
};
const getTrainerFromUserId = async (userId) => {
  try {
    return await db.$queryRaw`SELECT
    t.*
FROM
    trainer t
WHERE
    t.user_id = ${userId}`;
  } catch (error) {
    console.error(error);
  } finally {
    await db.$disconnect();
  }
};
const getTraineeFromUserId = async (userId) => {
  try {
    return await db.$queryRaw`SELECT
    t.*
FROM
    trainee t
WHERE
    t.user_id = ${userId}`;
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
const approveTrainee = async (traineeId, paid_until) => {
  try {
    return await db.trainee.update({
      where: {
        id: traineeId
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
const createTrainee = async (
  userId,
  goal,
  start_weight,
  target_calories,
  target_protein,
  target_fats,
  target_carbs,
  trainerId
) => {
  try {
    return await db.trainee.create({
      data: {
        goal,
        start_weight,
        target_calories,
        target_protein,
        target_fats,
        target_carbs,
        paid_until: new Date(),
        trainer: {
          connect: {
            id: trainerId
          }
        },
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

export {
  getUser,
  createUser,
  createTrainer,
  getUnapprovedTrainers,
  approveTrainer,
  getTrainers,
  updateTrainer,
  getTrainer,
  createTrainee,
  getTrainees,
  getTrainerFromUserId,
  getTraineeFromUserId,
  getUnapprovedTrainees,
  approveTrainee
};
