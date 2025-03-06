export function Header(){
    let name="React js"
    return(
        <div className="nav">
           <div className="left">
            <p>{name}</p>
           </div>
<div className="right">
    <ul>
        <li>home</li>
        <li>about</li>
        <li>contact</li>
        <li>blog</li>
    </ul>
</div>
        </div>
    )
}