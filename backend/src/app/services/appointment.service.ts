import { AppointmentInputType, UpdateAppointmentProp } from "../../types/Appointment.type";
import { PatientInputType } from "../../types/Patient.type";
import { ReturnServiceType } from "../../types/ReturnService.type";
import appointmentModel from "../models/appointment.model";
import DaysOfAtendenceModel from "../models/daysOfAtendence.model";
import patientsModel from "../models/patients.model";
import serviceModel from "../models/service.model";

import express from 'express';

const getAllAppointment = async (): Promise<ReturnServiceType> => {
  const allAppointment = await appointmentModel.getAllAppointment();

  return {
    data: allAppointment,
    status: 200,
  }
} 

const updateAppointment = async ({ id, status }: UpdateAppointmentProp): Promise<ReturnServiceType> => {
  const appointment = await appointmentModel.getAppointmentById(id);

  if (!appointment) {
    return {
      status: 404,
      data: {
        message: 'Atendimento não encontrado'
      }
    }
  }

  const appointmentUpdated = await appointmentModel.updateAppointment({ id, status });

  return {
    data: appointmentUpdated,
    status: 204,
  }
}

const createAppointment = async ({ dayOfAtencenceId = '', patientId = '', imgURL, address, birthDate, cpf, name, phone, serviceId = '', token_valid }: AppointmentInputType & PatientInputType & { serviceId: string, token_valid: boolean }): Promise<ReturnServiceType> => {
  const dayOfAtencence = await DaysOfAtendenceModel.getDaysOfAtendenceById(dayOfAtencenceId);
  
  if (!dayOfAtencence) {
    return {
      data: {
        message: 'Os dados do dia de consulta informado não foram encontrados',
      },
      status: 404,
    }
  }

  if (token_valid) {
    const newPatient = await patientsModel.createPatient({ address, birthDate, cpf, name, phone });

    const appointmentCreated = await appointmentModel.createAppointment({
      dayOfAtencenceId,
      patientId: newPatient.id,
      imgURL,
    });

    return {
      status: 201,
      data: appointmentCreated,
    }
  }

  const patient = await patientsModel.getPatientById(patientId);

  if (!patient) {
    const service = await serviceModel.getServiceById(serviceId)

    if (!service) {
      return {
        status: 404,
        data: {
          message: 'Serviço não encontrado'
        }
      }
    }
    

    const newPatient = await patientsModel.createPatient({ address, birthDate, cpf, name, phone });

    const appointmentCreated = await appointmentModel.createAppointment({
      dayOfAtencenceId,
      patientId: newPatient.id,
      imgURL,
    });

    if (serviceId) {
      await serviceModel.deleteServiceById(serviceId)
    }

    return {
      status: 201,
      data: appointmentCreated,
    }
  }

  const appointmentCreated = await appointmentModel.createAppointment({ dayOfAtencenceId, patientId, imgURL });
  
  return {
    data: appointmentCreated,
    status: 201,
  }
}

const deleteAppointmentById = async (id: string): Promise<ReturnServiceType> => {
  const appointment = await appointmentModel.getAppointmentById(id)

  if (!appointment) {
    return {
      status: 404,
      data: {
        message: 'Agendamento não encontrado'
      }
    }
  }

  const appointmentDeleted = await appointmentModel.deleteAppointmentById(id);

  return {
    status: 204,
    data: appointmentDeleted,
  }
}

const appointmentService = {
  getAllAppointment,
  updateAppointment,
  createAppointment,
  deleteAppointmentById,
}

export default appointmentService