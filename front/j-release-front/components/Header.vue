<script setup>
const drawer = useState("drawMenu", () => false)
</script>

<template>
    <v-app-bar collapse dark :elevation="2">
        <v-app-bar-nav-icon @click="$emit(drawMenu === true)"></v-app-bar-nav-icon>
        <v-app-bar-title>
            管理画面
        </v-app-bar-title>
    </v-app-bar>
</template>