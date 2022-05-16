import React, { memo } from "react";
import { View } from "react-native";
import SkeletonPlaceholder from "react-native-skeleton-placeholder";

const LoadingList = () => {
  return (
    <>
      {Array.from({ length: 3 }).map((_, index) => (
        <View key={index} style={{ marginBottom: 12 }}>
          <SkeletonPlaceholder>
            <SkeletonPlaceholder.Item>
              <SkeletonPlaceholder.Item
                width="100%"
                height={70}
                borderRadius={4}
              />
            </SkeletonPlaceholder.Item>
          </SkeletonPlaceholder>
        </View>
      ))}
    </>
  );
};

export default memo(LoadingList);
