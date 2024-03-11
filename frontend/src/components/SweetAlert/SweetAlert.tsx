import Swal from 'sweetalert2';

export default function SweetAlert() {
  const success = (title: string, text: string) => {
    Swal.fire({
      title,
      text,
      icon: 'success',
      showConfirmButton: false,
      timer: 1500
    });
  }

  const error = (title: string, text: string) => {
    Swal.fire({
      title,
      text,
      icon: 'error',
      showConfirmButton: false,
      timer: 1500
    });
  }

  return {
    success,
    error
  }
}