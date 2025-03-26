import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useAppwrite } from "../../appwrite/AppwriteContext";
 // Ensure you have the correct import
const validationSchema = Yup.object({
  title: Yup.string().required("Title is required"),
  description: Yup.string().required("Description is required"),
  price: Yup.number().positive("Price must be a positive number").required("Price is required"),
  category: Yup.string().oneOf(["floor", "marble", "temple", "wall", "table", "stair"], "Invalid category").required("Category is required"),
  thumbnail: Yup.mixed().required("Thumbnail is required"),
});

const ProductForm = () => {
  const [thumbnailUrl, setThumbnailUrl] = useState("");
  const {createDocument,uploadImage,getDownloadUrl} =  useAppwrite()

  return (
    <Formik
      initialValues={{ title: "", description: "", price: "", category: "", thumbnail: null }}
      validationSchema={validationSchema}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        try {
          if (values.thumbnail) {
            const upload = await uploadImage(values.thumbnail);
            const url = getDownloadUrl(upload.$id);
            setThumbnailUrl(url);
            values.thumbnail = url;
          }
          await createDocument(values);
          resetForm();
        } catch (error) {
          console.error("Form submission error", error);
        }
        setSubmitting(false);
      }}
    >
      {({ setFieldValue, isSubmitting }) => (
        <Form className="p-4 max-w-md mx-auto bg-white shadow-md rounded-lg">
          <div>
            <label>Title</label>
            <Field name="title" className="border p-2 w-full" />
            <ErrorMessage name="title" component="div" className="text-red-500" />
          </div>
          <div>
            <label>Description</label>
            <Field name="description" as="textarea" className="border p-2 w-full" />
            <ErrorMessage name="description" component="div" className="text-red-500" />
          </div>
          <div>
            <label>Price</label>
            <Field name="price" type="number" className="border p-2 w-full" />
            <ErrorMessage name="price" component="div" className="text-red-500" />
          </div>
          <div>
            <label>Category</label>
            <Field as="select" name="category" className="border p-2 w-full">
              <option value="">Select Category</option>
              {["floor", "marble", "temple", "wall", "table", "stair"].map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </Field>
            <ErrorMessage name="category" component="div" className="text-red-500" />
          </div>
          <div>
            <label>Thumbnail</label>
            <input
              type="file"
              accept="image/*"
              onChange={(event) => setFieldValue("thumbnail", event.currentTarget.files[0])}
            />
            <ErrorMessage name="thumbnail" component="div" className="text-red-500" />
          </div>
          {thumbnailUrl && <img src={thumbnailUrl} alt="Preview" className="mt-2 w-32 h-32 object-cover" />}
          <button type="submit" disabled={isSubmitting} className="mt-4 p-2 bg-blue-500 text-white rounded">
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default ProductForm;
