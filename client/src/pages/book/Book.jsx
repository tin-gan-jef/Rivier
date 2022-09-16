import React, { useState } from 'react'
import './book.css'
import Menu from '../../components/menu/Menu'
import Table from 'react-bootstrap/Table';
import Footer from '../../components/footer/Footer'
import axios from 'axios';


export default function Book() {
    const [email, setEmail] = useState('');
    const [first_name, setFirstname] = useState('');
    const [last_name, setLastname] = useState('');
    const [arrival_date, setArrival_date] = useState('');
    const [depart_date, setDepart_date] = useState('');
    const [number_of_person, setNumber_of_person] = useState('');
    const [number_of_children, setNumber_of_children] = useState('');
    const [site_location, setSite_location] = useState('');
    const [summary, setSummary] = useState('');

    

    const formHandler = async (e) =>{
        e.preventDefault()
        try {
            const res = await axios.post('http://localhost:8000/api/booking/new', {
                email: email,
                first_name: first_name,
                last_name: last_name,
                arrival_date: arrival_date,
                depart_date: depart_date,
                number_of_person: number_of_person,
                number_of_children: number_of_children,
                site_location: site_location,
                summary: summary,
            });
            if(res) alert("Successfully booked a site")
        } catch (error) {
            alert(error.message);
        }
    }

  return (
    <div className='book_container'>
        <div className="book_slide">
            <Menu />
            <div className="book_title">
                <p>Booking</p>
            </div>
        </div>

        <div className="book_wrapper">
        <div className="book_indication">OUR RATES</div>
            <div className="book_header">RIVIÈRE ROUGE RV PARK</div>
            <div className="book_description">
                Probably $50-60 night depending on if waterfront or not. Then $750-950 monthly depending on location.
            </div>
            <div className="books">
                <div className="book_rates">
                    <div className="book_title_title">Rates</div>
                    <Table striped bordered hover variant=''>
                    <thead>
                        <tr>
                        <th>PER NIGHT/MONTH</th>
                        <th>PRICE</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>Night on waterfall</td>
                        <td>$70</td>
                        </tr>
                        <tr>
                        <td>Night off waterfall</td>
                        <td>$60</td>
                        </tr>
                        <tr>
                        <td>Month on waterfall</td>
                        <td>$950</td>
                        </tr>
                        <tr>
                        <td>Month off waterfall</td>
                        <td>$750</td>
                        </tr>
                    </tbody>
                </Table>
                </div>
                <div className="book_form">
                    <div className="book_title_title">Booking form</div>
                    <form  className="form" onSubmit={formHandler}>
                        <div className="form_input">
                            <label htmlFor="email" className='email_label'>Email</label>
                            <input type="email" onChange={e=>setEmail(e.target.value)} autoFocus placeholder='e.g benwunnam@gmail.com' required className='input' />
                        </div>
                        <div className="form_input_double">
                            <div className="form_input_left">
                                <label htmlFor="fname">First Name</label>
                                <input type="text" onChange={e=>setFirstname(e.target.value)}  placeholder='e.g Ben' className='input' />
                            </div>
                            <div className="form_input_right">
                                <label htmlFor="fname">Last Name</label>
                                <input type="text" onChange={e=>setLastname(e.target.value)} placeholder='e.g Wunnam' className='input' />
                            </div>
                        </div>
                        <div className="form_input_double">
                            <div className="form_input_left">
                                <label htmlFor="fname">Arrival Date</label>
                                <input type="date" onChange={e=>setArrival_date(e.target.value)} required className='input' />
                            </div>
                            <div className="form_input_right">
                                <label htmlFor="fname">Depart Date</label>
                                <input type="date" onChange={e=>setDepart_date(e.target.value)}  required name='eDate' className='input' />
                            </div>
                        </div>
                        <div className="form_input_double">
                            <div className="form_input_left">
                                <label htmlFor="fname">Number of Persons</label>
                                <input min={'1'} type="number" onChange={e=>setNumber_of_person(e.target.value)} placeholder='0' required className='input'  />
                            </div>
                            <div className="form_input_right">
                                <label htmlFor="fname">Number of Children</label>
                                <input type="number" min={'1'} onChange={e=>setNumber_of_children(e.target.value)} placeholder='0' required  className='input' />
                            </div>
                        </div>
                        <div className="form_input">
                            <label htmlFor="email">Site Location</label>
                            <select className='form_selection' onChange={e=>setSite_location(e.target.value)}>
                                <option value="" disabled selected>Select site location</option>
                                <option value="on Water fall">On water fall</option>
                                <option value="off Water fall">Off water fall</option>
                            </select>
                        </div>
                        <div className="form_input">
                            <label htmlFor="fname">Summary of your event type</label>
                            <textarea onChange={e=>setSummary(e.target.value)} cols="30" rows="5" className='txtarea'></textarea>
                        </div>
                        <button type='submit' className="form_btn">Submit</button>
                    </form>
                </div>
            </div>
        </div>
        <Footer />
    </div>
  )
}
