import { useParams } from "react-router-dom";

export default function AppoinmentPage() {
  const { id } = useParams()
  return (
    <>
      <h1>{ id }</h1>
    </>
  )
}