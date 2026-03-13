import {useState} from 'react';
import {Form,Button} from 'react-bootstrap';
import FormContainer from '../components/FormContainer';
import {useDispatch,useSelector} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { saveShippingAddress } from '../slices/cartSlice';
import CheckoutSteps from '../components/CheckoutSteps';

const ShippingScreen = () => {

    const cart=useSelector((state)=>state.cart);
    const shippingAddress=cart.shippingAddress;
    
    const [address,setAddress]=useState(shippingAddress?.address || '');
    const [city,setCity]=useState(shippingAddress?.city || '');
    const [postalCode,setpostalCode]=useState(shippingAddress?.postalCode || '');
    const [country,setCountry]=useState(shippingAddress?.country || '');

    const dispatch=useDispatch();
    const navigate=useNavigate();
     


        const submitHandler=(e)=>{
            e.preventDefault();
            //dispatch save shipping address
            dispatch(saveShippingAddress({address,city,
                postalCode,country}));
            navigate('/payment');
            //console.log('submit');
        };

  return (
    <FormContainer>
        <CheckoutSteps step1 step2 step3 step4 />
        <h1>Shipping</h1>
        <Form onSubmit={submitHandler}>
            <Form.Group controlId='address' className='my-2'>
                <Form.Label>Address</Form.Label>
                <Form.Control type='text' placeholder='Enter address' 
                value={address}
                 onChange={(e)=>setAddress(e.target.value)}>

                </Form.Control>
            </Form.Group>

            <Form.Group controlId='city' className='my-2'>
                <Form.Label>City</Form.Label>
                <Form.Control type='text' placeholder='Enter city' 
                value={city}
                 onChange={(e)=>setCity(e.target.value)}>

                </Form.Control>
            </Form.Group>

            <Form.Group controlId='postalCode' className='my-2'>
                <Form.Label>Postal Code</Form.Label>
                <Form.Control type='text' placeholder='Enter postal code' 
                value={postalCode}
                 onChange={(e)=>setpostalCode(e.target.value)}>

                </Form.Control>
            </Form.Group>

            <Form.Group controlId='country' className='my-2'>
                <Form.Label>Country</Form.Label>
                <Form.Control type='text' placeholder='Enter country' 
                value={country}
                 onChange={(e)=>setCountry(e.target.value)}>

                </Form.Control>
            </Form.Group>

            <Button type='submit' variant='primary' className='my-2'>Continue</Button>
            </Form>
        </FormContainer>
  )
}

export default ShippingScreen ;