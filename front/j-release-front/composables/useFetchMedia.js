export default async (filters) => {
    const {data, error, refresh} = await useFetch(`/api/media-list/create`, {
        params: {
            ...filters,
        }
    });

    if (error.value) {
        throw createError({
            ...error.value,
            statusMessage: "該当するメディアがありません。",
        })
    }

    return {data, refresh};
}