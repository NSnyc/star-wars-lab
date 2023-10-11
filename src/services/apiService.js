const BASE_URL = 'https://swapi.dev/api/starships'

export async function getStarships(page) {
    try {
    const res = await fetch(`${BASE_URL}?page=${page}`)
    return res.json()
    } catch (err) {
    console.log(err)
    }
}

export async function getShipData(shipId) {
    try {
    const res = await fetch(`${BASE_URL}/${shipId}`)
    return res.json()
    } catch (err) {
    console.log(err)
    }
}

export async function getPilots(pilotsArray) {
    try {
    const promises = pilotsArray.map(pilotUrl => fetch(pilotUrl).then(res => res.json()))
    const pilotData = await Promise.all(promises)
    return pilotData
    } catch (err) {
    console.log(err)
    }
}