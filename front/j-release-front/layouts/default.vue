<script>
export default {
  data: () => ({
        drawer: true,
        rail: true,
        open: ['Users'],
        corp: [
            ['企業ページ', 'mdi-circle-outline'],
            ['プレスキット', 'mdi-circle-outline']
        ],
        cruds: [
            ['一覧', 'mdi-circle-outline'],
            ['登録', 'mdi-circle-outline'],
        ],
    }),
}
</script>

<template>
    <v-app>
        <v-navigation-drawer 
        :rail="rail"
        permanent
        @click="rail = false"
        v-model="drawer"
        color="grey-darken-3"
        >
        <!-- <v-navigation-drawer temporary v-model="drawer" color="grey-darken-3"> -->
            <v-list v-model:opened="open">
                <v-list-item title="企業管理画面"></v-list-item>
                <v-divider></v-divider>
                <v-list-item title="株式会社テスト" value=""></v-list-item>
                <v-divider></v-divider>
                <v-list-group value="プレスリリース">
                    <template v-slot:activator="{ props }">
                        <v-list-item
                            prepend-icon="mdi-newspaper-variant-multiple-outline"
                            v-bind="props"
                            title="プレスリリース"
                        ></v-list-item>
                    </template>
                    <v-list-item
                        v-for="([title, icon], i) in cruds"
                        :key="i"
                        :value="title"
                        :title="title"
                        :prepend-icon="icon"
                    ></v-list-item>
                </v-list-group>
                <v-list-group value="メディアリスト">
                    <template v-slot:activator="{ props }">
                        <v-list-item
                            prepend-icon="mdi-format-list-bulleted"
                            v-bind="props"
                            title="メディアリスト"
                        ></v-list-item>
                    </template>

                    <v-list-item
                        v-for="([title, icon], i) in cruds"
                        :key="i"
                        :value="title"
                        :title="title"
                        :prepend-icon="icon"
                    ></v-list-item>
                </v-list-group>
                <v-list-group value="企業ページ">
                    <template v-slot:activator="{ props }">
                        <v-list-item
                            prepend-icon="mdi-file-outline"
                            v-bind="props"
                            title="企業ページ"
                        ></v-list-item>
                    </template>

                    <v-list-item
                        v-for="([title, icon], i) in corp"
                        :key="i"
                        :value="title"
                        :title="title"
                        :prepend-icon="icon"
                    ></v-list-item>
                </v-list-group>
                <v-list-group value="ユーザー">
                    <template v-slot:activator="{ props }">
                        <v-list-item
                            prepend-icon="mdi-account"
                            v-bind="props"
                            title="ユーザー"
                        ></v-list-item>
                    </template>

                    <v-list-item
                        v-for="([title, icon], i) in cruds"
                        :key="i"
                        :value="title"
                        :title="title"
                        :prepend-icon="icon"
                    ></v-list-item>
                </v-list-group>
            </v-list>
        </v-navigation-drawer>
        <v-app-bar :elevation="1">
            <v-app-bar-nav-icon @click.stop="rail = !rail"></v-app-bar-nav-icon>
            <!-- <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon> -->
            <v-app-bar-title>
                管理画面
            </v-app-bar-title>
        </v-app-bar>
        <v-main style="background-color:#f4f6f9;">
            <!-- <v-container> -->
                <slot />
            <!-- </v-container> -->
        </v-main>
        <v-footer app>
            <p class="text-right">
                J Release. All rights reserved.
            </p>
        </v-footer>
    </v-app>
</template>

