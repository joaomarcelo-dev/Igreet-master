import { MessageTempType } from "../types/MessageTemp.type";

const messagesTemp: MessageTempType[] = []

const addMessageTemp = ({ body, expiration, from }: MessageTempType) => {
  messagesTemp.push({ body, expiration, from });
}

const messageTemp = {
  addMessageTemp,
  messagesTemp
}

export default messageTemp;