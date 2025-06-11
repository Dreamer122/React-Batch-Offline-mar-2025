 import { databases } from "../appwrite/Config"
 import { Query } from "appwrite"
 export const getAllPost=async(userId)=>{
    try{
     
      const documents=await databases.listDocuments(
        import.meta.env.VITE_DATABASEID,
        import.meta.env.VITE_POST_COLLECTIONID,
        [
          Query.equal("userId",userId)
        ]
      )
      // setAllDocs(documents.documents)

      console.log(documents)
      return documents.documents

    }
    catch(error){
      console.log("error occured while fetching documents",error)
    }
   
  }