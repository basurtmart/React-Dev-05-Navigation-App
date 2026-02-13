import CustomButton from '@/components/shared/CustomButton'
import { DrawerActions } from '@react-navigation/native'
import { Link, router, useNavigation } from 'expo-router'
import React from 'react'
import { View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const HomeScreen = () => {

  const navigation = useNavigation();

  const onToggleDrawer = () => {
    navigation.dispatch(DrawerActions.toggleDrawer);
  }
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View className='px-10 mt-5'>

        <CustomButton
          className='mb-2'
          color='primary'
          onPress={() => router.push('/products')} >
          Productos
        </CustomButton>

        <CustomButton
          className='mb-2'
          color='secondary'
          onPress={() => router.push('/profile')} >
          Perfil
        </CustomButton>

        <CustomButton
          className='mb-2'
          color='tertiary'
          onPress={() => router.push('/settings')} >
          Ajustes
        </CustomButton>

        <Link href="/products" asChild>
          <CustomButton
            variant='text-only'
            className='mb-10'
            color='primary' >
            Productos
          </CustomButton>
        </Link>

        <CustomButton
          onPress={onToggleDrawer}>
          Abrir menú
        </CustomButton>

        {/* <Link href="/products" className='mb-5'>
          Productos{' '}
        </Link>
        <Link href="/profile" className='mb-5'>
          Perfil{' '}
        </Link>
        <Link href="/settings" className='mb-5'>
          Ajustes{' '}
        </Link> */}
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen