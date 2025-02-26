export default defineNuxtRouteMiddleware((to,from) => {
    // if (to.path.includes('profile')) {
    //     const user = useSupabaseUser();
    //     if (user.value) {
    //         return;
    //     }
    //     return navigateTo("/login")
    // }
    if (to.path.includes('front')) {
        const isLogin = useFetchLoginUser();
        if (isLogin.value === true) {
            window.location.href('http://pr.jiji.local/corporation/media-list/index');
        }
    }
})