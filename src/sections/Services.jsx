import ServiceCard from "../components/ServiceCard"
import { services } from "../constants"

const Services = () => {
  return (
    <service className="max-container flex justify-center flex-wrap gap-9">
      {services.map( (service) =>(
        <ServiceCard key={service.label} {...service} />
      ))}
    </service>
  )
}

export default Services