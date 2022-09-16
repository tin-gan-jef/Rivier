import React, { useEffect, useState } from 'react'
import Side from '../../components/side/Side'
import Tob from '../../components/top/Tob'
import './bookings.css'
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import axios from "axios";
import { Link } from 'react-router-dom';



export default function Bookings() {
    const [books, setBooks] = useState([])
    useEffect(() => {
    const fetchAllBooks = async () => {
      const allBooks = await axios.get('http://localhost:8000/api/bookings')
      setBooks(allBooks.data)
    };
    fetchAllBooks()
  }, [])
  return (
    <div className='booking_home_container'>
        <Side />
        <div className='booking_home_content'>
          <Tob />
          <div className="booking_content">
            <div className="dashboard_lable">
              <div className="label_right">
                Dashboard
              </div>
              <div className="label_left">
                Dashboard / Developers
              </div>
            </div>
            <div className="bookings">
                <div className="bookings_wrapper">
                    <div className="bookings_header">
                        <div className="bookings_header_left">
                            <div className="bookings_title">All bookings</div>
                            <div className="bookings_description">Acitivities summary</div>
                        </div>
                        <div className="bookings_header_right">
                            <CloudDownloadIcon />
                        </div>
                    </div>
                    <div className="book_label">
                        <div className="label_name1">First Name</div>
                        <div className="label_name2">Last Name</div>
                        <div className="label_name3">Email</div>
                        <div className="label_name4">Arrival Date</div>
                        <div className="label_name5">Depart Date</div>
                        <div className="label_name6">Action</div>
                    </div>
                    <div className="bookings_all">
                        {books.map((book) => (
                        <div className="book_each">
                            <div className="book_fname">{book.first_name}</div>
                            <div className="book_lname">{book.last_name}</div>
                            <div className="book_email">{book.email}</div>
                            <div className="book_arrival">{book.arrival_date}</div>
                            <div className="book_depart">{book.depart_date}</div>
                            <div className="book_buttoms">
                              <Link to={`/bookings/${book._id}`}>
                                <button className="view_btn">View</button>
                              </Link>
                              <Link to={`/bookings/${book.id}`}>
                                <button className="del_btn">Delete</button>
                              </Link>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
            </div>
          </div>
        </div>
    </div>
  )
}
