import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError();
    return (
        <>
        <h1>oh bhai kidhar ko !!! vapas nikal le</h1>
        <h2>{err.status}</h2>
        </>
    )
}

export default Error;