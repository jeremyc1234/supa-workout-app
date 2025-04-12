import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ScreenWrapper from '../components/ScreenWrapper'
import HomeIcon from '../assets/icons/home'

const Login = () => {
    return (
        <ScreenWrapper>
            <HomeIcon strokeWidth={2} color={theme.color.primary} />
        </ScreenWrapper>
    )
}

export default Login

const styles = StyleSheet.create({})