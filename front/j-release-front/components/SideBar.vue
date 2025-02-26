<script setup>
</script>

<template>
    <v-card>
        <v-layout>
            <v-navigation-drawer
                permanent
                v-model="drawer"
            >
                <v-list
                nav
                dense
                >
                    <v-list-item prepend-icon="mdi-view-dashboard" title="Home" value="home"></v-list-item>
                    <v-list-item prepend-icon="mdi-forum" title="About" value="about"></v-list-item>
                    <v-list-item prepend-icon="mdi-forum" title="About" value="about"></v-list-item>
                    <v-list-item prepend-icon="mdi-forum" title="About" value="about"></v-list-item>
                    <v-list-item prepend-icon="mdi-forum" title="About" value="about"></v-list-item>
                    <v-list-item prepend-icon="mdi-forum" title="About" value="about"></v-list-item>
                </v-list>
            </v-navigation-drawer>
            <v-main style="height: 90vh"></v-main>
        </v-layout>
    </v-card>
</template>