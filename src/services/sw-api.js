const baseUrl = 'https://swapi.dev/api'

// Request info
// GET to:
// https://www.dnd5eapi.co/api.monsters

export async function getStarshipsList() {
  const res = await fetch(`${baseUrl}/starships`)
  return res.json()
}

export async function getStartshipsDetails(shipIdx) {
  const res = await fetch(`${baseUrl}/startships/${shipIdx}`)
  return res.json()
}