import PropTypes from "prop-types";

export function ProjectList(props) {
  const projects = props.projects;

  return (
    <>
      <div className="img_container">
        {projects.map((item, index) => (
          <img key={index} className="img_item" src={item.img} alt="" />
        ))}
      </div>
    </>
  );
}

ProjectList.propTypes = {
  projects: PropTypes.array,
};
