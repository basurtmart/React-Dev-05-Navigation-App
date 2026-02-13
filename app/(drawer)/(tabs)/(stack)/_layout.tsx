import { Ionicons } from '@expo/vector-icons';
import { DrawerActions } from '@react-navigation/native';
import { Stack, useNavigation, useRouter } from 'expo-router';

const StackLayout = () => {
    const navigation = useNavigation();
    const router = useRouter();

    const onHeaderLeftClick = (canGoBack: boolean) => {
        if (router.canGoBack()) {
            router.back();
            return;
        }

        // 🔍 buscar el primer padre que sea drawer
        let parent = navigation.getParent();

        while (parent) {
            const state = parent.getState?.();

            if (state?.type === 'drawer') {
                parent.dispatch(DrawerActions.openDrawer());
                return;
            }

            parent = parent.getParent();
        }

        console.warn('Drawer navigator not found');
    }

    return <Stack
        screenOptions={{
            // headerShown: true,
            headerShadowVisible: false,
            contentStyle: {
                backgroundColor: 'white',
            },
            headerLeft: ({ tintColor, canGoBack }) => (
                <Ionicons
                    name={canGoBack ? 'arrow-back-outline' : 'grid-outline'}
                    className='mr-5'
                    size={20}
                    onPress={() => onHeaderLeftClick(!!canGoBack)} />
            ),
        }}>
        <Stack.Screen
            name="home/index"
            options={{
                title: 'Inicio',
            }} />
        <Stack.Screen
            name="products/index"
            options={{
                title: 'Productos',
            }} />
        <Stack.Screen
            name="profile/index"
            options={{
                title: 'Perfil',
            }} />
        <Stack.Screen
            name="settings/index"
            options={{
                title: 'Ajustes',
            }} />
    </Stack>;
}

export default StackLayout