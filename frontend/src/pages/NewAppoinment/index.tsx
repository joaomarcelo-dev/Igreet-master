import { useEffect, useState } from 'react';
import appointmentServer from '../../server/appointment.server';
import './style.scss';
import {  useParams } from "react-router-dom";
import serviceServer from '../../server/service.server';

export default function NewAppoinment() {
  const { id } = useParams();
  const [appoinment, setAppoinment] = useState([]);

  useEffect(() => {
    const getService = async () => {
      if (id) {
        const response  = await serviceServer.getServerById(id);
        setAppoinment(response);
        console.log(response);
        
      }
    }

    getService();
  }, [id]);

  return (
    <div className="content-page-new-appoinment">
      { id }
    </div>
  )
}