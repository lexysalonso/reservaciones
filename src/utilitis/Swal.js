import Swal from "sweetalert2";

const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  },
});

export default Toast;

export const ShowSawl = (status,msg) => {
  console.log("ver status", status)
  switch (status) {
    case 404:
      Toast.fire({
        icon: "error",
        title: msg,
      });
      break
    case 400:
      Toast.fire({
        icon: "error",
        title: "Hubo un error al cargar los Choferes",
      });  
      break
    case 500:
        Toast.fire({
          icon: "error",
          title: "Hubo un error en el servidor al cargar los Choferes",
        }); 
        break
  }
};
