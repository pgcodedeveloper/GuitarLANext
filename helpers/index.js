export const formatearFecha = fecha =>{
    const FechaN= new Date(fecha);

    const op = {
        year: 'numeric',
        month: 'long',
        day: '2-digit'
    }
    return FechaN.toLocaleDateString('es-ES',op);
}