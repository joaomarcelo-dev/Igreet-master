import React, { useEffect, useState } from "react";
import './styles.scss';
import Header from "../../components/Header";
import { ServiceType } from "../../types/Service.type";
import { getAllDaysOfAtendence, getPatientByPhoneNumber, getService, postAppointmentById } from "../../api/web.request";
import { Link, useParams } from "react-router-dom";
import Loading from "../../components/Loading";
import { FaUserEdit } from "react-icons/fa";
import { PiIdentificationBadgeThin } from "react-icons/pi";
import { IoCalendarOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import { FaUserDoctor } from "react-icons/fa6"
import { DayOfAtencenceType } from "../../types/DaysOfAtendence.type";
import formatInputUtils from "../../utils/formatInput.utils";
import { PatientType } from "../../types/Patient.type";
import { WhatsAppButton } from "../../components/WhatsAppButton";
import UserConsultCard from "../../components/UserConsultCard";

export default function Form() {
  const [service, setService] = useState<ServiceType>();
  const [daysOfAtendence, setDaysOfAtendence] = useState<DayOfAtencenceType[]>([]);
  const [patientsByPhoneNumber, setPatientsByPhoneNumber] = useState<PatientType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [listPatientsSelect, setListPatientsSelect] = useState<string[]>([])
  const [formData, setFormData] = useState({
    name: '',
    phone: service?.phone,
    cpf: '',
    birthDate: '',
    address: 'Pov. Boa Vista do Cassiano',
    day: ''
  });
  
  const { codeService } = useParams();

  const handleRequestService = async () => {
    if (codeService) {
      const { data } = await getService(codeService);
      setService(data);
      await handleGetAllPatientsByPhoneNumber(data.phone)
    }

    return
  }

  const handleGetAllDaysOfAtendence = async () => {
    const { data: allDaysOfAtendence } = await getAllDaysOfAtendence();
    setDaysOfAtendence(allDaysOfAtendence);
  }

  const handleGetAllPatientsByPhoneNumber = async (phoneNumber: string) => {
    if (!phoneNumber) return
    const { data: patientsByPhoneNumberReq } = await getPatientByPhoneNumber(phoneNumber);    
    setPatientsByPhoneNumber(patientsByPhoneNumberReq);
  }

  const handleChange = ({ name, value }: { name: string, value: string | undefined }) => {
    if (value === undefined) return;

    setFormData({ ...formData, [name]: value });
  }

  useEffect(() => {
    const get = async () => {
      try {
        setLoading(true)
        await handleRequestService()
        await handleGetAllDaysOfAtendence()
      } catch(e) {
        console.log('erro');
      } finally {
        setLoading(false) 
      }
    }

    get()
  }, [codeService]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  const handleAddList = (id: string, value: boolean) => {
    console.log(id, value);

    if (!value) {
      const newState = listPatientsSelect.filter((item) => item !== id);
      setListPatientsSelect(newState);
      return;
    }

    setListPatientsSelect([ ...listPatientsSelect, id ])
  }


  const postConsult = async () => {
    const { data } = await postAppointmentById(listPatientsSelect);

    console.log(data);
  }

  return (
    <main className="main-form">
      <Header title="Formulário" />

      {
        loading ? (
          <Loading />
        ) : (
          <>
            {
              service ? (
                patientsByPhoneNumber.length ? (
                  <section className="content-profile-found flex_center">
                    <h4 className="title">Para quem deseja marcar a consulta?</h4>

                    <section className="section-select-user-consult-card">
                      {
                        patientsByPhoneNumber.map((patient) => {
                          return (
                            <UserConsultCard
                              patient={patient}
                              setPatientList={handleAddList}
                              check={ listPatientsSelect.includes(patient.id) }
                            />
                          );
                        })
                      }
                    </section>

                    <div className="content-buttons flex_center">
                      <button
                        onClick={() => setPatientsByPhoneNumber([])}
                        className="now-patient button-options"
                        disabled={ listPatientsSelect.length ? true : false }
                      >
                        Nova Consulta
                      </button>
                      
                      <button
                        onClick={() => postConsult()}
                        className="mark-consult button-options"
                        disabled={ listPatientsSelect.length ? false : true }
                      >
                        Marcar Consulta
                      </button>
                    </div>
                  </section>
                ) : (
                  <section className="container-form flex_center">
                    <form className="form" onSubmit={(e) => handleSubmit(e)}>
                      <h4 className="title">Preencha o Formulário</h4>
                      
                      <p className="text-info-form">Preencha este formulário com seus dados para marcar a sua consulta.</p>

                      <div className="content-input flex_center">
                        <FaUserEdit size={25} />
                        <input
                          className="input-form"
                          placeholder="Nome Completo"
                          name="name"
                          value={formData.name}
                          onChange={({ target: { value, name } }) => handleChange({ name, value })}
                          required
                        />
                      </div>

                      <div className="content-input flex_center">
                        <PiIdentificationBadgeThin size={25} />
                        <input
                          className="input-form"
                          placeholder="CPF"
                          name="cpf"
                          value={ formData.cpf }
                          onChange={({ target: { value, name } }) => handleChange({ name, value, })}
                          required
                        />
                      </div>

                      <div className="content-input flex_center">
                        <IoCalendarOutline size={25} />
                        <input
                          className="input-form"
                          placeholder="Data de nascimento"
                          name="birthDate"
                          value={ formData.birthDate }
                          onChange={({ target: { value, name } }) => handleChange({ name, value: formatInputUtils.formatInputDate(value) })}
                          required
                        />
                      </div>

                      <div className="content-input flex_center">
                        <FaUserDoctor size={25} />
                        <select
                          className="select-form"
                          name="day"
                          value={ formData.day }
                          onChange={({ target: { value, name } }) => handleChange({ name, value })}
                          required
                        >
                          <option value="">Selecione o dia da consulta</option>

                          {
                            daysOfAtendence.map((day) => (
                              <option value={day.title}>{ day.title } - { day.date.replace(/-/g, '/') }</option>
                            ))
                          }
                        </select>
                      </div>

                      <div className="content-input flex_center">
                        <CiLocationOn size={25} />
                        <select
                          className="select-form"
                          name="address"
                          value={ formData.address }
                          onChange={({ target: { value, name } }) => handleChange({ name, value })}
                          required
                        >
                          <option value="Pov. Boa Vista do Cassiano">Pov. Boa Vista do Cassiano</option>
                        </select>
                      </div>

                      <button className="button-submit">Marcar consulta</button>
                    </form>
                  </section>
                )
              ) : (
                <section className="content-service-not-found flex_center">
                  <h4 className="title-not-found">Envie uma mensagem para nosso whatsapp para ter acesso</h4>

                  <Link to={`https://wa.me/5598992377794`}>
                    <WhatsAppButton />
                  </Link>
                </section>  
              )    
            }
          </>
        )
      }
    </main>
  )
}