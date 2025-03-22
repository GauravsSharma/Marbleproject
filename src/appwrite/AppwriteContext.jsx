import { createContext, useContext } from "react";
import { databases, ID, storage } from "../lib/appwrite";

const Appwrite = createContext(null);

export const useAppwrite = () => {
  return useContext(Appwrite);
};
export const AppwriteContextProvider = ({ children }) => {
  
    // Upload Image
    const uploadImage = async (file) => {
      try {
        const upload = await storage.createFile(
          import.meta.env.VITE_BUCKET_ID,
          ID.unique(),
          file
        );
        console.log(upload);
        return upload;
      } catch (error) {
        console.log("Error in image upload", error);
      }
    };
  
    // Get Download URL
    const getDownloadUrl = (fileId) => {
      try {
        const result =  storage.getFilePreview(
          import.meta.env.VITE_BUCKET_ID, 
          fileId
        );
        console.log(result);
        return result;
      } catch (error) {
        console.log("Error in getting file download URL", error);
      }
    };
  
    // Get All Documents
    const getAllDocuments = async () => {
      try {
        const result = await databases.listDocuments(
          import.meta.env.VITE_DATABASE_ID,
          import.meta.env.VITE_COLLECTION_ID,
          []
        );
        console.log(result);
        return result;
      } catch (error) {
        console.log("Error in fetching all documents", error);
      }
    };
  
    //  Get Document By ID
    const getDocumentById = async (docId) => {
      try {
        const result = await databases.getDocument(
          import.meta.env.VITE_DATABASE_ID,
          import.meta.env.VITE_COLLECTION_ID,
          docId
        );
        console.log(result);
        return result;
      } catch (error) {
        console.log("Error in fetching document by ID", error);
      }
    };
  
    // Update Document
    const updateDocument = async (docId, data) => {
      try {
        const result = await databases.updateDocument(
          import.meta.env.VITE_DATABASE_ID,
          import.meta.env.VITE_COLLECTION_ID,
          docId,
          data
        );
        console.log("Document updated:", result);
        return result;
      } catch (error) {
        console.log("Error in updating document", error);
      }
    };
  
    //  Delete Document
    const deleteDocument = async (docId) => {
      try {
        await databases.deleteDocument(
          import.meta.env.VITE_DATABASE_ID,
          import.meta.env.VITE_COLLECTION_ID,
          docId
        );
        console.log("Document deleted:", docId);
      } catch (error) {
        console.log("Error in deleting document", error);
      }
    };
  
    const createDocument = async (data) => {
      try {
        const result = await databases.createDocument(
          import.meta.env.VITE_DATABASE_ID,
          import.meta.env.VITE_COLLECTION_ID,
          ID.unique(),
          data
        );
        console.log("Document added:", result);
        return result;
      } catch (error) {
        console.log("Error in adding document", error);
      }
    };
    return (
      <Appwrite.Provider
        value={{
          uploadImage,
          getDownloadUrl,
          getAllDocuments,
          getDocumentById,
          updateDocument,
          deleteDocument,
          createDocument
        }}
      >
        {children}
      </Appwrite.Provider>
    );
  };
  