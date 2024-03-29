import './style.scss';

import { useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { RootReducerType } from "../../types/Reducers.type";
import { useEffect, useState } from "react";
import { Appointment, UpdateStatusAppointment } from "../../types/Appoinments.type";
import Header from "../../components/Header";
import appointmentServer from '../../server/appointment.server';
import Loading from '../../components/Loading';
import SweetAlert from '../../components/SweetAlert/SweetAlert';
import formatInputUtils from '../../utils/formatInput.utils';

const defaultUserImg = 'data:image/jpeg;base64,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';

export default function AppoinmentPage() {
  const location = useLocation();
  const navigation = useNavigate();

  const [appointment, setAppointment] = useState<Appointment>()
  const [loading, setLoading] = useState(false);
  const { appointments } = useSelector((state: RootReducerType) => state.app)
  const { id } = useParams<{ id: string, status: string }>();
  
  const queryParams = new URLSearchParams(location.search);
  const statusParam = queryParams.get('status');
  
  const [status, setStatus] = useState(statusParam === 'true');

  useEffect(() => {
    appointments.forEach(appointment => {
      if (appointment.id === id) {
        setAppointment(appointment)
      }
    });

  }, [appointments, id, navigation]);

  const updateAppointment = async ({ complet, id }: UpdateStatusAppointment) => {
    setLoading(true);
    const { status } = await appointmentServer.updateAppointment({ complet, id  })

    if (status === 200) {
      setNewValeuParm('status', String(complet));
      SweetAlert().success('success', 'Agendamento atualizado com sucesso!')

      setTimeout(() => {
        navigation('/appoinments');
      }, 2000);
      
    } else {
      SweetAlert().error('error', 'Erro ao atualizar agendamento!')
    }

    setLoading(false);
  }

  const handleDelete = async () => {
    const response = confirm('Tem certeza que deseja deletar esse agendamento?');

    if (response && id) {
      await appointmentServer.deleteAppointment(id).then(()=> {
        SweetAlert().success('success', 'Agendamento deletado com sucesso!')
        
        setTimeout(() => {
          navigation('/appoinments');
        }, 2000)
      }).catch(() => {
        SweetAlert().error('error', 'Erro ao deletar agendamento!')
      });
    }
  }

  const setNewValeuParm = (parm: string, value: string) => {
    const url = new URL(window.location.href);
    url.searchParams.set(parm, value);
    window.history.replaceState({}, '', url.toString());
  
    setStatus(!status);
  }

  return (
    <>
      {
        loading ? <Loading /> : (
          <>
            <Header />
          
            <div className="content-info-appoinment flex_center">
              <img
                className="img-profile-appoinment"
                src={defaultUserImg}
                alt="Imagem de perfil do paciente"
              />

              <h1 className='name-of-profile-appoinment'>
                { appointment?.patient.name }
              </h1>

              <section
                className='appoinment-info-details flex_center'
              >
                <p>Data de Nasc: <span>
                  {
                    appointment?.patient
                      .birthDate
                      .replace('-', '/')
                      .replace('-', '/')
                      .replace('-', '/')
                      || 'Não informado' 
                  }</span></p>

                <p>CPF: <span>
                  { appointment?.patient.cpf || 'Não informado' }
                </span></p>
                
                  <p>Telefone: <span>
                      { 
                        appointment?.patient.phone ?

                        <a href={`http://api.whatsapp.com/send?1=pt_BR&phone=${appointment?.patient.phone.replace('@c.us', '')}`}>
                          { formatInputUtils.formatNumberPhoneVenom(appointment.patient.phone) }
                        </a> :

                        'Não informado' 
                      }
                    </span>
                  </p>

                <p>Endereço: <span>
                  { appointment?.patient.address || 'Não informado' }
                </span></p>
              </section>
              
              <section
                className='appoinment-buttons-options flex_center'
              >
                <button
                  onClick={handleDelete}
                  type="button"
                  className="btn btn-danger"
                >
                  Deletar
                </button>

                <button
                  onClick={() =>{
                    if (id) {
                      updateAppointment({ complet: !status, id })
                    }
                  }}
                  type="button"
                  className={`btn btn-${status === true ? 'warning' : 'success'}`}
                >
                  {
                    status === true ? 'Desmarcar' : 'Marcar como feito'
                  }
                </button>
                </section>
            </div>
          </>
        )
      }
    </>
  )
}