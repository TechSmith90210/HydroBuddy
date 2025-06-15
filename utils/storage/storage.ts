import { MMKV } from "react-native-mmkv";

export const storage = new MMKV()

export const getIsOnboarded = () => storage.getBoolean("isOnboarded");