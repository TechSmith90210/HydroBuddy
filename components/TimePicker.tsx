import React, { useEffect, useRef, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

const HOURS = Array.from({ length: 12 }, (_, i) => i + 1);
const MINUTES = Array.from({ length: 60 }, (_, i) => i);
const AM_PM = ["AM", "PM"];

export default function CustomTimePicker({
  onTimeChange,
}: {
  onTimeChange: (time: string) => void;
}) {
  const now = new Date();
  const currentHour = now.getHours();
  const hour12 = currentHour % 12 || 12;
  const ampm = currentHour >= 12 ? "PM" : "AM";
  const currentMinute = now.getMinutes();

  const [hour, setHour] = useState(hour12);
  const [minute, setMinute] = useState(currentMinute);
  const [amPm, setAmPm] = useState(ampm);

  const formatNumber = (n: number) => (n < 10 ? `0${n}` : `${n}`);
  const selectedTimeString = `${hour}:${formatNumber(minute)} ${amPm}`;

  useEffect(() => {
    onTimeChange(selectedTimeString);
  }, [hour, minute, amPm]);

  return (
    <View style={styles.container}>
      <View style={styles.pickerRowContainer}>
        <View style={styles.selectedRowBorderTop} />
        <View style={styles.selectedRowBorderBottom} />
        <View style={styles.pickerRow}>
          <Wheel
            data={HOURS}
            selected={hour}
            onSelect={setHour}
            formatter={(n) => `${n}`}
          />
          <Text style={styles.colon}>:</Text>
          <Wheel
            data={MINUTES}
            selected={minute}
            onSelect={setMinute}
            formatter={formatNumber}
          />
          <Wheel
            data={AM_PM}
            selected={amPm}
            onSelect={setAmPm}
            formatter={(val) => val}
          />
        </View>
      </View>
    </View>
  );
}

type WheelProps<T> = {
  data: T[];
  selected: T;
  onSelect: (val: T) => void;
  formatter: (val: T) => string;
};

function Wheel<T extends string | number>({
  data,
  selected,
  onSelect,
  formatter,
}: WheelProps<T>) {
  const scrollRef = useRef<ScrollView>(null);

  useEffect(() => {
    const index = data.findIndex((val) => val === selected);
    if (index !== -1) {
      scrollRef.current?.scrollTo({ y: index * 40, animated: true });
    }
  }, []);

  return (
    <ScrollView
      ref={scrollRef}
      style={styles.wheel}
      snapToInterval={40}
      decelerationRate={0.3}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingVertical: 40 }}
      onMomentumScrollEnd={(e) => {
        const index = Math.round(e.nativeEvent.contentOffset.y / 40);
        onSelect(data[index]);
      }}
    >
      {data.map((val, i) => (
        <View key={i} style={styles.wheelItem}>
          <Text
            style={[
              styles.wheelText,
              val === selected && styles.selectedWheelText,
            ]}
          >
            {formatter(val)}
          </Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  pickerRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  wheel: {
    height: 120,
    width: 60,
  },
  wheelItem: {
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  wheelText: {
    fontSize: 18,
    color: "black",
    opacity: 0.4,
  },
  selectedWheelText: {
    fontSize: 20,
    fontWeight: "500",
    opacity: 1,
    color: "dodgerblue",
  },
  colon: {
    fontSize: 22,
    fontWeight: "600",
    color: "dodgerblue",
  },
  selectedText: {
    marginTop: 20,
    fontSize: 16,
    fontWeight: "500",
    color: "#333",
  },
  pickerRowContainer: {
    position: "relative",
  },

  selectedRowBorderTop: {
    position: "absolute",
    top: 40,
    left: 0,
    right: 0,
    height: 1,
    backgroundColor: "lightgrey",
  },

  selectedRowBorderBottom: {
    position: "absolute",
    top: 80,
    left: 0,
    right: 0,
    height: 1,
    backgroundColor: "lightgrey",
  },
});
