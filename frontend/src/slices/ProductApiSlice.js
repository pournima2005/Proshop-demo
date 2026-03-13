// import {PRODUCTS_URL ,UPLOAD_URL} from "../constants";
// import {apiSlice} from"./apiSlice";

 
// export const productApiSlice = apiSlice.injectEndpoints({
//     endpoints: (builder) => ({
//         getProducts: builder.query({
//             query: () => ({
//                 url: PRODUCTS_URL,
//             }),
//             providesTags: ['Product'], // Added this
//             keepUnusedDataFor: 5,
//         }),
//         getProductDetails: builder.query({
//             query: (id) => ({
//                 url: `${PRODUCTS_URL}/${id}`,
//             }),
//             providesTags: (result, error, id) => [{ type: 'Product', id }], // Better way for specific items
//             keepUnusedDataFor: 5,
//         }),
//         createProduct: builder.mutation({
//             query: () => ({
//                 url: PRODUCTS_URL,
//                 method: 'POST',
//             }),
//             invalidatesTags: ['Product'], // Refreshes the list
//         }),
//         updateProduct: builder.mutation({
//             query: (data) => ({
//                 url: `${PRODUCTS_URL}/${data._id}`,
//                 method: 'PUT',
//                 body: data,
//             }),
//             invalidatesTags: ['Product'], // Forces details and list to refresh
//         }),

//         uploadProductImage: builder.mutation({
//             query: (data) => ({
//                 url: `${UPLOAD_URL}`,
//                 method: 'POST',
//                 body: data,
//             }),
             
//         }),

//         deleteProduct: builder.mutation({
//             query: (productId) => ({
//                 url: `${PRODUCTS_URL}/${productId}`,
//                 method: 'DELETE',
                
//             }),
             
//         }),
//     }),
// });


     
// export const {useGetProductsQuery,useGetProductDetailsQuery,
//     useCreateProductMutation,
//     useUpdateProductMutation,
//     useUploadProductImageMutation,
//     useDeleteProductMutation}=productApiSlice;


import { PRODUCTS_URL, UPLOAD_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const productApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: ({keyword,pageNumber}) => ({
        url: PRODUCTS_URL,
        params:{
          keyword,
          pageNumber,
        }
      }),
      providesTags: ['Product'], // Label this data as 'Product'
      keepUnusedDataFor: 5,
    }),
    getProductDetails: builder.query({
      query: (id) => ({
        url: `${PRODUCTS_URL}/${id}`,
      }),
      providesTags: (result, error, id) => [{ type: 'Product', id }],
      keepUnusedDataFor: 5,
    }),
    createProduct: builder.mutation({
      query: () => ({
        url: PRODUCTS_URL,
        method: 'POST',
      }),
      invalidatesTags: ['Product'], // Tells getProducts to refresh
    }),
    updateProduct: builder.mutation({
      query: (data) => ({
        url: `${PRODUCTS_URL}/${data._id}`,
        method: 'PUT',
        body: data,
      }),
      //  Refresh both the list and the specific product details
      invalidatesTags: (result, error, { _id }) => [
        { type: 'Product', id: _id },
        { type: 'Product' }
      ],
    }),
    uploadProductImage: builder.mutation({
      query: (data) => ({
        url: `${UPLOAD_URL}`,
        method: 'POST',
        body: data,
      }),
    }),
    deleteProduct: builder.mutation({
      query: (productId) => ({
        url: `${PRODUCTS_URL}/${productId}`,
        method: 'DELETE',
      }),
      // FIX: Without this, the deleted product stays in the UI cache
      invalidatesTags: ['Product'], 
    }),

    createReview:builder.mutation({
      query: (data) => ({
        url: `${PRODUCTS_URL}/${data.productId}/reviews`,
        method: 'POST',
        body:data,
      }),
      
      invalidatesTags: ['Product'], 

    }),
    getTopProducts: builder.query({
      query: () => ({
        url: `${PRODUCTS_URL}/top`,
      }),
      providesTags: ['Product'],
      keepUnusedDataFor: 5,
    }),

  }),
});

export const {
  useGetProductsQuery,
  useGetProductDetailsQuery,
  useCreateProductMutation,
  useUpdateProductMutation,
  useUploadProductImageMutation,
  useDeleteProductMutation,
  useCreateReviewMutation,
  useGetTopProductsQuery,
} = productApiSlice;