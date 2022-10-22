const NavBar = ({data}) => {

    return <div>
                {data.map((text, index) => (
                <a href={text.href} className = {text.href} key = {text.href} ><button>{text.text}</button></a>
                )
                )}
            </div>

}

export default NavBar