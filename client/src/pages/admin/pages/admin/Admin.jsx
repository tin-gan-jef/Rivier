import React from 'react'
import Side from '../../components/side/Side'
import Tob from '../../components/top/Tob'
import Widget from '../../components/widgets/Widget'
import './admin.css'
import Chart1 from '../../components/charts/chart1/Chart1'
import Calenda from '../../components/calendar/Calender'
import SyncAltIcon from '@mui/icons-material/SyncAlt';

export default function Admin() {
  return (
    <div className='admin_home_container'>
        <Side />
        <div className='admin_home_content'>
          <Tob />
          <div className="admin_content">
            <div className="dashboard_lable">
              <div className="label_right">
                Dashboard
              </div>
              <div className="label_left">
                Dashboard / Developers
              </div>
            </div>
            <div className="content_top">
              <Widget type="users" bg="" />
              <Widget type="orders" bg="" />
              <Widget type="earnings" bg="" />
              <Widget type="balance" bg="" />
            </div>

            <div className="chart1_container">
              <div className="chart1_left">
                <div className="sales_header">
                  <div className="sale_header_left">Sales Analytics</div>
                  <div className="sale_header_right">....</div>
                </div>
                <Chart1 />
              </div>

              <div className="chart1_right">
                <div className="chart1_right_top">
                  <div className="chart1_right_top_top">
                    <div className="top_top_left">
                      <SyncAltIcon />
                    </div>
                    <div className="top_top_right">...</div>
                  </div>
                  <div className="chart1_right_top_middle">
                    <div className="top_middle_left">
                      Enhance your Campaign for better outreach 
                    </div>
                    <div className="top_middle_right">
                      <img src="/images/man.jpg" alt="man" width={"180px"} heights="150px" />
                    </div>
                  </div>
                  <div className="chart1_right_top_bottom">
                    <p className="chart1_btn">Upgrade!</p>
                  </div>
                </div>
                <div className="chart1_right_bottom">
                  <Calenda />
                </div>
              </div>
            </div>

            <footer className='admin_footer_container'>
              
            </footer>

          </div>
        </div>
    </div>
  )
}
