import { useParams } from "react-router-dom";

export default function NewAppoinment() {
  const { id } = useParams();

  return (
    <div className="content-page-new-appoinment">
      { id }
    </div>
  )
}