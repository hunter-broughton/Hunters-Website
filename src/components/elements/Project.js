import React from "react";

function Project(props) {
  const handleClick = () => {
    if (props.url) {
      window.open(props.url, "_blank", "noopener noreferrer");
    }
  };

  return (
    <div className="card project" onClick={handleClick} style={{ cursor: props.url ? 'pointer' : 'default', width: 'calc(100%)', margin: '5px' }}>
      <div className="card-header">
        <p className="card-header-title">{props.title}</p>
      </div>
      <div className="card-image">
        <figure className="image" style={{ width: '100%', height: '300px', overflow: 'hidden' }}>
          <img width="100%" height="100px" src={props.image} alt={props.title} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
        </figure>
      </div>
      <div className="card-content">
        <div className="content">
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  );
}

export default Project;