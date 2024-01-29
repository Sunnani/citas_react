import Paciente from "./Paciente" 



const ListadoPacientes = ({pacientes, setPaciente, eliminarPaciente}) => {

  return (
    <div className='mx-10 my-10 md:w-1/2 lg:w-3/5 '>

      { pacientes && pacientes.length ? (
        <div>
          
          <h2 className="font-black text-3xl text-center">Listado<br/>Pacientes</h2>
          
          <p className="text-xl mt-5 mb-2 text-center">
            Administra tus {''}
            <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
          </p>

          {pacientes.map( paciente => (
              <Paciente 
                key = {paciente.id}  
                paciente={paciente}
                setPaciente = {setPaciente}
                eliminarPaciente={eliminarPaciente}   
              />
          ))}

        </div>
      ) : (
        <div>
          <h2 className="font-black text-3xl text-center">No hay Pacientes</h2>
          <p className="text-xl mt-5 mb-2 text-center">
            Comienza agregando pacientes {''}
            <span className="text-indigo-600 font-bold">y apareceran en este lugar</span>
          </p>
        </div>
      )}
    </div>
  )
}

export default ListadoPacientes
