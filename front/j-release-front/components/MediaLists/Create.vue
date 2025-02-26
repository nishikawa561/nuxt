<script setup>
const props = defineProps({
    mediaLists: Array
})
</script>

<template>
    <v-card loading title="メディア一覧" text="" class="ma-5">
        <v-table
            fixed-header
            height="600px"
        >
            <thead>
                <tr>
                    <th class="text-left">
                        全てを選択
                    </th>
                    <th class="text-left">
                        メディア種類
                    </th>
                    <th class="text-left">
                        メディア名
                    </th>
                    <th class="text-left">
                        URL
                    </th>
                    <!-- <th class="text-left">
                        会社名
                    </th> -->
                    <!-- <th class="text-left">
                        配信手段
                    </th> -->
                </tr>
            </thead>
            <tbody>

                <MediaListTable
                    v-for="mediaList in mediaLists"
                    :key="mediaList.id"
                    :mediaList="mediaList"
                />
<!-- 
            <tr
                v-for="mediaList in mediaLists"
                :key="mediaList.id"
                :mediaList="mediaList"
            >
                <td>{{ mediaList.genre }}</td>
                <td>{{ mediaList.name }}</td>
                <td>{{ mediaList.url }}</td>
                <td>{{ media.media_user.company_name }}</td>
                <td>{{ media.genre }}</td>
            </tr> -->
            <!-- <h1 v-else>該当なし</h1> -->

            </tbody>
        </v-table>
    </v-card>
</template>