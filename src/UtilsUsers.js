import axios from 'axios'

const url = "https://jsonplaceholder.typicode.com/users"

const getItemsIDs = async() =>
{
  let resp = await axios.get(url)
  let users = resp.data
  let ids = users.map(x=>x.id)
  return ids
}

export default {getItemsIDs}