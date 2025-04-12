import { View, Text } from 'react-native'
import React from 'react'
import { ActivityIndicator } from 'react-native-web'

const Loading = ({ size = 'large', colors = theme.colors.primary }) => {
    return (
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <ActivityIndicator size={size} color={color} />
        </View>
    )
}

export default Loading