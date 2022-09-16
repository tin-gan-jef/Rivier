import React from 'react'
import './side.css'
import BlurLinearIcon from '@mui/icons-material/BlurLinear';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import DocumentScannerIcon from '@mui/icons-material/DocumentScanner';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import TableChartIcon from '@mui/icons-material/TableChart';
import ApprovalIcon from '@mui/icons-material/Approval';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ShareIcon from '@mui/icons-material/Share';
import SwitchAccountIcon from '@mui/icons-material/SwitchAccount';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from 'react-router-dom';

export default function Side() {
  return (
    <div className='side_bar_container'>
        <div className="side_bar_content">
            <div className="side_bar_header">
                <div className="side_bar_header_icon">
                    <BlurLinearIcon fontSize='large' />
                </div>
                <div className="side_bar_header_text">
                    RIVIÈRE
                </div>
            </div>
        </div>
        <div className="side_bar_content_botton">
            <div className="side_bar_top">
                <div className="side_bar_title">Menu</div>
                <div className="side_bar_item active">
                    <div className="side_bar_icon">
                        <DashboardIcon fontSize='small' />
                    </div>
                    <div className="side_bar_text">
                        <Link to='/admin' className="link-link">
                            Dashboard
                        </Link>
                        </div>
                </div>
            </div>

            <div className="side_bar_middle">
                <div className="side_bar_title">More</div>
                <div className="side_bar_item ">
                    <div className="side_bar_icon">
                        <LibraryBooksIcon fontSize='small'  />
                    </div>
                    <div className="side_bar_text">
                        <Link to={"/bookings"} className="link-link">
                            Bookings
                        </Link>
                        </div>
                </div>
                <div className="side_bar_item">
                    <div className="side_bar_icon">
                        <HomeIcon fontSize='small' />
                    </div>
                    <div className="side_bar_text">
                        <Link to={"/"} className="link-link">
                            Home
                        </Link>
                    </div>
                </div>
                <div className="side_bar_item">
                    <div className="side_bar_icon">
                        <DocumentScannerIcon fontSize='small' />
                    </div>
                    <div className="side_bar_text">Scanner</div>
                </div>
                <div className="side_bar_item">
                    <div className="side_bar_icon">
                        <AccountBoxIcon fontSize='small' />
                    </div>
                    <div className="side_bar_text">Authentication</div>
                </div>
            </div>

            <div className="side_bar_bottom">
                <div className="side_bar_title">Admin Kit</div>
                <div className="side_bar_item ">
                    <div className="side_bar_icon">
                        <InsertChartIcon fontSize='small'  />
                    </div>
                    <div className="side_bar_text">Barchat</div>
                </div>
                <div className="side_bar_item">
                    <div className="side_bar_icon">
                        <TableChartIcon fontSize='small' />
                    </div>
                    <div className="side_bar_text">Table</div>
                </div>
                <div className="side_bar_item">
                    <div className="side_bar_icon">
                        <ApprovalIcon fontSize='small' />
                    </div>
                    <div className="side_bar_text">Approval</div>
                </div>
                <div className="side_bar_item">
                    <div className="side_bar_icon">
                        <CalendarMonthIcon fontSize='small' />
                    </div>
                    <div className="side_bar_text">Calendar</div>
                </div>
                <div className="side_bar_item">
                    <div className="side_bar_icon">
                        <ShareIcon fontSize='small' />
                    </div>
                    <div className="side_bar_text">Multi Level</div>
                </div>
                <div className="side_bar_item">
                    <div className="side_bar_icon">
                        <SwitchAccountIcon fontSize='small' />
                    </div>
                    <div className="side_bar_text">Switch Account</div>
                </div>
                <div className="side_bar_item">
                    <div className="side_bar_icon">
                        <AddLocationIcon fontSize='small' />
                    </div>
                    <div className="side_bar_text">Location</div>
                </div>
                <div className="side_bar_item exit">
                    <div className="side_bar_icon ">
                        <ExitToAppIcon fontSize='small' />
                    </div>
                    <div className="side_bar_text">SignOut</div>
                </div>
            </div>
        </div>
    </div>
  )
}
