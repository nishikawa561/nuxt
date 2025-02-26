<script setup>
const loading = ref(false);

const mediaIds = ref([]);
const mediaListName = ref("");
const mediaListMailSender = ref("");

const route = useRoute();
const router = useRouter();
const dialog = ref(false);

async function upload() {
    const body = {
        mediaIds: mediaIds.value,
        sender: mediaListMailSender.value,
        name: mediaListName.value,
    }

    await useFetchPostMedia({
        body: body
    }).then((result) => {
        console.log(result);
    });
    window.location.href = 'http://pr.jiji.local/corporation/media-list/index';
}

const searchContents = ref({
    release_type: "",
    genre1: "",
    genre2: "",
    genre3: "",
    genre4: "",
    genre5: "",
    genre6: "",
    genre7: "",
    count: "",
})

const onChangeMediaLists = () => {
    router.push({
        query: {
            release_type: searchContents.value.release_type,
            genre1: searchContents.value.genre1,
            genre2: searchContents.value.genre2,
            genre3: searchContents.value.genre3,
            genre4: searchContents.value.genre4,
            genre5: searchContents.value.genre5,
            genre6: searchContents.value.genre6,
            genre7: searchContents.value.genre7,
            count: searchContents.value.count,
        }
    });
}

const {data: mediaLists, refresh} = await useFetchMedia({
    release_type: route.query.release_type,
    genre1: route.query.genre1,
    genre2: route.query.genre2,
    genre3: route.query.genre3,
    genre4: route.query.genre4,
    genre5: route.query.genre5,
    genre6: route.query.genre6,
    genre7: route.query.genre7,
    count: route.query.count,
});


console.log(route.params.value);

watch (
    () => route.query,
    () => {
        window.location.reload(true);
    }
)
</script>

<template>
    <NuxtLayout>
        <v-container>
            <v-card title="メディアリスト登録" text="" class="ma-5">
                <form action="">
                    <v-row no-gutters>
                        <v-col cols="12" class="pa-2">
                            <v-radio-group
                                label="プレスリリース配信方法"
                                v-model="searchContents.release_type"
                                inline
                            >
                                <v-radio
                                    label="メールとFAX"
                                    :key="0"
                                    :value="0"
                                ></v-radio>
                                <v-radio
                                    label="メール"
                                    :key="1"
                                    :value="1"
                                ></v-radio>
                            </v-radio-group>
                        </v-col>
                        <v-col cols="9" class="pa-2">
                            <v-sheet>
                                <label style="color:grey;">媒体種類</label>
                                <v-col class="d-flex">
                                    <v-checkbox label="TV番組" v-model="searchContents.genre1"></v-checkbox>
                                    <v-checkbox label="雑誌" v-model="searchContents.genre2"></v-checkbox>
                                    <v-checkbox label="新聞" v-model="searchContents.genre3"></v-checkbox>
                                    <v-checkbox label="インターネットサイト" v-model="searchContents.genre4"></v-checkbox>
                                    <v-checkbox label="フリーペーパー" v-model="searchContents.genre5"></v-checkbox>
                                    <v-checkbox label="ラジオ番組" v-model="searchContents.genre6"></v-checkbox>
                                    <v-checkbox label="通信社" v-model="searchContents.genre7"></v-checkbox>
                                </v-col>
                            </v-sheet>
                        </v-col>
                        <v-col cols="6">
                            <v-sheet class="pl-2">
                                <v-radio-group
                                    label="媒体の抽出方法"
                                    v-model="searchContents.count"
                                    inline
                                >
                                    <v-radio
                                        label="300媒体を自動で抽出"
                                        value="300"
                                    ></v-radio>
                                    <v-radio
                                        label="350媒体を自動で抽出し、50件削除する"
                                        value="350"
                                    ></v-radio>
                                    <v-radio
                                        label="件数を制限しない"
                                        value="no_limit"
                                    ></v-radio>
                                </v-radio-group>
                            </v-sheet>
                        </v-col>
                    </v-row>
                    <v-btn color="indigo" class="ma-4" @click="onChangeMediaLists">
                        絞り込む
                    </v-btn>
                </form>
            </v-card>
            <v-card :loading=loading title="メディア一覧" text="" class="ma-5">
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
                            <th class="text-left">
                                会社名
                            </th>
                            <th class="text-left">
                                配信手段
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr
                        v-if="mediaLists.length"
                        v-for="media in mediaLists"
                        :key="media.id"
                    >
                        <td>
                            <v-checkbox
                            color="indigo"
                            :value="media.id"
                            hide-details
                            v-model="mediaIds"
                            ></v-checkbox>
                        </td>
                        <td>{{ media.genre }}</td>
                        <td>{{ media.name }}</td>
                        <td>{{ media.url }}</td>
                        <td>{{ media.media_user.company_name }}</td>
                        <td>{{ media.media_user.fax === null ? 'メール' : 'メール&FAX' }}</td>
                    </tr>
                    <h1 v-else>該当なし</h1>
                    </tbody>
                </v-table>
            </v-card>
            <v-row justify="center">
                <v-dialog
                v-model="dialog"
                persistent
                width="1024"
                >
                    <template v-slot:activator="{ props }">
                        <v-btn
                        color="indigo"
                        v-bind="props"
                        >
                        登録する
                        </v-btn>
                    </template>
                    <v-card>
                        <v-card-title>
                            <span class="text-h5">メディアリスト登録</span>
                        </v-card-title>
                        <v-card-text>
                            <v-container>
                                <v-row>
                                    <v-col cols="12">
                                        <v-text-field
                                        v-model="mediaListName"
                                        label="メディアリスト名*"
                                        required
                                        ></v-text-field>
                                    </v-col>
                                    <v-col cols="12">
                                        <v-text-field
                                        v-model="mediaListMailSender"
                                        label="メール送信者名*"
                                        required
                                        ></v-text-field>
                                    </v-col>
                                </v-row>
                            </v-container>
                            <small>*必須</small>
                        </v-card-text>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn
                                color="blue-darken-1"
                                variant="text"
                                @click="dialog = false"
                            >
                                閉じる
                            </v-btn>
                            <v-btn
                                color="blue-darken-1"
                                variant="text"
                                @click="upload"
                            >
                                登録する
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
            </v-row>
        </v-container>
    </NuxtLayout>
</template>