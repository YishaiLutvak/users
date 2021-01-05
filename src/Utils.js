import axios from 'axios'


const getAllItems = (url) =>
{
  return axios.get(url)
}

const getItem = (url,id) =>
{
  return axios.get(url+ "/" + id)
}

const creatItem = (url,obj) =>
{
  return axios.post(url,obj)
}

const updateItem = (url,id,obj) =>
{
  return  axios.put(url + "/" + id,obj)
}

const deleteItem = (url,id) =>
{
  return axios.delete(url+"/"+id)
}


export default {getAllItems,getItem,creatItem,updateItem,deleteItem}