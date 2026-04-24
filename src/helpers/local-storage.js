// Guardar una nueva solicitud en el localStorage
export const guardarSolicitud = (solicitud) => {
    const solicitudes = obtenerSolicitudes();
    solicitudes.push({
        ...solicitud,
  
    });
    localStorage.setItem('solicitudes_bonsai', JSON.stringify(solicitudes));
};




