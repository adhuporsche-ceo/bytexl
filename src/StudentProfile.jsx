function StudentProfile(props) {
  return (
    <div className="profile">
      <p><strong>Name:</strong> {props.name}</p>
      <p><strong>Department:</strong> {props.department}</p>
      <p><strong>Year:</strong> {props.year}</p>
    </div>
  );
}

export default StudentProfile;