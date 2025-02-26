
export default async (body) => {
    const {data, error} = await useFetch(`/api/media-list/store`, {
        method: 'POST',
        body: body
    });

    if (error.value) {
        throw createError({
            ...error.value,
            statusMessage: "送信できませんでした。再度実行してください",
        })
    }

    return {data};
}