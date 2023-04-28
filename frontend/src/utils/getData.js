async function getData(uri) {
    const res = await fetch(uri)
    return res.json()
}

export default getData