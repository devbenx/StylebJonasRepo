import axios from "axios";
import { useEffect, useState, useId } from "react";

// Custom hook for accessing Stylebjonas database | API => services
const useCollection = ( database, collection ) => {

      // const endPoint = `/api/mongodb/collection`
      const endPoint = `https://www.stylebjonas.com/api/mongodb/collection`

      const [data, setData] = useState(null);

      const [dataLoaded, setDataLoaded] = useState(false);

      const [refreshKey, setRefreshKey] = useState(0)

      useEffect(() => {

            getData();

      }, [refreshKey])

      const getData = async () => {
            const params = { params: { collection: collection, database: database } };
            const res = await axios.get(endPoint, params)
                  .then(response => {
                        setData(response.data.data)
                        setDataLoaded(true)
                        return response.data.data
                  })
                  .catch( error => {
                        // handle error
                        setDataLoaded(false)
                        if (error) return console.log(error);
                  })

            return res
      }

      const deletePost = async (id) => {
            console.log('deleting post...');

            const params =  { database: database , collection: collection, data: { id: id } };

            await axios.delete(endPoint, { data: params });

            setRefreshKey(refreshKey + 1)
      }

      const editPost = async (event, selectedOne) => {
            event.preventDefault();
            console.log('editing post...');

            if(!event.target.category.value === collection){
                  
                  addPost(event)
                  deletePost(selectedOne._id)

            } else {
                  const body = {
                        title:  event.target.title.value,
                        description: event.target.description.value,
                        price: event.target.price.value,
                        duration:  event.target.duration.value,
                        category: event.target.category.value,
                  };
      
                  const params =  { collection: collection, data: body, id: selectedOne._id };
                  
                  await axios.put(endPoint, params);
            }

            setRefreshKey(refreshKey + 1)
      }

      const addPost = async (event) => {
            event.preventDefault();
            console.log('adding post...');

            const body = {
                  title:  event.target.title.value,
                  description: event.target.description.value,
                  price: event.target.price.value,
                  duration:  event.target.duration.value,
                  category: event.target.category.value,
            };

            const params =  { collection: event.target.category.value, data: body };
            
            await axios.post(endPoint, params);

            setRefreshKey(refreshKey + 1)
      }

      return { data, 
            dataLoaded, 
            actions: { editPost, addPost, deletePost },
            ui:{setRefreshKey} 
      };
}

export default useCollection;