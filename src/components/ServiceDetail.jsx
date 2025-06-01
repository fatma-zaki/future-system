import { useParams } from "react-router-dom";

const ServiceDetail = () => {
  const { title } = useParams();

  return (
    <div className="service-detail">
      <h2>Service: {decodeURIComponent(title)}</h2>
      <p>More detailed information about {decodeURIComponent(title)} will be displayed here.</p>
    </div>
  );
};

export default ServiceDetail;
