

export function Hello ({children}) {
var myName = "Prashant";

let number = 456;
let fullName = () => {
  return "Prashant Jain";
}

  return <>
  <h3>Message No -  {number} : Hey There Girli, how are you doin {fullName()}</h3>
  {children}
  </>
}

export function Namaste () {
return <h3> Namaste Mitra. Kaise h aap?</h3>
}