import { useRouteError } from "react-router-dom";

const Error = () => {
    const err=useRouteError();
    console.log(err);
  return (
    <div>
      <h1>OOps!!!</h1>
      <h3>SOmething went wrong!!!!</h3>
      <p>{err.data}<br></br>{err.status} {err.statusText}</p>
    </div>
  )
}

export default Error;
