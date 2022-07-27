import axios from "axios";
import { useEffect, useState } from "react";

// Custom hook for accessing Stylebjonas database | API => services
const useDatabase = ( database ) => {

      // const endPointDatabase = `/api/mongodb/database`
      const endPointDatabase = `https://www.stylebjonas.com/api/mongodb/database`

      // const endPointCollection = `/api/mongodb/collection`
      const endPointCollection = `https://www.stylebjonas.com/api/mongodb/collection`

      const [collectionNames, setCollectionNames] = useState(null);

      const [isErrorEncountered, setIsErrorEncountered] = useState(false);

      const [isLoaded, setIsLoaded] = useState(false);

      const [refreshKey, setRefreshKey] = useState(0)

      useEffect(() => {

            getCollectionNames();

      }, [refreshKey])

      const getCollectionNames = async () => {
            const params = { params: { database: database } };
            const res = await axios.get(endPointDatabase, params)
                  .then(response => {

                        setCollectionNames(response.data.data)

                        setIsLoaded(true)
                        setIsErrorEncountered(false)

                        return response.data.data
                  })
                  .catch( error => {
                        // handle error
                        setIsLoaded(false)
                        setIsErrorEncountered(true)
                        if (error) return console.log(error);
                  })

            return res
      }

      // const deletePost = async (id) => {
      //       console.log('deleting post...');

      //       const params =  { collection: collection, data: { id: id }};

      //       await axios.delete(endPoint, { data: params });
      // }

      const editPost = async (event, selectedOne) => {
            event.preventDefault();
            console.log('editing post...');
            console.log(event.target.category.value);
            console.log({selectedOne});

            const body = {
                  title:  event.target.title.value,
                  description: event.target.description.value,
                  price: event.target.price.value,
                  duration:  event.target.duration.value,
                  category: event.target.category.value,
            };

            const params =  { database: database, collection: event.target.category.value, data: body, id: selectedOne._id };

            const paramsDelete =  { database: database, collection: selectedOne.category, data: { id: selectedOne._id } };

            if(selectedOne.category !== event.target.category.value){
                  console.log('editing collection...');

                  if(!collectionNames.includes(event.target.category.value)){
                        // If collection doesn't exist at database
                        createCollection(event.target.category.value)
                        await axios.post(endPointCollection, params)
                        await axios.delete(endPointCollection, { data: paramsDelete });
      
                  } else {
                        //Collection exists    
                        console.log('Collection exists...');
                        console.log('posting...');
                        await axios.post(endPointCollection, params)
                        console.log('deleting...');
                        await axios.delete(endPointCollection, { data: paramsDelete });
                  }

                  // const AxiosReq1 = axios.post(endPointCollection, params);
                  // const AxiosReq2 = axios.delete(endPointCollection, { data: paramsDelete });

                  // axios.all([AxiosReq1, AxiosReq2]).then(axios.spread((...responses) => {
                  //       const responseOne = responses[0]
                  //       const responseTwo = responses[1]
                  //       console.log({responseOne})
                  //       console.log({responseTwo})
                  //     })).catch(errors => {
                  //       // react on errors.
                  //     })
            } else {
                  console.log('same collection...');
                  await axios.put(endPointCollection, params);
            }


      }

      const createCollection = (name) => {

            const params =  { database: database , collection: name };

            axios.post(endPointDatabase, params);
      }
      const renameCollection = (name, rename) => {

            const params =  { database: database, collection: name.toLowerCase(), rename: rename.toLowerCase() };

            axios.put(endPointDatabase, params);

      }
      // Collections
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
            await axios.post(endPointCollection, params);
      }

      const insertOne = (event) => {
            event.preventDefault();

            console.log('adding one...');

            if(collectionNames.includes(event.target.category.value)){

                  addPost(event)
            } else {

                  createCollection(event.target.category.value)
                  addPost(event)
            }

            setRefreshKey(refreshKey + 1)
      }

      return {    

            databaseName: database,
            insertOne,
            collectionNames, 
            renameCollection,
            isLoaded, 
            isErrorEncountered,
            actions: { 
                  createCollection,
                  addPost,
                  editPost,
            } 
      }
}

export default useDatabase;