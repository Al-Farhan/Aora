import { View, Text, Image } from 'react-native'
import React, { useState } from 'react'

const VideoCard = ({ title, creator, avatar, thumbnail, video }) => {
    const [play, setPlay] = useState(false);
  return (
    <View className="flex flex-col items-center px-4 mb-14">
      <View className="flex flex-row gap-3 items-start">
        <View className="flex justify-center items-center flex-row flex-1">
            <View className="w-[46px] h-[46px] rounded-lg border border-secondary flex justify-center items-center p-0.5">
                <Image
                    source={{ uri: avatar }}
                    className="w-full h-full rounded-lg"
                />
            </View>

            <View className="flex justify-center flex-1 ml-3 gap-y-1">
                <Text 
                    className="font-psemibold text-sm text-white"
                    numberOfLines={1}
                >
                    {title}
                </Text>
            </View>
        </View>
      </View>
    </View>
  )
}

export default VideoCard