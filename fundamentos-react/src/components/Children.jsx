const Children = ({children}) => {
  return (
    <>
    <h2 style={{fontSize: "3rem"}}>Esse é meu elemento pai</h2>
    {children}
    </>
  )
}

export default Children