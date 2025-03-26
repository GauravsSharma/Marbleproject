import { createContext, useContext, useState } from "react";
import { account, databases, ID, storage } from "../lib/appwrite";
import { Query } from "appwrite";

const Appwrite = createContext(null);

export const useAppwrite = () => {
  return useContext(Appwrite);
};
export const AppwriteContextProvider = ({ children }) => {
  const [loggedInUser, setLoggedInUser] = useState(null);
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
      const result = storage.getFilePreview(
        import.meta.env.VITE_BUCKET_ID,
        fileId
      );
      console.log(result);
      return result;
    } catch (error) {
      console.log("Error in getting file download URL", error);
    }
  };
  //create document
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
  // Get All Documents
  const getAllDocuments = async () => {
    try {
      const result = await databases.listDocuments(
        import.meta.env.VITE_DATABASE_ID,
        import.meta.env.VITE_COLLECTION_ID,
        [
          Query.limit(10), // Fetch only 10 documents
        ]
      );
      console.log(result);
      return result;
    } catch (error) {
      console.log("Error in fetching all documents", error);
    }
  };
  const getDocumentsByQuery = async (category) => {
    try {
      const result = await databases.listDocuments(
        import.meta.env.VITE_DATABASE_ID,
        import.meta.env.VITE_COLLECTION_ID,
        [
          Query.equal("category", category)// Fetch only 10 documents
        ]
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


  const login = async (email, password) => {
    await account.createEmailPasswordSession(email, password);
    setLoggedInUser(await account.get());
  };
  const signup = async (email, password, name, phone) => {
    try {
      console.log(password, phone);

      const res = await account.create(ID.unique(), email, password, name);
      if (res.name) {
        await login(email, password);
        const result = await account.updatePhone(
          phone, // phone
          password // password
        );
        setLoggedInUser(result);
        return result;
      }
    } catch (error) {
      console.log("Error in signup", error);
      throw new Error(error.message);
    }
  };

  const logout = async () => {
    await account.deleteSession("current");
    setLoggedInUser(null);
  };
   
  const sendMessage = (name, images, total_price, phone = "+917351586553") => {
    // Formatting images with their respective prices
    const imageDetails = images.length > 0
      ? images.map((img, index) => `${index + 1}. ${img.thumbnail} \n   Price: ₹${img.price}`).join("\n\n")
      : "No images provided.";
  
    // Constructing the message
    const message = `Hi, I'm ${name}. 👋\n\nI'm interested in the following designs:\n\n${imageDetails}\n\nTotal Price: ₹${total_price}.\n\nI would love to know more about them. Can we have a quick chat? 😊`;
  
    // Encoding and opening WhatsApp link
    const encodedMessage = encodeURIComponent(message);
    window.open(`sms:${phone}?body=${encodedMessage}`);

  };
    const getCurrentLoggedInUser = async()=>{
          try {
              const result = await account.get();
              setLoggedInUser(result)
          } catch (error) {
              console.log(error)
          }
      }
  const addReview= async(review,product)=>{
    try {
      const result = await databases.createDocument(
        import.meta.env.VITE_DATABASE_ID,
        import.meta.env.VITE_REVIEW_COLLECTION_ID,
        ID.unique(),
        review
      );
      let reviews = product.reviews.length>0?product.reviews:[];
      reviews = [result.$id,...reviews]
      return await updateDocument(product.$id,{reviews});
    } catch (error) {
      console.log("Error in adding document", error);
    }
  }
  return (
    <Appwrite.Provider
      value={{
        uploadImage,
        getDownloadUrl,
        getAllDocuments,
        getDocumentById,
        updateDocument,
        deleteDocument,
        createDocument,
        login,
        signup,
        logout,
        loggedInUser,
        sendMessage,
        getDocumentsByQuery,
        getCurrentLoggedInUser,
        addReview
      }}
    >
      {children}
    </Appwrite.Provider>
  );
};
