import axios from "axios"

export const baseUrl = "https://bayut.p.rapidapi.com"

export const fetchApi = async(url) => {
    const {data} = await axios((url), {
        headers: {
    'X-RapidAPI-Key': 'f0322fe01bmshf3e0fb6a211f266p1bc484jsn25fc6ab2a181',
    'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
  }
    })

    return data
} 

