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
    u.email, 
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
const getTrainee = async (traineeId) => {
  try {
    return await db.$queryRaw`SELECT 
    u.*,
    t.*
FROM
    trainee t
JOIN
    "user" u ON t.user_id = u.id
WHERE
    t.id = ${traineeId}`;
  } catch (error) {
    console.error(error);
  } finally {
    await db.$disconnect();
  }
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
const updateTrainee = async (traineeId, paidUntil, status) => {
  try {
    return await db.trainee.update({
      where: {
        id: traineeId
      },
      data: {
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
const updateTraineeSummary = async (
  traineeId,
  goal,
  targetCalories,
  targetProtein,
  targetCarbs,
  targetFats
) => {
  try {
    return await db.trainee.update({
      where: {
        id: traineeId
      },
      data: {
        goal,
        target_calories: targetCalories,
        target_protein: targetProtein,
        target_carbs: targetCarbs,
        target_fats: targetFats
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
const insertDailyWeightLog = async (traineeId, weight) => {
  try {
    return await db.daily_weight_logs.create({
      data: {
        trainee_id: traineeId,
        value: weight,
        date: new Date()
      }
    });
  } catch (error) {
    console.error(error);
  } finally {
    await db.$disconnect();
  }
};
const getTodayWeightLog = async (traineeId) => {
  try {
    return await db.daily_weight_logs.findFirst({
      where: {
        trainee_id: traineeId,
        date: new Date()
      }
    });
  } catch (error) {
    console.error(error);
  } finally {
    await db.$disconnect();
  }
};
const editDailyWeightLog = async (logId, weight) => {
  try {
    return await db.daily_weight_logs.update({
      where: {
        id: logId
      },
      data: {
        value: weight
      }
    });
  } catch (error) {
    console.error(error);
  } finally {
    await db.$disconnect();
  }
};
const getDailyWeightLogs = async (traineeId) => {
  try {
    return await db.daily_weight_logs.findMany({
      where: {
        trainee_id: traineeId
      }
    });
  } catch (error) {
    console.error(error);
  } finally {
    await db.$disconnect();
  }
};
const createExercise = async (
  name,
  description,
  videoUrl,
  isPrivate,
  userId
) => {
  try {
    return await db.exercise.create({
      data: {
        name,
        description,
        video_link: videoUrl,
        is_private: isPrivate,
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
const getPublicExercises = async () => {
  try {
    return await db.exercise.findMany({
      where: {
        is_private: false
      }
    });
  } catch (error) {
    console.error(error);
  } finally {
    await db.$disconnect();
  }
};
const getPrivateExercises = async (userId) => {
  try {
    return await db.exercise.findMany({
      where: {
        is_private: true,
        created_by_id: userId
      }
    });
  } catch (error) {
    console.error(error);
  } finally {
    await db.$disconnect();
  }
};
const createWorkout = async (name, trainee_id, scheduled_date) => {
  try {
    return await db.training_session.create({
      data: {
        name,
        scheduled_date,
        completed: false,
        trainee: {
          connect: {
            id: trainee_id
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
const createWorkoutInstance = async (
  training_id,
  exerciseId,
  sets,
  reps,
  weight
) => {
  try {
    return await db.training_instances.create({
      data: {
        set_number: sets,
        reps,
        weight,
        training_session: {
          connect: {
            id: training_id
          }
        },
        exercise: {
          connect: {
            id: exerciseId
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
const getUpcomingWorkouts = async (traineeId) => {
  try {
    return await db.$queryRaw`SELECT 
    ts.name AS name,
    ts.scheduled_date,
    ts.id,
    JSON_AGG(
        JSON_BUILD_OBJECT(
            'exerciseName', e.name,
            'sets', ti.set_number,
            'reps', ti.reps,
            'weight', ti.weight,
            'id', ti.id
        )
    ) AS data
FROM 
    training_session ts
JOIN 
    training_instances ti ON ts.id = ti.training_id
JOIN 
    exercise e ON ti.exercise_id = e.id
WHERE 
    ts.trainee_id = ${traineeId} 
    AND ts.completed = false
GROUP BY 
    ts.id, ts.name, ts.scheduled_date
ORDER BY 
    ts.scheduled_date DESC;
`;
  } catch (error) {
    console.error(error);
  } finally {
    await db.$disconnect();
  }
};
const getWorkouts = async (traineeId) => {
  try {
    return await db.$queryRaw`SELECT 
    ts.name AS name,
    ts.scheduled_date,
    ts.id,
    ts.completed,
    JSON_AGG(
        JSON_BUILD_OBJECT(
            'exerciseName', e.name,
            'sets', ti.set_number,
            'reps', ti.reps,
            'weight', ti.weight,
            'id', ti.id
        )
    ) AS data
FROM 
    training_session ts
JOIN 
    training_instances ti ON ts.id = ti.training_id
JOIN 
    exercise e ON ti.exercise_id = e.id
WHERE 
    ts.trainee_id = ${traineeId}
GROUP BY 
    ts.id, ts.completed, ts.name, ts.scheduled_date
ORDER BY 
    ts.scheduled_date DESC;
`;
  } catch (error) {
    console.error(error);
  } finally {
    await db.$disconnect();
  }
};
const completeWorkout = async (workoutId) => {
  try {
    return await db.training_session.update({
      where: {
        id: workoutId
      },
      data: {
        completed: true
      }
    });
  } catch (error) {
    console.error(error);
  } finally {
    await db.$disconnect();
  }
};
const updateWorkoutInstance = async (instanceId, sets, reps, weight) => {
  try {
    return await db.training_instances.update({
      where: {
        id: instanceId
      },
      data: {
        set_number: sets,
        reps,
        weight
      }
    });
  } catch (error) {
    console.error(error);
  } finally {
    await db.$disconnect();
  }
};
const getTrainingInstances = async (trainingId) => {
  try {
    return await db.training_instances.findMany({
      where: {
        training_id: trainingId
      }
    });
  } catch (error) {
    console.error(error);
  } finally {
    await db.$disconnect();
  }
};
const getExercise = async (exerciseId) => {
  try {
    return await db.exercise.findUnique({
      where: {
        id: exerciseId
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
  getTrainee,
  createTrainee,
  getTrainees,
  getTrainerFromUserId,
  getTraineeFromUserId,
  getUnapprovedTrainees,
  approveTrainee,
  updateTrainee,
  updateTraineeSummary,
  insertDailyWeightLog,
  editDailyWeightLog,
  getTodayWeightLog,
  getDailyWeightLogs,
  createExercise,
  getPublicExercises,
  getPrivateExercises,
  createWorkout,
  createWorkoutInstance,
  getUpcomingWorkouts,
  getWorkouts,
  getTrainingInstances,
  getExercise,
  completeWorkout,
  updateWorkoutInstance
};
