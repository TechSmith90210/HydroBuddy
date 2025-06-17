import * as Notifications from "expo-notifications";
import { storage } from "../storage/storage";

const NOTIF_KEY = "hydration_notif_scheduled";

export const scheduleHydrationReminder = async () => {
  const { granted } = await Notifications.requestPermissionsAsync();
  if (!granted) return;

  const alreadyScheduled = storage.getBoolean(NOTIF_KEY);
  if (alreadyScheduled) return;

  await Notifications.scheduleNotificationAsync({
    content: {
      title: "HydroBuddy",
      body: "Time to hydrate! 💧 (Test Notification)",
    },
    trigger: {
      type: Notifications.SchedulableTriggerInputTypes.TIME_INTERVAL,
    seconds: 7200,
    repeats:true
    },
  });

  const scheduled = await Notifications.getAllScheduledNotificationsAsync();
console.log("Scheduled Notifications:", scheduled);

  storage.set(NOTIF_KEY, true);
};

export const cancelAllNotifications = async () => {
  try {
    await Notifications.cancelAllScheduledNotificationsAsync();
    await storage.delete(NOTIF_KEY);
    console.log("Hydration reminders cancelled.");
  } catch (err) {
    console.error("Failed to cancel notifications:", err);
  }
};

export const cancelHydrationReminder = async () => {
  await Notifications.cancelAllScheduledNotificationsAsync();
  storage.delete(NOTIF_KEY);
};

export const isReminderScheduled = async (): Promise<boolean> => {
  return !!storage.getBoolean(NOTIF_KEY);
};
