import Ionicons from "@expo/vector-icons/Ionicons";
import { Text, View } from "react-native";

type props = {
  intake: number;
  time: string;
};
export default function IntakeHistoryTile({ intake, time }: props) {
  return (
    <View
      style={{
        backgroundColor: "ghostwhite",
        height: 65,
        width: "100%",
        borderRadius: 12,
        alignItems: "center",
        gap: 10,
        paddingHorizontal: 16,
        flexDirection: "row",
        borderWidth: 0.1,
        borderColor: "black",
        elevation: 1,
        marginTop: 10,
      }}
    >
      <View
        style={{
          backgroundColor: "#3B82F6", // Tailwind's "blue-500"
          padding: 10,
          borderRadius: 12,
        }}
      >
        <Ionicons name="water" size={20} color="white" />
      </View>
      <View
        style={{
          marginLeft: 9,
          justifyContent: "center",
          gap:2,
          height: "100%"
        }}
      >
        <Text
          style={{
            fontSize: 13,
            fontWeight: "600",
            color: "#1f2937", // Tailwind's gray-800
            marginBottom: 2,
          }}
        >
          Water
        </Text>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            gap: 10,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              gap: 5,
            }}
          >
            <Ionicons name="water-outline" size={13} color="black" />
            <Text
              style={{
                fontSize: 10,
                fontWeight: "500",
                color: "black",
              }}
            >
              {intake} ml
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              gap: 5,
            }}
          >
            <Ionicons name="time-outline" size={13} color="black" />
            <Text
              style={{
                fontSize: 10,
                fontWeight: "500",
                color: "black",
              }}
            >
              {time}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
