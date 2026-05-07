function ErrorInfo({ErrorItems}){

    return (
        <>
            {ErrorItems.length===0 && <h1>not found</h1>}
        </>
    )
}

export default ErrorInfo;