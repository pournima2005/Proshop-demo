import { apiSlice } from './apiSlice';
import { ORDERS_URL, PAYPAL_URL } from '../constants';

export const orderApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createOrder: builder.mutation({ // Fixed casing to camelCase
      query: (order) => ({
        url: ORDERS_URL,
        method: 'POST',
        body: { ...order },
      }),
    }),

    getOrderDetails: builder.query({
      query: (orderId) => ({
        url: `${ORDERS_URL}/${orderId}`,
      }),
      keepUnusedDataFor: 5,
      providesTags: ['Order'], // This "labels" the individual order
    }),

    payOrder: builder.mutation({
      query: ({ orderId, details }) => ({
        url: `${ORDERS_URL}/${orderId}/pay`,
        method: 'PUT',
        body: { ...details },
      }),
      invalidatesTags: ['Order'], // This forces a refetch of the order
    }),

    getPayPalClientId: builder.query({
      query: () => ({
        url: PAYPAL_URL,
      }),
      keepUnusedDataFor: 5,
    }),

    getMyOrders: builder.query({
      query: () => ({
        url: `${ORDERS_URL}/mine`,
      }),
      keepUnusedDataFor: 5,
    }),

    getOrders: builder.query({
      query: () => ({
        url: ORDERS_URL,
      }),
      keepUnusedDataFor: 5,
      providesTags: ['Order'], // Labels the whole list of orders
    }),

    deliverOrder: builder.mutation({
      query: (orderId) => ({  
        url: `${ORDERS_URL}/${orderId}/deliver`,
        method: 'PUT',
      }),
      invalidatesTags: ['Order', 'Order'],  
    }),
  }),
});

export const {
  useCreateOrderMutation,
  useGetOrderDetailsQuery,
  usePayOrderMutation,
  useGetPayPalClientIdQuery,
  useGetMyOrdersQuery,
  useGetOrdersQuery,
  useDeliverOrderMutation,
} = orderApiSlice;