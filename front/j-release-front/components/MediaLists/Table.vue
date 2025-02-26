<script setup>
const props = defineProps({
    mediaList: Object,
});
</script>

<template>
    <tr>
        <td>{{ mediaList.genre }}</td>
        <td>{{ mediaList.name }}</td>
        <td>{{ mediaList.url }}</td>
        <td>{{ media.media_user.company_name }}</td>
        <td>{{ media.genre }}</td>
    </tr>
</template>