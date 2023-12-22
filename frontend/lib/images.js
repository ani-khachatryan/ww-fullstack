export async function getNextImage(uuid) {
    let url = ""
    if (!uuid) {
        url = `${process.env.NEXT_PUBLIC_BACKEND_HOST}/api/random/`
    } else{
        url = `${process.env.NEXT_PUBLIC_BACKEND_HOST}/api/random/not/${uuid}`
    }
    const res = await fetch(url)
    return res.json()
}