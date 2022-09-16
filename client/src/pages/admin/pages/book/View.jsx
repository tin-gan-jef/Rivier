import React, { useEffect, useState } from 'react'
import Side from '../../components/side/Side'
import Tob from '../../components/top/Tob'
import './view.css'
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import axios from "axios";
import { useLocation } from 'react-router-dom';



export default function View() {
  const [books, setBooks] = useState({})
  const location = useLocation()
  const path = location.pathname.split('/')[2];

  useEffect(() => {
    const fetchBook = async () => {
      const book = await axios.get('http://localhost:8000/api/bookings/' + path)
      setBooks(book.data)
    };
    fetchBook()
  }, [path])
  return (
    <div className='view_home_container'>
        <Side />
        <div className='view_home_content'>
          <Tob />
          <div className="view_content">
            <div className="dashboard_lable">
              <div className="label_right">
                Dashboard
              </div>
              <div className="label_left">
                Dashboard / Developers
              </div>
            </div>
            <div className="view">
                <div className="view_wrapper">
                    <div className="view_header">
                        <div className="view_header_left">
                            <div className="view_title">Booking View</div>
                            <div className="view_description">Details</div>
                        </div>
                        <div className="view_header_right">
                            <CloudDownloadIcon />
                        </div>
                    </div>
                    <div className="book_details">
                    <div className="book_details_right">
                    <div className="book__label one">
                      <div className="book__title">Book-id: </div>
                      <div className="book__text">{books._id}</div>
                    </div>
                    <div className="book__label">
                      <div className="book__title">Full-Name: </div>
                      <div className="book__text">{books.first_name} {books.last_name}</div>
                    </div>
                    <div className="book__label one">
                      <div className="book__title">Email: </div>
                      <div className="book__text">{books.email}</div>
                    </div>
                    <div className="book__label">
                      <div className="book__title">Arrival-Date: </div>
                      <div className="book__text">{books.arrival_date}</div>
                    </div>
                    <div className="book__label one">
                      <div className="book__title">Depart-Date: </div>
                      <div className="book__text">{books.depart_date}</div>
                    </div>
                    <div className="book__label">
                      <div className="book__title">Number-Of-Persons: </div>
                      <div className="book__text">{books.number_of_person}</div>
                    </div>
                    <div className="book__label one">
                      <div className="book__title">Number-Of-Children: </div>
                      <div className="book__text">{books.number_of_children}</div>
                    </div>
                    <div className="book__label">
                      <div className="book__title">Site-Location: </div>
                      <div className="book__text">{books.site_location}</div>
                    </div>
                    <div className="book___label one">
                      <div className="book__title"></div>
                      <div className="book__text">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam a accusamus 
                        repellat temporibus libero necessitatibus voluptatem sit inventore molestiae sequi.
                         Rem quis atque, nihil ex possimus debitis officiis animi neque earum quas 
                         dicta nulla facere natus labore incidunt laboriosam ipsa. Accusantium aperiam 
                         quam impedit.
                      </div>
                    </div>
                    <div className="book_icons">
                      <div className="book_date"></div>
                      <ChevronLeftIcon fontSize='medium' className="backward" />
                    </div>
                  </div>
                </div>
                </div>
            </div>
          </div>
        </div>
    </div>
  )
}
