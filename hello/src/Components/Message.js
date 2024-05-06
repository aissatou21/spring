function Message({name, job, age}) {
    return (
    <p className="alert alert-success">
        this is a message from <b>{name}</b> who is a <b>{job}</b>, and he is {" "} <b>{age}</b> years old
   </p>
);
  }
  export default Message;