import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError();
    return (
        <>
        <div className="h-full w-auto bg-gray-300 flex items-center justify-center py-[22rem]">
        {err.status}
            ....Something went Wrong.
        </div>
        </>
    )
}

export default Error;